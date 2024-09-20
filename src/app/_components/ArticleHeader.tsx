import DateFormatter from "@/app/_components/DateFormatter";

type Props = {
  title: string;
  date: string;
  abstract: string;
};

export function ArticleHeader({ title, date, abstract }: Props) {
  return (
    <>
      <div className="mb-2 text-left font-title text-2xl">
        <DateFormatter dateString={date} />
      </div>
      <h1 className="mb-4 text-left font-title text-3xl font-bold leading-tight">{title}</h1>
      {abstract && (
        <div className="mb-4">
          <h2 className="font-title text-2xl font-bold">概要</h2>
          <p className="font-body text-lg tracking-tighter">{abstract}</p>
        </div>
      )}
    </>
  );
}
