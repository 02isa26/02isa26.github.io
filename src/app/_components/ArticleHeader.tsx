import DateFormatter from "@/app/_components/DateFormatter";

type Props = {
  title: string;
  date: string;
};

export function ArticleHeader({ title, date }: Props) {
  return (
    <>
      <div className="mb-2 text-left font-title text-2xl">
        <DateFormatter dateString={date} />
      </div>
      <h1 className="mb-14 text-left font-title text-3xl font-bold leading-tight tracking-tighter">
        {title}
      </h1>
    </>
  );
}
