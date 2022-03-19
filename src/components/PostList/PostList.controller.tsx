import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../features/blog/blogModels";
import { selectLanguage } from "../../features/general/generalSelectors";
import { languageThunk } from "../../features/general/generalThunks";
import PostList from "./PostList";

const PostListController = (props: { data: IPost[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pages, setPages] = React.useState<IPost[][]>([]);
  const divider = 16;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const language = useSelector(selectLanguage);

  React.useMemo(() => {
    if (pages[currentPage]) {
      console.log("test");
      dispatch(
        languageThunk(
          { language, posts: pages[currentPage] },
          (currentPage - 1) * divider,
          currentPage * divider - 1
        )
      );
    }
  }, [language, currentPage]);

  React.useEffect(() => {
    let _pages: IPost[][] = [];
    let _posts: IPost[] = [];

    props.data.forEach((post, index) => {
      _posts.push(post);
      if (_posts.length === divider) {
        _pages.push(_posts);
        _posts = [];
      }
    });
    setPages(_pages);
  }, [props.data]);

  return (
    <PostList
      handleChangePage={handleChange}
      pages={pages.length}
      currentPage={currentPage}
      data={pages[currentPage - 1] || []}
    />
  );
};

export default PostListController;
