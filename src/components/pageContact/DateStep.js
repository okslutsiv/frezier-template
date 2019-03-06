import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import {
  withStyles,
  Typography,
  Paper,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import ukLocale from "date-fns/locale/uk";

export const styles = theme => {
  const { gold } = theme.palette;
  return {
    root: {
      width: "80%",
      height: "auto",
      margin: "5% 10%",
      alignItems: "stretch",
    },
    card: {
      textAlign: "center",
      margin: "2rem 0",
      padding: "1rem 1rem 4rem 1rem",
    },
    group: {
      justifyContent: "center",
    },
    picker: {
      "& input": {
        textAlign: "center",
        cursor: "pointer",
      },
    },
    label: {
      color: gold[700],
      padding: "1.5rem",
      fontSize: "1rem",
    },
    caption: {
      paddingRight: 12,
    },
  };
};

function DateStep(props) {
  const {
    classes,
    handleDateChange,
    handleDaypartChange,
    date,
    daypart,
  } = props;

  return (
    <>
      <Paper elevation={0} className={classes.card}>
        <Grid container justify="center" spacing={32}>
          <Grid item xs={12} sm={5} md={4}>
            <Typography className={classes.label}>
              Яка дата Вас влаштовує?
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ukLocale}>
              <div className={classes.picker}>
                <DatePicker
                  value={date}
                  autoOk
                  onChange={handleDateChange}
                  variant="filled"
                  format={format(date, "dd MMMM, yyy ", {
                    locale: ukLocale,
                  })}
                />
              </div>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Typography className={classes.label}>Яка пора дня?</Typography>
            <RadioGroup
              variant="filled"
              aria-label="Daypart"
              name="daypart"
              className={classes.group}
              value={daypart}
              onChange={handleDaypartChange}
              row
            >
              <FormControlLabel
                value="morning"
                control={<Radio color="primary" />}
                label="зранку"
                labelPlacement="end"
              />
              <FormControlLabel
                value="day"
                control={<Radio color="primary" />}
                label="в обід"
                labelPlacement="end"
              />
              <FormControlLabel
                value="evening"
                control={<Radio color="primary" />}
                label="ввечері"
                labelPlacement="end"
              />
              <FormControlLabel
                value="nomatter"
                control={<Radio color="primary" />}
                label="байдуже"
                labelPlacement="end"
              />
            </RadioGroup>{" "}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

DateStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DateStep);
