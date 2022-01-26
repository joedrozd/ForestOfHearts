import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, totalUse, goalUse, reductionAmount) {
  return {
    name,
    totalUse,
    goalUse,
    reductionAmount,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.totalUse} kg of CO2 per year</TableCell>
        <TableCell align="right">{row.goalUse} kg of CO2 per year</TableCell>
        <TableCell align="right">
          {row.reductionAmount} kg of CO2 per year
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
                Information
              </Typography>
              <Typography variant="p" component="div">
                Description of car type!
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    totalUse: PropTypes.number.isRequired,
    goalUse: PropTypes.number.isRequired,
    reductionAmount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("Total footprint", 159, 6.0, 24),
  createData("Car 1", 237, 9.0, 37),
  createData("Car 2", 262, 16.0, 24),
  createData("Van 1", 305, 3.7, 67),
  createData("Other", 356, 16.0, 49),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Carbon footprint section</TableCell>
            <TableCell align="right">Your usage</TableCell>
            <TableCell align="right">Goal usage</TableCell>
            <TableCell align="right">Reduction amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
