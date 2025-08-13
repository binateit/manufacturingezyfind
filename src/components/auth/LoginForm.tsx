"use client"
import { Card } from "@/components/ui";
import GoogleLoginButton from "@/components/shared/GoogleLoginButton";
import FacebookLoginButton from "@/components/shared/FacebookLoginButton";
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
import { toast } from "react-toastify";

export type LoginFormProps = {
  onSuccess?: () => void;
  title?: string;
  dense?: boolean;
};

export default function LoginForm({ onSuccess, title = "Log in", dense = false }: LoginFormProps) {
  const [loadingProvider, setLoadingProvider] = useState<"google" | "facebook" | null>(null);
  const googleWrapperRef = useRef<HTMLDivElement | null>(null);
  const [googleWidth, setGoogleWidth] = useState<number | undefined>(undefined);

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

  // Social buttons now handled via reusable components
  useEffect(() => {
    const element = googleWrapperRef.current;
    if (!element) return;

    const compute = () => {
      const containerWidth = element.clientWidth;
      // Clamp to GIS allowed range roughly [200, 400]
      const desired = Math.max(220, Math.min(380, containerWidth));
      setGoogleWidth(Math.floor(desired));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(element);
    window.addEventListener('resize', compute);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', compute);
    };
  }, []);
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
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
          <div className="w-full flex justify-center sm:justify-start" ref={googleWrapperRef}>
            <GoogleLoginButton
              onSuccess={(res) => {
                if (res.credential) {
                  setLoadingProvider("google");
                  handleSsoLogin(`Bearer ${res.credential}`);
                } else {
                  toast.error("Google did not return a credential");
                }
              }}
              onError={(reason) => toast.error(reason)}
              theme="outline"
              size="large"
              text="continue_with"
              width={googleWidth}
            />
          </div>

          <FacebookLoginButton
            className={clsx(
              "h-10 py-2 px-4 border border-gray-200 text-sm flex items-center justify-center gap-2 w-full transition-all delay-100 hover:bg-gray-50"
            )}
            style={{ width: "100%", maxWidth: googleWidth ? `${googleWidth}px` : undefined }}
            text={loadingProvider === 'facebook' ? 'Connecting...' : 'Continue with Facebook'}
            onSuccess={(res) => {
              const accessToken = (res as unknown as { accessToken?: string }).accessToken;
              if (accessToken) {
                setLoadingProvider("facebook");
                handleSsoLogin(`Bearer ${accessToken}`);
              } else {
                toast.error("Facebook did not return an access token");
              }
            }}
            onError={(reason) => toast.error(reason)}
            scope="public_profile,email"
          />
        </div>
      </form>
    </Card>
  );
}
