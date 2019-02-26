import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const styles = theme => {
  const { burgundy, olive, gold } = theme.palette;

  return {
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
    },
    table: {
      width: "100%",
      minWidth: 300,
      fontFamily: `'Raleway', 'sans-serif'`,
      fontSize: "1.1rem",
    },
    head: {
      backgroundColor: burgundy[500],
      color: "#fff",
      fontSize: "1.2rem",
    },
    headName: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    headPrice: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    row: {
      "&:nth-of-type(even)": {
        backgroundColor: `rgba(${olive.rgb},0.3)`,
      },
    },
    price: {
      color: burgundy[900],
      fontSize: "1.2rem",
    },
    name: {
      color: gold[900],
      fontSize: "1rem",
    },
  };
};

let id = 0;
function createData(name, price) {
  id += 1;
  return { id, name, price };
}

const rows = [
  createData("Послуга 1", 300),
  createData("Послуга 2", 200),
  createData("Послуга 3", 350),
  createData("Послуга 4", 250),
];

function PriceTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.head}>
          <TableCell className={classes.headName}>Назва послуги</TableCell>
          <TableCell align="right" className={classes.headPrice}>
            Ціна, грн
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id} className={classes.row}>
            <TableCell component="th" scope="row" className={classes.name}>
              {row.name}
            </TableCell>
            <TableCell align="right" className={classes.price}>
              {row.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

PriceTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PriceTable);
