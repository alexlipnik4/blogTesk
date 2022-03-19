import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorModal from "./components/modals/ErrorModal/ErrorModal";
import { useSelector } from "react-redux";
import { selectActiveModal } from "./features/general/generalSelectors";
import { ModalTypes } from "./features/general/generalModels";
import LoaderModal from "./components/modals/LoaderModal/LoaderModal";
import BlogPageController from "./pages/blogPage/blogPage.controller";

function App() {
  const activeModal = useSelector(selectActiveModal);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BlogPageController />} />
      </Routes>

      <ErrorModal open={activeModal === ModalTypes.error} />
      <LoaderModal unableClosing open={activeModal === ModalTypes.loader} />
    </div>
  );
}

export default App;
