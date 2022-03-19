import { useStyles } from "./GeneralLayout.styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { texts } from "../../../utils/texts";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../features/general/generalSelectors";
import React from "react";
import LanguageSelectorController from "../../LanguageSelector/LanguageSelector.controller";

const GeneralLayout = (props: { children: React.ReactNode }) => {
  const styles = useStyles();
  const language = useSelector(selectLanguage);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {texts.layouts.general.posts[language]}
            </Typography>
            <LanguageSelectorController />
          </Toolbar>
        </AppBar>
      </Box>
      {props.children}
    </React.Fragment>
  );
};

export default GeneralLayout;
