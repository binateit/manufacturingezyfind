import PageBanner from "@/components/ui/PageBanner";
import LoginForm from "@/components/auth/LoginForm";
import DownloadApp from "@/components/shared/DownloadApp";

export default function LoginPage() {
    return (
        <>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Log in' />
            <div className='w-[95%] md:w-2xl mx-auto my-25'>
                <LoginForm />
            </div>
            <DownloadApp />

        </>
    )
}