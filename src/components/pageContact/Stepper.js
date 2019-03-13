import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import ukLocale from "date-fns/locale/uk";

import MastersStep from "./MastersStep";
import ServicesMultiselect from "./ServicesMultiselect";
import DateStep from "./DateStep";
import PersoneStep from "./PersoneStep";
import Modal from "./Modal";
import { navigate } from "gatsby";

import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";

const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    overlay: {
      // backgroundColor: "rgba(255,250,240,0.8)",
      padding: "1rem 0",
      borderRadius: "0.25rem",
    },
    root: {
      width: "90%",
      margin: "2rem auto",
    },
    success: {
      padding: "2rem 3rem",
      "& p": { lineHeight: 2 },
      maxWidth: 600,
      textAlign: "justify",
      margin: "1rem auto",

      "& span": {
        color: burgundy[900],
        background: gold[200],
        margin: "0 1rem",
        padding: " 0 1rem",
      },
    },
    line: {
      borderColor: olive[700],
    },

    backButton: {
      marginRight: 16,
    },
    instructions: {
      marginTop: 16,
      marginBottom: 16,
    },
    navigation: {
      marginTop: "2rem",
      textAlign: "center",
    },
    stepActive: {
      color: `${burgundy[900]}!important`,
    },
    stepCompleted: {
      color: `${burgundy[700]}!important`,
    },
  };
};

function getSteps() {
  return ["Оберіть майстра і сервіс", "Оберіть дату і час", "Ваші контакти"];
}
function daypartLocal(daypart) {
  switch (daypart) {
    case "morning":
      return "ранок";
    case "day":
      return "ранок";
    case "evening":
      return "ранок";
    case "nomatter":
      return "будь-який час";
    default:
      return "не визначено";
  }
}

