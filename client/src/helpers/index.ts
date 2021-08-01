import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function daysAgo(date: string) {
  return dayjs(date).fromNow();
}

export function titlecase(str: string) {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
