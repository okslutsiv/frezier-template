import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Collapse,
  Typography,
  Fab,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PriceTable from "./PriceTable";

const styles = theme => {
  const { gold, burgundy, olive } = theme.palette;
  console.log(theme.palette);

  return {
    card: {
      maxWidth: 960,
      margin: "3rem auto",
      overflow: "visible",
      border: `1px solid ${olive[300]}`,
    },
    media: {
      height: "100%",
      minHeight: 150,
      margin: 12,
      backgroundSize: "cover",
      borderRadius: "0.25rem",
      // opacity: 0.85,
    },
    actions: {
      marginTop: "-1.5rem",
      marginBottom: "-2rem",
      width: "100%",
      textAlign: "center",
    },
    collapse: {
      marginTop: "3rem",
    },
    title: {
      "& span": {
        color: burgundy[900],
        fontSize: "1.5rem",
        textAlign: "center",
      },
    },
    button: {
      color: burgundy[700],
      fontSize: "0.8rem",
      backgroundImage: `linear-gradient(-135deg, rgba(${
        gold.rgb
      },1) 10%, rgba(${olive.rgb},1))`,
      marginLeft: "50%",
      transform: "translateX(-50%)",
    },
    expand: {
      transform: "rotate(0deg)",
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
    const { leftImg } = this.props || false;
    const { expanded } = this.state;
    const leftImgPanel = (
      <>
        <Grid item xs={12} sm={4}>
          <CardMedia className={classes.media} image={image} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardHeader title={title} className={classes.title} />
          <CardContent>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
        </Grid>
      </>
    );
    return (
      <Card raised className={classes.card}>
        <Grid
          container
          justify="space-between"
          spacing={16}
          alignContent="flex-end"
        >
          {leftImg ? (
            leftImgPanel
          ) : (
            <>
              <Grid item xs={12} sm={8}>
                <CardHeader title={title} className={classes.title} />
                <CardContent>
                  <Typography variant="body1">{description}</Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardMedia className={classes.media} image={image} />
              </Grid>
            </>
          )}
          <CardActions className={classes.actions} disableActionSpacing>
            <Fab
              className={classes.button}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              size="large"
            >
              <ExpandMoreIcon
                className={expanded ? classes.expandOpen : classes.expand}
              />
            </Fab>
          </CardActions>
        </Grid>

        <Collapse
          in={this.state.expanded}
          className={classes.collapse}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <PriceTable />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PricePanel.propTypes = {};

export default withStyles(styles)(PricePanel);
