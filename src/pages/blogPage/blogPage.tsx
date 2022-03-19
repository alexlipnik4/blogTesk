import { useSelector } from "react-redux";
import GeneralLayout from "../../components/layouts/GeneralLayout/GeneralLayout";
import PostListController from "../../components/PostList/PostList.controller";
import { selectPosts } from "../../features/blog/blogSelectors";
import { useStyles } from "./blogPage.styles";

const BlogPage = () => {
  const posts = useSelector(selectPosts);
  return (
    <GeneralLayout>
      <PostListController data={posts} />
    </GeneralLayout>
  );
};

export default BlogPage;
