import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Transaction({ date, description, amount, category}) {
  const classes = useStyles();

   return (
          <TableRow>
            <TableCell>{date}</TableCell>
            <TableCell align="right">{description}</TableCell>
            <TableCell align="right">{amount}</TableCell>
            <TableCell align="right">{category}</TableCell>
          </TableRow>
  );
}

export default Transaction;