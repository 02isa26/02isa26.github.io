import DateFormatter from "./date-formatter";

type Props = {
    title: string;
    date: string;
};

export function PostHeader({ title, date }: Props) {
    return (
        <>
            <div className="text-2xl text-left mb-2 font-title">
                <DateFormatter dateString={date} />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-title font-semibold tracking-tighter leading-tight md:leading-none mb-14 text-left">{title}</h1>
        </>
    );
}