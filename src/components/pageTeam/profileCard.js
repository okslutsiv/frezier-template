import React from "react";
import PropTypes from "prop-types";
import DoneIcon from "@material-ui/icons/Done";
import {
  withStyles,
  Typography,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

export const styles = theme => {
  const { gold, burgundy, olive } = theme.palette;
  return {
    card: {
      margin: "1rem auto",
      maxWidth: 400,
      border: `1px solid ${olive[500]}`,
    },
    media: {
      height: 200,
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
    title: {
      color: gold[900],
      fontSize: "2rem",
      margin: "0 0 1rem 0",
      "& span": {
        fontSize: "1rem",
      },
    },
    content: {
      textAlign: "center",

      // "& h3": {
      //   color: gold[900],
      //   fontSize: "2rem",
      //   margin: "0 0 1rem 0",
      // },
      "& p": {
        color: gold[900],
        marginBottom: 16,
      },
    },
  };
};

function profileCard(props) {
  const { classes, image, chipData, name, description, specialty } = props;
  const icon = <DoneIcon className={classes.icon} />;

  return (
    <Card raised className={classes.card}>
      <CardMedia className={classes.media} image={image} />
      <CardContent classes={{ root: classes.content }}>
        <Typography variant="h3" classes={{ root: classes.title }}>
          <span>{specialty}</span>
          <br />
          {name}
        </Typography>
        <Typography>{description}</Typography>
        {chipData.map((item, key) => (
          <Chip key={key} label={item} className={classes.chip} />
        ))}
      </CardContent>
    </Card>
  );
}

profileCard.propTypes = {};

export default withStyles(styles)(profileCard);
