import React from "react";
import {
  Chip,
  withStyles,
  Select,
  Input,
  MenuItem,
  Paper,
  InputLabel,
} from "@material-ui/core";

const styles = theme => {
  const { gold, olive, burgundy } = theme.palette;
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      padding: "1rem",
      maxWidth: 900,
      margin: "1rem auto",
      border: `1px solid ${olive[500]}`,
      textAlign: "center",
    },
    card: {
      textAlign: "center",
      margin: "2rem 0",
      padding: "1rem 1rem 4rem 1rem",
      border: `1px solid ${olive[500]}`,
    },
    select: {
      width: "100%",
      color: burgundy[700],
    },
    selectIcon: { color: gold[700] },
    selectMenu: {
      whiteSpace: "normal",
      backgroundColor: gold[200],

      minHeight: "2.5rem",
    },
    chip: {
      margin: "0.25rem",
    },
    icon: {
      padding: "0.05rem",
      borderRadius: "50%",
      background: gold[200],
      color: burgundy[900],
      border: `1px solid ${burgundy[900]}`,
    },
    menuItem: {
      fontSize: "0.875rem",
      color: gold[900],
      padding: "4px 10px 4px 14px",
      fontWeight: 300,
      whiteSpace: "normal",
      borderBottom: `1px solid ${gold[900]}`,
      lineHeight: 1,
      height: "min-content",
    },
    menuItemSelected: {
      backgroundColor: burgundy[500],
      color: "#fff",
    },
    inputLabel: {
      color: gold[900],
      fontSize: "0.875rem",
      marginBottom: "1rem",
    },
  };
};

const ServicesMultiSelect = props => {
  const { classes, services, handleChange, handleDelete, servicesList } = props;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "50%",
        minWidth: 250,
      },
    },
  };
  //as Material-ui has not <optgroup> in <Select> component, we'll flatten the servicesList marking 'category' items as disabled
  const optionsList = servicesList.reduce((arr, item) => {
    arr.push([item.node.category, true]);
    for (const s of item.node.pricelist) {
      arr.push([s.service, false]);
    }
    return arr;
  }, []);

  return (
    <Paper elevation={10} className={classes.root}>
      <InputLabel htmlFor="services" className={classes.inputLabel}>
        Послуги
      </InputLabel>
      <Select
        multiple
        color="primary"
        displayEmpty={true}
        autoWidth={true}
        value={[...services]}
        onChange={handleChange("services")}
        classes={{ selectMenu: classes.selectMenu, icon: classes.selectIcon }}
        input={
          <Input id="select-multiple-chip" classes={{ root: classes.select }} />
        }
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map((value, i) => (
              <Chip
                key={i}
                label={value}
                className={classes.chip}
                color="primary"
                onDelete={handleDelete("services", i)}
                className={classes.chip}
              />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {optionsList.map((item, i) => {
          return (
            <MenuItem
              key={i}
              value={item[0]}
              disabled={item[1]}
              classes={{
                root: classes.menuItem,
                selected: classes.menuItemSelected,
              }}
            >
              {item[0]}
            </MenuItem>
          );
        })}
      </Select>
    </Paper>
  );
};

export default withStyles(styles)(ServicesMultiSelect);
