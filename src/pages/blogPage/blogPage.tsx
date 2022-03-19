import { useSelector } from "react-redux";
import GeneralLayout from "../../components/layouts/GeneralLayout/GeneralLayout";
import PostListController from "../../components/PostList/PostList.controller";
import { selectPosts } from "../../features/blog/blogSelectors";
import { useStyles } from "./blogPage.styles";

const BlogPage = () => {
  const posts = useSelector(selectPosts);
  const styles = useStyles();
  return (
    <GeneralLayout>
      <div>
        <PostListController data={posts} />
      </div>
    </GeneralLayout>
  );
};

export default BlogPage;
