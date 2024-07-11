import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getPostError,
  getPoststatus,
  selectAllPosts,
} from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function PostsList() {
  //   const data = useSelector((state) => state.posts);
  const data = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const postStatus = useSelector(getPoststatus);
  const error = useSelector(getPostError);
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const orderedPosts = data
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => {
    return (
      <Link to={`${post.id}`}>
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
          </p>
          <TimeAgo timeStamp={post.date} />
          <ReactionButtons post={post} />
        </article>
      </Link>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
