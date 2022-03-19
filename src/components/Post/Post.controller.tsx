import { useDispatch } from "react-redux";
import { IPost } from "../../features/blog/blogModels";
import { updatePostLikes } from "../../features/blog/blogSlice";
import Post from "./Post";

const PostController = (data: IPost) => {
  const dispatch = useDispatch();

  const handleLikeClick = (id: number) => {
    dispatch(updatePostLikes(id));
  };

  return <Post handleLikeClick={handleLikeClick} data={data} />;
};

export default PostController;
