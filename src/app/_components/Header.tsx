import myIcon from "@@/public/assets/myIcon.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 font-geistSans md:flex-row">
        <a className="mb-4 flex items-center font-title font-medium text-white md:mb-0">
          <Image src={myIcon} alt="my icon" priority={true} className="size-10 rounded-full" />
          <span className="ml-3 font-title text-xl font-bold">isa02の個人サイト</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base text-gray-400 md:ml-auto">
          <a className="mr-5 hover:text-white">Profile</a>
          <a className="mr-5 hover:text-white" href="blog/articles/">
            Articles
          </a>
          <a className="mr-5 hover:text-white">Documents</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
