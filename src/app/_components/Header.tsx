import myIcon from "@@/public/assets/myIcon.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 font-sub md:flex-row">
        <Link href="/" className="mb-3 flex items-center md:mb-0">
          <Image src={myIcon} alt="" priority={true} className="size-9 rounded-full sm:size-10" />
          <span className="ml-3 text-xl text-white">isa02の個人サイト</span>
        </Link>
        <nav className="mx-auto flex flex-wrap items-center justify-center text-base text-gray-400 md:mr-0">
          <Link className="mr-5 hover:text-white" href="/profile">
            Profile
          </Link>
          <Link className="mr-5 hover:text-white" href="/blog/articles">
            Articles
          </Link>
          <Link className="hover:text-white" href="/documents">
            Documents
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
