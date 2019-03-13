import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

import {
  withStyles,
  Typography,
  Paper,
  Grid,
  TextField,
} from "@material-ui/core";

export const styles = theme => {
  const { burgundy, olive } = theme.palette;
  return {
    container: {
      width: "100%",
      height: "auto",
      padding: "5%",
      display: "block",
    },
    card: {
      textAlign: "center",
      width: "100%",
      border: `1px solid ${olive[500]}`,
    },
    label: {
      color: burgundy[700],
      padding: "1.5rem",
      fontSize: "0.9rem",
      maxWidth: 700,
      margin: "0 auto",
      textAlign: "center",
    },
    caption: {
      paddingRight: 12,
    },
  };
};

function PersoneStep(props) {
  const {
    classes,
    name,
    phone,
    validateName,
    validatePhone,
    handleChange,
    validPhone,
    validName,
    handleOnEnterPress,
  } = props;
  return (
    <>
      <Typography variant="body2" className={classes.label}>
        Обидва поля є обов'язковими. Після їх заповнення коректними даними
        активізується кнопка "Готово"
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={10} className={classes.card}>
            <div className={classes.container}>
              <form autoComplete="off" onSubmit={e => e.preventDefault()}>
                <TextField
                  value={name}
                  name="name"
                  onChange={handleChange("name")}
                  onBlur={validateName}
                  onKeyUp={handleOnEnterPress}
                  required
                  type="text"
                  label="Ваше ім'я"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    validName
                      ? "OK"
                      : "Літери кириличного або латинського алфавіту"
                  }
                />

                <InputMask
                  mask="+38(999) 999 99 99"
                  value={phone}
                  onChange={handleChange("phone")}
                  onBlur={validatePhone}
                >
                  {inputProps => (
                    <TextField
                      name="phone"
                      required
                      label="Контактний телефон"
                      fullWidth
                      margin="normal"
                      variant="filled"
                      onKeyUp={handleOnEnterPress}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      helperText={validPhone ? "OK" : "Тільки арабські цифри"}
                    />
                  )}
                </InputMask>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

PersoneStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PersoneStep);
