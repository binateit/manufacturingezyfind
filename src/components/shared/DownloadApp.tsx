import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
    return (<div className="py-10 md:py-15 bg-gray-50">
        <div className="container">
            <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl/10 font-bold uppercase mb-4 text-center">Download Our App</h1>
            <div className="flex flex-col sm:flex-row w-8/12 m-auto justify-center">
                <Link href="https://apps.apple.com/za/app/manufacturing-ezyfind/id6443547904" target="_blank">
                    <Image src={'/images/app-store-btn.webp'} width={486} height={141} className="scale-80 hover:scale-90 transition duration-300 ease-in-out" alt="iStore App Download" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.inno.ezyfind.manufacturing&pli=1" target="_blank">
                    <Image src={'/images/google-play-btn.webp'} width={486} height={141} className="scale-80 hover:scale-90 transition duration-300 ease-in-out" alt="Google Playstore App Download" />
                </Link>
                <Link href="https://appgallery.huawei.com/app/C107697015" target="_blank">
                    <Image src={'/images/app-gallery-btn.webp'} width={486} height={141} className="scale-80 hover:scale-90 transition duration-300 ease-in-out" alt="Huawei App Gallery Download" />
                </Link>
            </div>
        </div>
    </div>)
}