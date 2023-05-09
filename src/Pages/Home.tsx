import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ImgMediaCard = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        Welcome to my app!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        paragraph
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
        tristique libero ac imperdiet. Nam porta, tellus eget mattis congue,
        velit mauris tempor arcu, nec vulputate massa enim nec nisl.
      </Typography>
    </Container>
  );
};

export default ImgMediaCard;
