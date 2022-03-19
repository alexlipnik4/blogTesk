import { Language } from "../../components/LanguageSelector/LanguageSelector";
import { IPost } from "../blog/blogModels";

export enum ModalTypes {
  "error",
  "loader",
}

export interface InitialState {
  activeModal: ModalTypes | null;
  language: "he" | "en";
}

export interface IGetTranslation {
  language: Language;
  posts: IPost[];
}
