import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectTime } from "../../features/blog/blogSelectors";
import { blogThunk } from "../../features/blog/blogThunks";
import { ModalTypes } from "../../features/general/generalModels";
import { selectLanguage } from "../../features/general/generalSelectors";
import { setActiveModal } from "../../features/general/generalSlice";
import { languageThunk } from "../../features/general/generalThunks";
import BlogPage from "./blogPage";

const BlogPageController = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectTime);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    async function fetchData() {
      // if ((!time && posts.length === 0) || moment().diff(time, "days") > 1) {
      dispatch(setActiveModal(ModalTypes.loader));
      await dispatch(blogThunk());

      dispatch(setActiveModal(null));
      // }
    }
    fetchData();
  }, [dispatch, posts.length]);

  return <BlogPage />;
};

export default BlogPageController;
