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
      padding: "4px 1rem",
    },
  };
};

function PriceTable(props) {
  const { classes, pricelist } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.head}>
          <TableCell align="center" className={classes.headName}>
            Назва послуги
          </TableCell>
          <TableCell align="center" className={classes.headPrice}>
            Ціна, грн
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pricelist.map((row, i) => (
          <TableRow key={i} className={classes.row}>
            <TableCell component="th" scope="row" className={classes.name}>
              {row.service}
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
