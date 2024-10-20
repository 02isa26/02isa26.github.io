import Accordion from "@/app/_components/Accorion";
import ArrowLink from "@/app/_components/ArrowLink";
import myIcon from "@@/public/assets/myIcon.png";
import Image from "next/image";

export default function Index() {
  return (
    <section className="flex grow bg-gray-900">
      <div className="container mx-auto flex flex-col px-5 py-24 lg:w-4/6">
        <div className="mt-10 flex flex-col sm:flex-row">
          <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
            <Image
              src={myIcon}
              alt=""
              priority={true}
              className="mx-auto size-52 rounded-full object-cover lg:size-60"
            />
            <div className="mt-5 flex flex-col items-center justify-center text-center font-sub">
              <h2 className="text-5xl font-medium text-white">isa02</h2>
              <div className="mt-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mr-2 size-5 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5-8-5zm0 12H4V8l8 5 8-5z"
                  ></path>
                </svg>
                <a
                  href="mailto:isa02.shn26@gmail.com"
                  className="text-lg text-gray-400 hover:underline"
                >
                  isa02.shn26@gmail.com
                </a>
              </div>
              <div className="my-4 h-1 w-24 rounded bg-indigo-500"></div>
              <p className="font-body text-lg text-gray-400">2005年生まれ．浪人生です；；</p>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-800 pt-4 text-left sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-2 sm:pl-8">
            <Accordion
              heading="このサイトについて"
              content={
                <>
                  <p>
                    このサイトは僕のブログと資料置き場，そして技術的なテストを兼ねて作成したサイトです．
                  </p>
                  <p>
                    Next.js 13 (App Router) + Tailwind CSSで作成し，GitHub Actionsを用いてGitHub
                    Pagesにデプロイしています．テストを兼ねているという都合上，デザインや動作で不都合があるかもしれません．技術的な不具合はGitHubリポジトリのissuesにお願いします．それ以外の連絡については記載のメールにお願いします．
                  </p>
                </>
              }
              isOpen={true}
            />
            <Accordion
              heading="ブログ記事について"
              content={
                <>
                  <p>
                    趣味や考えで共有したいこと，そしてこれまでQiitaに投稿していたような技術的な話を主に投稿します．一つの記事は必ず一つのカテゴリに属します．また，カテゴリを親としてタグが付くことがあります．
                  </p>
                  <ArrowLink heading="記事一覧へ" link="/blog/articles" />
                </>
              }
              isOpen={false}
            />
            <Accordion
              heading="公開資料について"
              content={
                <>
                  <p>ブログ記事の参考資料やブログ記事よりも長い文書などを公開しています．</p>
                  <ArrowLink heading="資料一覧へ" link="/documents" />
                </>
              }
              isOpen={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
