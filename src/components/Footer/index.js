import React from "react";
import FooterBackground from "../../images/backgrounds/footerrose";
import LogoSvg from "../../images/icons/svg/LogoSvg";
import { withStyles, Typography, Grid } from "@material-ui/core";

const styles = theme => {
  const { burgundy, olive } = theme.palette;
  return {
    root: {
      paddingTop: "3rem",
    },
    footinfo: {
      margin: "1.5rem 0",
      textAlign: "center",
      backgroundColor: "rgba(" + burgundy.rgbdark + ", 0.8)",
      border: `solid 1px ${burgundy[900]}`,
      color: olive[600],
      boxShadow: "2px 7px 12px rgba(0, 0, 0, 0.3)",
      height: "100%",
      padding: "0.5rem",
    },
    line: {
      height: 2,
      background: olive[700],
    },
    logo: {
      textAlign: "center",
      "& svg": {
        width: "60px",
        fill: olive[700],
      },
    },
  };
};
function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container alignItems="center">
        <Grid item className={classes.line} xs={5} />
        <Grid item className={classes.logo} xs={2}>
          <LogoSvg />
        </Grid>

        <Grid item className={classes.line} xs={5} />
      </Grid>

      <FooterBackground>
        <Typography className={classes.footinfo}>
          &copy;2019 design & development OksLutsiv
        </Typography>
      </FooterBackground>
    </footer>
  );
}

export default withStyles(styles)(Footer);
