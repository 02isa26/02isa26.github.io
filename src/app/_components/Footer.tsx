import myIcon from "@@/public/assets/myIcon.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-800">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 font-geistSans sm:flex-row">
        <a className="flex items-center justify-center font-title font-medium text-white md:justify-start">
          <Image src={myIcon} alt="my icon" priority={true} className="size-10 rounded-full" />
          <span className="ml-3 font-body text-2xl font-bold">isa02</span>
        </a>
        <p className="mt-4 text-base text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:pl-4">
          Copyright © 2024 isa02 all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
