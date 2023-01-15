import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export function formatTime(time) {
  return dayjs.duration(time, "seconds").format("mm:ss");
}
