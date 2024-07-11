import { useSelector } from "react-redux";
import { selectAllUsers } from "../userSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const name = users.find((user) => user.id === userId);
  return <span> by {name ? name.name : "Únknown Author"}</span>;
}
export default PostAuthor;
