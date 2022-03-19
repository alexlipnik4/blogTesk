import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
  },
  contentContainer: {
    flex: 1,

    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
});
