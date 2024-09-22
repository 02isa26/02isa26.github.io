import myIcon from "@@/public/assets/myIcon.png";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-800">
      <div className="container mx-auto flex flex-row flex-wrap items-center px-5 py-4 font-sub md:ml-6 md:mr-auto md:px-0 lg:mx-auto lg:px-5 lg:py-8">
        <Image
          src={myIcon}
          alt=""
          priority={true}
          className="flex size-9 rounded-full sm:size-10"
        />
        <span className="ml-3 flex text-2xl text-white">isa02</span>
        <p className="my-2 ml-0 mr-10 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:pl-4 md:my-0 md:mr-auto md:text-base">
          Copyright © 2024 isa02 all rights reserved.
        </p>
        <div className="ml-0 mr-2 flex flex-col text-sm text-gray-400 md:mx-4 md:my-auto md:text-base lg:mx-auto lg:mr-6">
          <Link className="flex hover:text-white" href="/documents/license">
            <span>LICENSE</span>
          </Link>
          <Link className="flex hover:text-white" href="/documents/readme">
            <span>README</span>
          </Link>
        </div>
        <div className="mx-4 flex flex-col text-sm text-gray-400 md:my-auto md:ml-2 md:text-base lg:ml-6">
          <a className="flex hover:text-white" href="/documents/privacy-policy">
            <span>PRIVACY POLICY</span>
          </a>
          <a className="flex hover:text-white" href="https://github.com/02isa26/02isa26.github.io">
            <span>repository (GitHub)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
