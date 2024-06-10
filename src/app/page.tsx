import topPageStyles from "@/app/_styles/topPage-styles.module.css"

export default function Index() {

    return (
        <section className="text-gray-400 bg-gray-900 font-body">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="font-title sm:text-6xl text-5xl mb-4 font-bold text-white">isa02の個人サイト</h1>
                </div>
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div style={{ width: '250px', height: '250px' }} className="rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                <img src="/tmp/155885475.png" alt="isa02's profile" className="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center mt-5">
                                <h2 className="font-medium font-title text-white text-3xl">isa02</h2>
                                <div className="flex items-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white w-5 h-5 mr-2 mb-1">
                                        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5-8-5zm0 12H4V8l8 5 8-5z"></path>
                                    </svg>
                                    <a href="mailto:isa02.shn26@gmail.com" className="text-gray-400 hover:underline text-lg">isa02.shn26@gmail.com</a>
                                </div>
                                <div className="w-24 h-1 bg-indigo-500 rounded mt-4 mb-4"></div>
                                <p className="text-base text-gray-400 leading-normal">
                                    2005年生まれ．浪人生です；；<br />
                                    ずっと前から興味のある学問領域があって，そこでの研究で博士号を取りたいと思っています．<br />
                                </p>
                                <code style={{ width: '300.44px' }} className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 mt-4">
                                    <span className="flex gap-4">
                                        <span className="flex-1 text-gray-200">
                                            <span className="text-gray-500">&#x25; Preamble</span><br />
                                            \usepackage&#123;luatexja-otf&#125;<br />
                                            <span className="text-gray-500">&#x25; Body</span><br />
                                            \CID&#123;8218&#125;
                                        </span>
                                    </span>
                                </code>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-2 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <div className={topPageStyles.content}>
                                <h2 className={topPageStyles.heading}>このサイトについて</h2>
                                <p>このサイトは僕のブログと資料置き場，そして技術的なテストを兼ねて作成したサイトです．Next.js 13 (App Router) + Tailwind CSSで作成し，GitHub Actionsを用いてGitHub Pagesにデプロイしています．テストを兼ねているという都合上，デザインや動作で不都合があるかもしれません．技術的な不具合はGitHubリポジトリのissuesにお願いします．それ以外の連絡については記載のメールにお願いします．</p>
                            </div>
                            <div className={topPageStyles.content}>
                                <h2 className={topPageStyles.heading}>ブログ</h2>
                                <p className="mb-1">趣味や考えで共有したいこと，そしてこれまでQiitaに投稿していたような技術的な話を主に投稿します．一つの記事は必ず一つのカテゴリに属します．また，カテゴリを親としてタグが付くことがあります．</p>
                                <a href="/articles" className={topPageStyles.arrowLink}>記事一覧へ
                                    <svg className="w-4 h-4 ms-2 rtl:rotate-180 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                            <div className={topPageStyles.content}>
                                <h2 className={topPageStyles.heading}>公開資料</h2>
                                <p className="mb-1">ブログ記事よりも長いものをPDFなどで公開しています．</p>
                                <a href="" className={topPageStyles.arrowLink}>公開資料一覧へ
                                    <svg className="w-4 h-4 ms-2 rtl:rotate-180 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}