export default function Index() {

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold text-white">isa02の個人サイト</h1>
                </div>
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-21 h-21 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                <img src="/tmp/155885475.png" alt="isa02's profile" className="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center mt-5">
                                <h2 className="font-medium title-font text-white text-3xl">isa02</h2>
                                <div className="flex items-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white w-5 h-5 mr-2">
                                        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5-8-5zm0 12H4V8l8 5 8-5z"></path>
                                    </svg>
                                    <a href="mailto:isa02.shn26@gmail.com" className="text-gray-400">isa02.shn26@gmail.com</a>
                                </div>
                                <div className="w-24 h-1 bg-indigo-500 rounded mt-4 mb-4"></div>
                                <p className="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                            <a href="#" className="text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
