import { languageList } from "../../components/LanguageSelector/LanguageSelector.controller";
import { IPost } from "../blog/blogModels";
import { IGetTranslation } from "./generalModels";

export async function getTranslations(value: IGetTranslation) {
  const _posts: {
    text: string;
  }[] = [];
  value.posts.forEach((item: IPost) => {
    _posts.push({ text: item.body });
    _posts.push({ text: item.title });
    _posts.push({ text: item.username });
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "083f98b1ea1e49bcbadc13de4616d9a8",
      "Ocp-Apim-Subscription-Region": "centralus",
    },
    body: JSON.stringify(_posts),
  };

  try {
    const response = await fetch(
      `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${languageList.filter(
        (lan) => lan !== value.language
      )}&to=${value.language}`,
      requestOptions
    );
    const info = await response.json();
    return info;
  } catch (e) {
    console.error(e);
  }
}
