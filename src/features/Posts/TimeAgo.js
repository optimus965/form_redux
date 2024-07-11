import { formatDistanceToNow, parseISO } from "date-fns";
import { formatDistance } from "date-fns/formatDistance";

function TimeAgo({ timeStamp }) {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={timeStamp}>
      {" "}
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
