import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';

function Transaction({ date, description, amount, category, id, transactions, setTransactions}) {

  function handleDeleteTransaction() {
    fetch(`http://localhost:8000/transactions/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      const revisedTransactions = transactions.filter((transaction) => {
        return transaction.id !== id
      })
      setTransactions(revisedTransactions)
    })
  }
  
   return (
          <TableRow>
            <TableCell>{date}</TableCell>
            <TableCell align="right">{description}</TableCell>
            <TableCell align="right">{amount}</TableCell>
            <TableCell align="right">{category}</TableCell>
            <TableCell align="right">{<IconButton aria-label="update"><CreateIcon /></IconButton>}</TableCell>
            <TableCell align='right'>{<IconButton aria-label="delete" onClick={handleDeleteTransaction}><DeleteIcon /></IconButton>}</TableCell>
          </TableRow>
  );
}

export default Transaction;