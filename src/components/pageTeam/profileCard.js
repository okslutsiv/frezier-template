import React from "react";
import PropTypes from "prop-types";
import DoneIcon from "@material-ui/icons/Done";
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  Chip,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

export const styles = theme => {
  const { gold, burgundy, olive } = theme.palette;
  return {
    root: {
      margin: 5,
    },
    card: {
      margin: "3rem auto",
      overflow: "visible",
      opacity: 1,
      // backgroundImage: `linear-gradient(45deg,${olive[500]} 0%, ${
      //   gold[700]
      // } 100%)`,
    },
    media: {
      height: "100%",
      minHeight: 300,
      margin: 12,
      backgroundSize: "cover",
      borderRadius: "0.25rem",
      opacity: 1,
    },
    actions: {
      marginTop: "-1.5rem",
      marginBottom: "-2rem",
      width: "100%",
      textAlign: "center",
    },
    chip: {
      margin: "0.25rem",
      background: gold[200],
      color: burgundy[900],
    },
    icon: {
      padding: "0.25rem",
      borderRadius: "50%",
      background: gold[200],
      color: burgundy[900],
      border: `1px solid ${burgundy[900]}`,
    },
    content: {
      textAlign: "center",

      "& h3": {
        color: gold[900],
        fontSize: "2rem",
        margin: "0 0 1rem 0",
      },
      "& p": {
        color: gold[900],
        marginBottom: 16,
      },
    },
  };
};

function profileCard(props) {
  const { classes, image, chipData, name, description } = props;
  const icon = <DoneIcon className={classes.icon} />;
  console.log(image);
  return (
    <Card raised>
      <CardMedia className={classes.media} image={image} />
      <CardContent classes={{ root: classes.content }}>
        <Typography variant="h3" classes={{ root: classes.title }}>
          {name}
        </Typography>
        <Typography>{description}</Typography>
        {chipData.map((item, key) => (
          <Chip key={key} label={item} className={classes.chip} icon={icon} />
        ))}
      </CardContent>
    </Card>
  );
}

profileCard.propTypes = {};

export default withStyles(styles)(profileCard);
