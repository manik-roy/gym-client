import React from 'react';
import { makeStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

import Navbar from '../Navbar/Navbar';
import MemberShipForm from './MemberShipForm';
import PaymentForm from './PaymentForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Details', 'Bank Payment', 'Membership Created'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <MemberShipForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const MemberShip = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <header>
        <Navbar />
        <div className="pricing-header">
          <h1>YOUR GYM MEMBERSHIP</h1>
        </div>
      </header>
      <div className={classes.root, 'container'}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>

    </>
  );
}
export default MemberShip;
