import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../features/general/generalSlice";
import LanguageSelector, { Language } from "./LanguageSelector";

export const languageList: Language[] = ["en", "he"];
const LanguageSelectorController = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (language: Language) => {
    setAnchorEl(null);
    dispatch(setLanguage(language));
  };

  return (
    <LanguageSelector
      open={open}
      languageList={languageList}
      handleClose={handleClose}
      handleClick={handleClick}
      handleItemClick={handleItemClick}
      anchorEl={anchorEl}
    />
  );
};

export default LanguageSelectorController;
