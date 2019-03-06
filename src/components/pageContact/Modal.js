import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  withStyles,
} from "@material-ui/core";

const styles = theme => {
  const { gold } = theme.palette;
  return {
    root: {
      color: gold[900],
    },
  };
};

function AlertDialog(props) {
  const { openModal, handleCloseModal, classes } = props;

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.root}
          >
            Ваш запит прийнято. Очікуйте дзвінка адміністратора.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Зрозуміло
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(AlertDialog);
