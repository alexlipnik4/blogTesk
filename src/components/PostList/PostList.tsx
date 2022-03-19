import { IPost } from "../../features/blog/blogModels";
import PostController from "../Post/Post.controller";
import { useStyles } from "./PostList.styles";
import Pagination from "@mui/material/Pagination";

const PostList = (props: {
  data: IPost[];
  pages: number;
  currentPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      {props.data.length > 0 &&
        props.data.map((post) => <PostController key={post.id} {...post} />)}
      <Pagination
        style={{
          paddingTop: 40,
        }}
        page={props.currentPage}
        onChange={props.handleChangePage}
        count={props.pages}
      />
    </div>
  );
};

export default PostList;
