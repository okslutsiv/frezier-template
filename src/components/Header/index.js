import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import SideNav from "./SideNav";
import { ButtonBase, withStyles, Typography } from "@material-ui/core";
import LogoSvg from "../../images/icons/svg/LogoSvg";
import Headroom from "./Headroom";

export const styles = theme => {
  const { burgundy, gold, olive, error } = theme.palette;
  return {
    sideNav: {
      textAlign: "center",
      position: "fixed",
      width: "100%",
      maxWidth: "300px",
      margin: "auto",
      "& a:hover": {
        textDecoration: "none",
      },
      "& nav": {
        background: "dimgrey",
      },
    },
    nav: {
      background: "dimgrey",
    },
    title: {
      padding: "1rem",
      fontSize: "1.5rem",
      textAlign: "center",
      color: olive[300],
      background: burgundy[700],
      marginBottom: "2rem",
    },
    navItem: {
      color: olive[300],
      fontSize: "1rem",
      fontWeight: 300,
      margin: "0 2rem ",
      padding: "3vh",
      "&:hover": {
        color: "#fff",
      },
    },
    logo: {
      fill: olive[300],
      width: 60,
      marginTop: "2rem",
    },
    link: {
      width: "100%",

      borderBottom: "1px solid #777",
      "& a": { textDecoration: "none" },

      "& a:hover": {
        textDecoration: "none",
      },
    },
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      menuItems: [
        { name: "Головна", icon: "menu.svg", link: "/" },
        { name: "Послуги та ціни", icon: "menu.svg", link: "/about" },
        { name: "Наші майстри", icon: "menu.svg", link: "/team" },
        { name: "Записатись", icon: "menu.svg", link: "/contact" },
      ],
    };
  }
  toggleMenu = () => {
    this.setState({ showNav: true });
  };
  render() {
    const { title, phone, adress, classes } = this.props;
    return (
      <>
        <header>
          <SideNav
            className={classes.sideNav}
            showNav={this.state.showNav}
            onHideNav={() => this.setState({ showNav: false })}
          >
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
            <div className={classes.nav}>
              {this.state.menuItems.map((item, key) => (
                <ButtonBase key={key} className={classes.link}>
                  <Link to={item.link}>
                    <Typography variant="h2" className={classes.navItem}>
                      {item.name}
                    </Typography>
                  </Link>
                </ButtonBase>
              ))}
              <div className={classes.root}>
                <LogoSvg className={classes.logo} />
              </div>
            </div>
          </SideNav>
          <Headroom
            toggleMenu={this.toggleMenu}
            phone={phone}
            adress={adress}
          />
        </header>
        <nav />
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default withStyles(styles)(Header);
