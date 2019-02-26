import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Collapse,
  Button,
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => {
  const { gold, burgundy, error } = theme.palette;
  console.log(theme.palette);

  return {
    card: {
      width: "90%",
      maxWidth: 1000,
      margin: "1rem auto",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      marginTop: 12,
    },
    actions: {},
    title: {
      "& span": {
        color: burgundy[700],
      },
    },
    button: {
      width: "100%",
      color: burgundy[700],
      fontSize: "0.8rem",
      backgroundColor: gold[300],
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  };
};

class PricePanel extends React.Component {
  state = {
    expanded: false,
  };
  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };
  render() {
    const { classes, image, title, description } = this.props;
    const { expanded } = this.state;
    return (
      <Card raised className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardHeader title={title} className={classes.title} />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            className={classes.button}
            variant="text"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            {expanded ? "Згорнути" : "Розгорнути прайс-лист"}
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>{this.props.children}</CardContent>
        </Collapse>
      </Card>
    );
  }
}

PricePanel.propTypes = {};

export default withStyles(styles)(PricePanel);
