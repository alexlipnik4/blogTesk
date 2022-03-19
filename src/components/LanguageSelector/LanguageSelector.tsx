import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { texts } from "../../utils/texts";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/general/generalSelectors";

export type Language = "he" | "en";

export default function LanguageSelector(props: {
  open: boolean;
  handleClose: () => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleItemClick: (item: Language) => void;
  languageList: Language[];
  anchorEl: any;
}) {
  const language = useSelector(selectLanguage);
  const {
    open,
    handleClick,
    handleClose,
    handleItemClick,
    languageList,
    anchorEl,
  } = props;
  return (
    <div>
      <Button
        style={{
          background: "white",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {texts.layouts.general.languageSelect[language]}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languageList.map((item) => (
          <MenuItem key={item} onClick={() => handleItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
