import React from "react";
import HeadroomWrapper from "react-headroom";
import LogoSvg from "../../images/icons/svg/LogoSvg";
import MenuSvg from "../../images/icons/svg/MenuSvg";
import InfoPanelContent from "./InfoPanelContent";
import { navigate } from "gatsby";
import { withStyles, ButtonBase, Grid, Hidden } from "@material-ui/core";

export const styles = theme => {
  const { burgundy, olive } = theme.palette;
  return {
    headroom: {
      boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2)",
      "&--pinned": {
        opacity: 0.9,
      },
    },
    container: {
      width: "90%",
      maxWidth: 1060,
      margin: "0 auto",
    },
    svg: {
      fill: olive[300],
    },
    logo: {
      textAlign: "right",

      "& button": {
        height: 56,
        width: 80,
        padding: "6px 12px",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
      },
    },
    menuBtn: {
      height: 56,
      margin: 0,
      width: 80,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
    },
    info: {
      textAlign: "center",
      fontSize: "0.8rem",
      color: burgundy[200],
      "& svg": {
        fill: burgundy[200],
      },
    },
  };
};

function Headroom(props) {
  const { classes, phone, adress } = props;
  return (
    <HeadroomWrapper
      className={classes.headroom}
      style={{
        height: 56,
        background: "#D04C53",
        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.2)",
      }}
    >
      <div className={classes.container}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={6} md={2}>
            <ButtonBase onClick={props.toggleMenu} className={classes.menuBtn}>
              <MenuSvg width="24px" className={classes.svg} />
            </ButtonBase>
          </Grid>
          <Hidden smDown>
            <Grid item md={8} container justify="center">
              <InfoPanelContent
                phone={phone}
                adress={adress}
                className={classes.info}
              />
            </Grid>
          </Hidden>
          <Grid item xs={6} md={2} className={classes.logo}>
            <ButtonBase onClick={() => navigate("/")}>
              <LogoSvg className={classes.svg} width="60px" height="45px" />
            </ButtonBase>
          </Grid>
        </Grid>{" "}
      </div>
    </HeadroomWrapper>
  );
}
export default withStyles(styles)(Headroom);
