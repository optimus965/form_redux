import { useSelector } from "react-redux";
import { selectPostById } from "./PostSlice";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

function SinglePost() {
  const params = useParams();
  console.log(params.id);
  const post = useSelector((state) => selectPostById(state, Number(params.id)));

  return (
    <div>
      <article>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
        </p>
        <TimeAgo timeStamp={post.date} />
        <ReactionButtons post={post} />
        <Link to={`../form/${post.id}`}>Edit</Link>
      </article>
    </div>
  );
}
export default SinglePost;
