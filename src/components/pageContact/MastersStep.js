import React from "react";
import PropTypes from "prop-types";
import master1 from "../../images/team1/hairdresser11.jpg";
import master2 from "../../images/team1/hairdresser21.jpg";
import master3 from "../../images/team1/hairdresser31.jpg";
import master4 from "../../images/team1/hairdresser41.jpg";

import {
  withStyles,
  Typography,
  Paper,
  Radio,
  Grid,
  Avatar,
  TextField,
} from "@material-ui/core";

export const styles = theme => {
  const { gold, olive } = theme.palette;
  return {
    avatar: {
      width: "60%",
      height: "auto",
      margin: "5% 20%",
      border: `2px solid ${olive[500]}`,
    },
    card: {
      textAlign: "center",
      width: "80%",
      margin: "10%",
      border: `1px solid ${olive[500]}`,
      padding: "1rem 0",
    },
    caption: {
      color: gold[900],
      fontSize: 14,
    },
    toggleContainer: {
      height: 56,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: `${theme.spacing.unit}px 0`,
      background: theme.palette.background.default,
    },
  };
};
const masters = [
  { name: "Ірина Гринів", image: master1 },
  { name: "Олена Іванів", image: master2 },
  { name: "Ігор Боднар", image: master3 },
  { name: "Олена Стефура", image: master4 },
];

function MastersStep(props) {
  const { classes, handleChange, value, services } = props;

  return (
    <Grid container justify="center">
      {masters.map((master, i) => (
        <Grid item key={i} xs={6} sm={4} md={3} container>
          <Paper elevation={8} className={classes.card}>
            <Avatar src={master.image} className={classes.avatar} />
            <Grid
              item
              xs={12}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Radio
                checked={value === master.name}
                onChange={handleChange("master")}
                value={master.name}
                color="primary"
              />
              <Typography className={classes.caption}>{master.name}</Typography>
            </Grid>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        {" "}
        <Paper style={{ padding: 12 }} elevation={0}>
          <TextField
            value={services}
            name="services"
            onChange={handleChange("services")}
            required
            fullWidth
            label="Які послуги Вам потрібні?"
            multiline
            rows={2}
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

MastersStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MastersStep);