class StepperAppoint extends React.Component {
  state = {
    activeStep: 0,
    masters: [
      { id: "irinagriniv", checked: false },
      { id: "olenaivaniv", checked: false },
      { id: "igorbodnar", checked: false },
      { id: "olenastefura", checked: false },
    ],
    selectedDate: new Date(),
    daypart: "",
    name: "",
    phone: "",
    services: [],
    validPhone: false,
    validName: false,
    openModal: false,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            {" "}
            <MastersStep
              mastersList={this.props.masters}
              handleSwithChange={this.handleSwithChange}
              masters={this.state.masters}
            />
            <ServicesMultiselect
              servicesList={this.props.services}
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
              services={this.state.services}
            />
          </>
        );
      case 1:
        return (
          <DateStep
            date={this.state.selectedDate}
            daypart={this.state.daypart}
            handleDateChange={this.handleDateChange}
            handleDaypartChange={this.handleChange("daypart")}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <PersoneStep
            name={this.state.name}
            phone={this.state.phone}
            handleChange={this.handleChange}
            validateName={this.validateName}
            validatePhone={this.validatePhone}
            validPhone={this.state.validPhone}
            validName={this.state.validName}
            handleOnEnterPress={this.handleOnEnterPress}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
      masters: [
        { id: "irinagriniv", checked: false },
        { id: "olenaivaniv", checked: false },
        { id: "igorbodnar", checked: false },
        { id: "olenastefura", checked: false },
      ],
      daypart: "",
      name: "",
      phone: "",
      services: [],
      validPhone: false,
      validName: false,
      selectedDate: new Date(),
    });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };
  handleSwithChange = id => e => {
    console.log(id, e.target, e.target.checked);

    const newArr = this.state.masters.map(master => {
      return master.id === id ? { id, checked: e.target.checked } : master;
    });
    this.setState({
      masters: newArr,
    });
  };
  handleDelete = (input, key) => e => {
    console.log(this.state[input], key);

    const newArr = this.state[input].filter((v, i) => i !== key);
    console.log(newArr);
    this.setState({
      [input]: [...newArr],
    });
  };
  handleCloseModal = () => {
    this.setState({ openModal: false });
    navigate("/");
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleSubmit = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
      openModal: true,
      masters: [
        { id: "irinagriniv", checked: false },
        { id: "olenaivaniv", checked: false },
        { id: "igorbodnar", checked: false },
        { id: "olenastefura", checked: false },
      ],
      daypart: "",
      name: "",
      phone: "",
      services: [],
      selectedDate: new Date(),
      validPhone: false,
      validName: false,
    });
  };

  handleOnEnterPress = e => {
    if (e.which === 13) e.target.blur();
  };

  validateName = () => {
    const regex = /^[А-Яа-яA-Za-z ]+$/g;
    const validName = regex.test(this.state.name);
    this.setState({ validName: validName });
  };
  validatePhone = () => {
    const regex = /^[+]?[0-9]{2}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/;
    const validPhone = regex.test(this.state.phone);
    this.setState({ validPhone: validPhone });
  };

  getSelectedMastersNames = () => {
    const masters = this.state.masters;
    const mastersList = this.props.masters;
    const checked = masters
      .filter(master => master.checked)
      .map(master => {
        const v = mastersList.find(v => v.node.id === master.id);
        return v.node.name;
      });

    return checked.length > 0 ? (
      <Typography>
        Ви обрали запис до майстра(-ів) <span> {checked.join(", ")}</span>
      </Typography>
    ) : (
      <Typography>Ви не обирали майстра </Typography>
    );
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.overlay}>
        <div className={classes.root}>
          <Stepper
            activeStep={activeStep}
            style={{ padding: "1rem", borderRadius: 4 }}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel
                  classes={{
                    active: classes.stepActive,
                    completed: classes.stepCompleted,
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {this.state.activeStep === steps.length ? (
              <div>
                <Paper elevation={15}>
                  <div className={classes.success}>
                    <Typography
                      variant="h5"
                      color="primary"
                      style={{ marginBottom: 36, textAlign: "center" }}
                    >
                      Всі кроки завершені
                    </Typography>
                    {this.getSelectedMastersNames()}

                    {this.state.services.length > 0 ? (
                      <Typography>
                        Обрані послуги:{" "}
                        <span> {this.state.services.join(", ")}</span>
                      </Typography>
                    ) : (
                      <Typography>Послуги Вами не обрані</Typography>
                    )}
                    <Typography>
                      Вас влаштовує дата{" "}
                      <span>
                        {format(this.state.selectedDate, "dd MMMM yyy ", {
                          locale: ukLocale,
                        })}
                        року
                      </span>
                    </Typography>
                    {this.state.daypart ? (
                      <Typography>
                        Пора дня:{" "}
                        <span>{daypartLocal(this.state.daypart)}</span>
                      </Typography>
                    ) : null}
                    <Typography>
                      Вас звати <span>{this.state.name}</span> <br />
                      Ваш контактний номер телефону{" "}
                      <span>{this.state.phone}</span>
                    </Typography>
                    <Typography>
                      {" "}
                      Все вірно?
                      <br /> Будь-ласка, натисніть кнопку{" "}
                      <span>"Надіслати"</span>.
                    </Typography>
                  </div>
                </Paper>
                <div className={classes.navigation}>
                  <Button
                    onClick={this.handleReset}
                    variant="text"
                    color="primary"
                    className={classes.backButton}
                  >
                    Очистити
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Надіслати
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                {this.getStepContent(activeStep)}

                <div className={classes.navigation}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                    color="primary"
                  >
                    Назад
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={
                      activeStep === steps.length - 1 &&
                      (!this.state.validName || !this.state.validPhone)
                        ? true
                        : false
                    }
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Готово" : "Далі"}
                  </Button>
                </div>
              </div>
            )}
            <Modal
              openModal={this.state.openModal}
              handleCloseModal={this.handleCloseModal}
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

StepperAppoint.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperAppoint);
