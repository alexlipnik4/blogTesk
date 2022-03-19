import { IPost } from "../../features/blog/blogModels";
import { useStyles } from "./Post.styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Post = (props: {
  data: IPost;
  handleLikeClick: (id: number) => void;
}) => {
  const { data, handleLikeClick } = props;
  const styles = useStyles();
  return (
    <Card className={styles.container} sx={{ width: 600 }}>
      <CardContent className={styles.contentContainer}>
        <div>
          <Typography style={{ paddingBottom: 4 }} variant="h6">
            {data.title}
          </Typography>
          <Typography variant="body2">{data.body}</Typography>
        </div>
        <Typography variant="body2">
          {moment(data.date).format("D/MM/YYYY - hh:mm")}
        </Typography>
      </CardContent>
      <CardActions style={{ flexDirection: "column" }}>
        <Button
          onClick={() => handleLikeClick(data.id)}
          style={{
            boxShadow: "0px 1px 2px 1px #24242421",
            height: 70,
            width: 70,
          }}
          size="small"
        >
          <ThumbUpAltIcon />
          <Typography style={{ marginLeft: 5 }} variant="h6">
            {data.likes || 0}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
