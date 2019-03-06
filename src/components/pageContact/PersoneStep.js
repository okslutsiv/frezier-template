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
  const { burgundy } = theme.palette;
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
      margin: "2rem 0",
    },
    label: {
      color: burgundy[700],
      padding: "1.5rem",
      fontSize: "1.1rem",
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
  } = props;
  return (
    <>
      <Typography variant="body1" className={classes.label}>
        Обидва поля є обов'язковими.Після їх заповнення коректними даними
        активізується кнопка "Готово"
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.card}>
            <div className={classes.container}>
              <form
                // noValidate
                autoComplete="off"
                onSubmit={e => e.preventDefault()}
              >
                <TextField
                  value={name}
                  name="name"
                  onChange={handleChange("name")}
                  onBlur={validateName}
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
                      ? null
                      : "Тільки літери кириличного або латинського алфавіту"
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
                      InputLabelProps={{
                        shrink: true,
                      }}
                      helperText={validPhone ? null : "Тільки арабські цифри"}
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
