import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale/ja";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy/MM/dd", { locale: ja })}</time>;
};

export default DateFormatter;
