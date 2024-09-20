import { GetArticles } from "@/app/_components/GetArticles";
import { getAllArticles } from "@/lib/api";

export default function Index() {
  const allArticles = getAllArticles();

  return (
    <main>
      <section className="min-h-screen overflow-hidden bg-gray-900 font-body">
        {allArticles.length > 0 && <GetArticles articles={allArticles} />}
      </section>
    </main>
  );
}
