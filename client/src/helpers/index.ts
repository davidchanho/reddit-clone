import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function daysAgo(date: string) {
  return dayjs(date).fromNow();
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
