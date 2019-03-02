import React, { Component } from "react";
import PropTypes from "prop-types";
import PriceTable from "../pageAbout/PriceTable";
import MastersStep from "./MastersStep";
import DateStep from "./DateStep";

import master1 from "../../images/team1/hairdresser11.jpg";
import master2 from "../../images/team1/hairdresser21.jpg";
import master3 from "../../images/team1/hairdresser31.jpg";
import master4 from "../../images/team1/hairdresser41.jpg";
import GoldGrungBackground from "../../images/backgrounds/goldGrung";

import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  Button,
  IconButton,
  Typography,
  Paper,
  Icon,
} from "@material-ui/core";
import {
  ArrowBack,
  Delete,
  ArrowForward,
  Replay,
  Send,
} from "@material-ui/icons";

const steps = [
  { label: "Оберіть майстра", isStepOptional: true },
  { label: "Визначте дату і час", isStepOptional: false },
  { label: "Ваші контактні дані", isStepOptional: false },
];

const masters = [
  { name: "Ірина Гринів", image: master1 },
  { name: "Олена Іванів", image: master2 },
  { name: "Ігор Боднар", image: master3 },
  { name: "Олена Стефура", image: master4 },
];

const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    backButton: {
      marginRight: theme.spacing.unit,
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  };
};

class AppointStepper extends Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    master: "",
    firstName: "Oksana",
    lastName: "Lutsiv",
    phone: "",
    schedule: [],
    confirmationModalOpen: false,
    appointmentDateSelected: false,
    appointmentMeridiem: 0,
    validPhone: true,
    finished: false,
    smallScreen: window.innerWidth < 768,
  };
  getStepContent(step) {
    switch (step) {
      case 0:
        console.log(masters);
        return (
          <MastersStep
            masters={masters}
            handleChange={this.handleChange("master")}
            value={this.state.master}
          />
        );
      case 1:
        return <DateStep />;
      case 2:
        return <PriceTable />;
      default:
        return "Unknown step";
    }
  }

  totalSteps = () => steps.length;

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!steps[activeStep].isStepOptional) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
    console.log(this.state.skipped);
  };

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      //   const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
      master: "",
    });
  };
  handleChange = input => e => {
    console.log(e.target.value);
    this.setState({
      [input]: "",
      [input]: e.target.value,
    });
  };
  handleSubmit = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
    });
  };

  skippedSteps() {
    return this.state.skipped.size;
  }

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps();
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <GoldGrungBackground>
        <div className={classes.root}>
          <Stepper
            alternativeLabel
            // nonLinear
            activeStep={activeStep}
            // orientation="vertical"
          >
            {steps.map((step, index) => {
              const props = {};
              const buttonProps = {};
              {
                /* {
              if (step.isStepOptional) {
                buttonProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
            } */
              }
              {
                /* if (this.isStepSkipped(index)) {
              props.completed = false;
            } */
              }
              return (
                <Step key={index} {...props}>
                  <StepButton
                    onClick={this.handleStep(index)}
                    completed={this.isStepComplete(index)}
                    {...buttonProps}
                  >
                    {step.label}
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {this.allStepsCompleted() ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                  {this.state.firstName} {this.state.lastName}
                </Typography>
                <Button onClick={this.handleReset}>Відмінити</Button>
                <Button
                  onClick={this.handleSubmit}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Надіслати
                </Button>
              </div>
            ) : (
              <div>
                {/* <Typography className={classes.instructions}> */}
                {this.getStepContent(activeStep)}
                {console.log(activeStep)}
                {/* </Typography> */}
                <div>
                  <IconButton
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    <ArrowBack />
                    {/* Назад */}
                  </IconButton>
                  <IconButton
                    disabled={activeStep === steps.length - 1}
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {/* Далі */}
                    <ArrowForward />
                  </IconButton>
                  <IconButton
                    onClick={this.handleReset}
                    className={classes.button}
                  >
                    <Replay />
                  </IconButton>
                  {/* {steps[activeStep].isStepOptional &&
                  !this.state.completed.has(this.state.activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleSkip}
                      className={classes.button}
                    >
                      Пропустити
                    </Button>
                  )} */}
                  {/* {activeStep !== steps.length &&
                  (this.state.completed.has(this.state.activeStep) ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : ( */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleComplete}
                  >
                    {this.completedSteps() === this.totalSteps() - 1
                      ? "Фініш"
                      : "Готово"}
                  </Button>
                  {/* ))} */}
                </div>
              </div>
            )}
          </div>
        </div>
      </GoldGrungBackground>
    );
  }
}
AppointStepper.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(AppointStepper);
