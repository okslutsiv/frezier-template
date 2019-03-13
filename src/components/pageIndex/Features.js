import React from "react";
import Icon1 from "../../images/icons/svg/Feature1Svg";
import Icon2 from "../../images/icons/svg/Feature2Svg";
import Icon3 from "../../images/icons/svg/Feature3Svg";
import Blond from "../../images/blond";
import {
  withStyles,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

export const styles = theme => {
  const { burgundy, gold, olive } = theme.palette;
  return {
    root: {
      padding: "5%",
      background: "#fff",
      borderBottom: `1px solid ${olive[300]}`,
    },

    title: {
      color: burgundy[900],
      margin: "2rem 1rem 0 5rem",
    },
    pearls: {
      width: "200px",
      height: "auto",
      marginTop: "-150px",
    },
    text: {
      "& span": {
        color: gold[900],
      },
    },
    icon: {
      fill: gold[700],
      width: "40px",
      height: "40px",
    },

    blond: {
      maxWidth: "400px",
      margin: "0 auto",
      borderRadius: "50%",
      overflow: "hidden",
      border: `1px solid ${olive[700]}`,
      boxShadow: ` 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)`,
    },
  };
};

function Features(props) {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Grid container spacing={24} alignItems="flex-end">
        <Grid item xs={12} md={7}>
          <div className={classes.text}>
            {/* <Paper className={classes.text}> */}
            <Typography variant="h2" className={classes.title}>
              НАШІ МАЙСТРИ пропонують
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Icon1 className={classes.icon} />
                </ListItemIcon>
                <ListItemText>
                  повний комплекс перукарських послуг для чоловіків і жінок
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon2 className={classes.icon} />
                </ListItemIcon>
                <ListItemText>догляд за бровами і віями</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon3 className={classes.icon} />
                </ListItemIcon>
                <ListItemText>
                  макіяж на кожен день та для особливих випадків
                </ListItemText>
              </ListItem>
            </List>
          </div>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={5}>
          {/* <div className={classes.pearls}>
            <Pearls />
          </div> */}
          <div className={classes.blond}>
            <Blond />
          </div>
        </Grid>

        {/* <div className="row align-items-center">
          <h1 className="text-right col-lg-9" />
          <div className="col-md-7">
            <div className="row my-4 align-items-center ">
              <div className="col-2  offset-1 pl-4 my-auto" />
              <div className="col-9 my-auto">
                повний комплекс перукарських послуг для чоловіків і жінок
              </div>
            </div>
            <div className="row my-4 align-items-center ">
              <div className="col-2  offset-1 pl-4 my-auto">
                <Icon3 fill="none" stroke="#b8874a" width="30px" />
              </div>
              <div className="col-9 my-auto">
                
              </div>
            </div>
            <div className="row my-4 align-items-center">
              <div className="col-2  offset-1 pl-4 my-auto">
                <Icon2 fill="none" stroke="#b8874a" width="20px" />
              </div>
              <div className="col-9  my-auto">догляд за бровами і віями</div>
            </div>
          </div>
        </div> */}
      </Grid>
    </section>
  );
}

export default withStyles(styles)(Features);
