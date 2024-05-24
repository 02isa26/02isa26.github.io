import Link from "next/link";

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-800 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="/tmp/155885475.png" className="w-11 h-11 rounded-full" />
                    <span className="ml-3 text-xl">isa02のwebサイト</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">Profile</a>
                    <a className="mr-5 hover:text-white">Articles</a>
                    <a className="mr-5 hover:text-white">Documents</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
