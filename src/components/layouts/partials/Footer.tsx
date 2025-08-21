import {  faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer>
      <div className="footer-top py-15 bg-[#eeeeee]">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0">
            <div className="sm:basis-1/2">
              <h2 className="text-2xl font-light mb-2">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                <li><Link href="/" className="text-md text-gray-700 hover:text-[var(--primary-color)]">24/7 Support</Link></li>
                <li><Link href="/" className="text-md text-gray-700 hover:text-[var(--primary-color)]">Features</Link></li>
                <li><Link href="/manufacturing/about" className="text-md text-gray-700 hover:text-[var(--primary-color)]">About Us</Link></li>
                <li><Link href="/manufacturing/CompanyPDF/Seeker-Terms-and-conditions.pdf" target="_blank" className="text-md text-gray-700 hover:text-[var(--primary-color)]">Individual Terms & Conditions</Link></li>
                <li><Link href="/manufacturing/CompanyPDF/Terms-and-conditions.pdf" target="_blank" className="text-md text-gray-700 hover:text-[var(--primary-color)]">Business Terms & Conditions</Link></li>
                <li><Link href="/manufacturing/CompanyPDF/Privacy-Policy.pdf" target="_blank" className="text-md text-gray-700 hover:text-[var(--primary-color)]">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="sm:basis-1/2">
              <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0">
                <div className="basis-1/1 sm:basis-1/2">
                  <h3 className="text-lg font-semibold text-[#323232] mb-2">Get In Touch</h3>
                  <ul className="">
                    <li><Link href="/manufacturing/contact" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><Image src={'/images/support247.webp'} height={35} width={35} alt="24/7 customer support icon" /> 24/7 Support online chat</Link></li>
                    <li><Link href="tel:011 056 9123" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><Image src={'/images/call.webp'} width={35} height={35} alt="Phone call icon" />011 056 9123</Link></li>
                    <li><Link href="mailto:info@ezyfind.co.za" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><Image src={'/images/mail.webp'} width={35} height={35} alt="Email contact icon" />info@ezyfind.co.za</Link></li>
                  </ul>
                </div>
                <div className="basis-1/1 sm:basis-1/2">
                  <h3 className="text-lg font-semibold text-[#323232] mb-2">Follow Us On</h3>
                  <ul>
                    <li><Link href="https://www.facebook.com/ManufacturingEzyFind.co.za" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><FontAwesomeIcon icon={faFacebookF} className="w-[20px]" /> Facebook</Link></li>
                    <li><Link href="https://plus.google.com/111975390368301243237" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><FontAwesomeIcon icon={faGooglePlusG} className="w-[20px]" /> Google+</Link></li>
                    <li><Link href="https://twitter.com/EzyFind" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><FontAwesomeIcon icon={faTwitter} className="w-[20px]" /> X</Link></li>
                    <li><Link href="https://www.instagram.com/manufacturingezyfind/" className="flex items-center gap-3 text-md text-gray-700 hover:text-[var(--primary-color)] mb-2"><FontAwesomeIcon icon={faInstagram} className="w-[20px]" /> Instagram</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-[#e4e4e4] py-5">
        <div className="container">
          <p className="text-sm text-center text-gray-700">&copy; {new Date().getFullYear()} www.ManufacturingEzyFind.co.za All Rights Reserved. Registered under Innovation Evolved (Pty) Ltd </p>
          <p className="text-sm text-center text-gray-700"><Link href={'www.ManufacturingEzyFind.co.za'}>www.ManufacturingEzyFind.co.za</Link> is not responsible for any loss incurred whatsoever by using this services.</p>
        </div>
      </div>
    </footer>
  );
}
