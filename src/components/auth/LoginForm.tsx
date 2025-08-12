"use client"
import { Card } from "@/components/ui";
import { ENV } from "@/core/config/env";
import { initialLoginValues, Login } from "@/core/models/auth/login";
import { authService } from "@/core/services/authService";
import { tokenService } from "@/core/services/token.service";
import { LoginValidationSchema } from "@/core/validators/login-schema";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FormikHelpers, useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export type LoginFormProps = {
  onSuccess?: () => void;
  title?: string;
  dense?: boolean;
};

export default function LoginForm({ onSuccess, title = "Log in", dense = false }: LoginFormProps) {
  const [loadingProvider, setLoadingProvider] = useState<"google" | "facebook" | null>(null);
  const [googleReady, setGoogleReady] = useState(false);
  const [facebookReady, setFacebookReady] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement | null>(null);

  // Unified handler for SSO flows
  const handleSsoLogin = async (authorizationValue: string) => {
    try {
      const loginResult = await authService.login(authorizationValue);
      if (loginResult && loginResult.token) {
        tokenService.setLoggedUserDetail(
          loginResult.token,
          loginResult.tokenExpires,
          loginResult.firstName,
          loginResult.lastName
        );
        if (onSuccess) onSuccess();
        else {
          const user = JSON.stringify(loginResult);
          window.location.replace(`${ENV.DASHBOARD_URL}?token=${loginResult.token}&value=${user}`);
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoadingProvider(null);
    }
  };

  // Load Google and FB SDKs on mount
  useEffect(() => {
    // Google Identity Services
    const loadGoogle = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        try {
          const g = window.google;
          if (!g?.accounts?.id || !ENV.GOOGLE_CLIENTID) return;
          g.accounts.id.initialize({
            client_id: ENV.GOOGLE_CLIENTID,
            callback: (response: { credential?: string }) => {
              if (response?.credential) {
                setLoadingProvider("google");
                // Pass Google ID token via Authorization header
                handleSsoLogin(`Bearer ${response.credential}`);
              }
            },
          });
          if (googleButtonRef.current) {
            g.accounts.id.renderButton(googleButtonRef.current, {
              theme: "outline",
              size: "large",
              text: "continue_with",
              width: 320,
            });
          }
          setGoogleReady(true);
        } catch {
          setGoogleReady(false);
        }
      };
      document.body.appendChild(script);
    };

    // Facebook SDK
    const loadFacebook = () => {
      if (!ENV.FACEBOOK_APPID) return;
      // If already present, skip
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).FB) {
        setFacebookReady(true);
        return;
      }
      (window as unknown as { fbAsyncInit?: () => void }).fbAsyncInit = function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const FB = (window as any).FB;
        FB.init({
          appId: ENV.FACEBOOK_APPID,
          cookie: true,
          xfbml: false,
          version: "v19.0",
        });
        setFacebookReady(true);
      };
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(script);
    };

    loadGoogle();
    loadFacebook();
    // handleSsoLogin is stable in this component; intentionally not added to deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFacebookLogin = () => {
    try {
      const FB = window.FB;
      if (!FB) {
        toast.error("Facebook is not ready. Please try again.");
        return;
      }
      setLoadingProvider("facebook");
      FB.login((response) => {
        if (response?.authResponse?.accessToken) {
          const accessToken = response.authResponse.accessToken as string;
          handleSsoLogin(`Bearer ${accessToken}`);
        } else {
          setLoadingProvider(null);
        }
      }, { scope: "public_profile,email" });
    } catch {
      setLoadingProvider(null);
      toast.error("Facebook login failed. Please try again.");
    }
  };
  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: LoginValidationSchema,
    onSubmit: async (values, actions: FormikHelpers<Login>) => {
      actions.setSubmitting(true);
      const credentials = `${values.email}:${values.password}`;
      const basicValue = typeof window !== 'undefined'
        ? window.btoa(unescape(encodeURIComponent(credentials)))
        : '';
      const token = `Basic ${basicValue}`;
      try {
        const loginResult = await authService.login(token);
        if (loginResult && loginResult.token) {
          tokenService.setLoggedUserDetail(loginResult.token, loginResult.tokenExpires, loginResult.firstName, loginResult.lastName);
          if (onSuccess) onSuccess();
          else {
            const user = JSON.stringify(loginResult);
            window.location.replace(`${ENV.DASHBOARD_URL}?token=${loginResult.token}&value=${user}`);
          }
        } else {
          toast.error('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.log(error instanceof Error ? error.message : 'Something went wrong');
        toast.error('Login failed. Please check your credentials.');
      }
      actions.setSubmitting(false);
    }
  });

  return (
    <Card title={title} className={clsx('w-full', dense ? 'mx-auto' : 'w-[95%] md:w-2xl mx-auto my-5')} titleClassName='uppercase text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium text-white'>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-4'>
          <label className='mb-2 block'>Email</label>
          <div className='relative'>
            <input {...formik.getFieldProps('email')} type='email' placeholder='Enter Email'
              className={clsx('form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                formik.touched.email && formik.errors.email ? 'border border-red-500' : 'border border-gray-300')}
            />
            <FontAwesomeIcon icon={faEnvelope} className={clsx(
              'absolute top-1/2 right-4 transform -translate-y-1/2',
              formik.touched.email && formik.errors.email ? 'text-red-500' : 'text-gray-500')}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className='mt-1 text-sm text-red-600'>{formik.errors.email}</div>
          )}
        </div>

        <div className='mb-4'>
          <label className='mb-2 block'>Password</label>
          <div className='relative'>
            <input {...formik.getFieldProps('password')} type='password' placeholder='Enter Password'
              className={clsx('form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                formik.touched.password && formik.errors.password ? 'border border-red-500' : 'border border-gray-300')}
            />
            <FontAwesomeIcon icon={faLock} className={clsx(
              'absolute top-1/2 right-4 transform -translate-y-1/2',
              formik.touched.password && formik.errors.password ? 'text-red-500' : 'text-gray-500')}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className='mt-1 text-sm text-red-600'>{formik.errors.password}</div>
          )}
        </div>

        <div className='text-center mt-6'>
          <button type="submit" className="py-2 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10"
            disabled={formik.isSubmitting || !formik.isValid}>
            {formik.isSubmitting ? 'Logging in...' : 'Log in'}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-200 w-full" />
          <span className="text-xs text-gray-500 whitespace-nowrap">Or continue with</span>
          <div className="h-px bg-gray-200 w-full" />
        </div>

        {/* Social sign-in */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Google button container rendered by GIS */}
          <div className="w-full flex justify-center sm:justify-start">
            <div ref={googleButtonRef} className="inline-flex" aria-disabled={!googleReady} />
          </div>

          {/* Facebook button */}
          <button
            type="button"
            onClick={handleFacebookLogin}
            disabled={!facebookReady || loadingProvider === 'facebook'}
            className={clsx(
              "py-2 px-4 border border-gray-200 text-sm flex items-center justify-center gap-2 w-full transition-all delay-100",
              !facebookReady ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-50"
            )}
          >
            <Image src={'/images/facebook-icon.webp'} width={20} height={20} alt='facebook-icon' />
            {loadingProvider === 'facebook' ? 'Connecting...' : 'Continue with Facebook'}
          </button>
        </div>
      </form>
    </Card>
  );
}
