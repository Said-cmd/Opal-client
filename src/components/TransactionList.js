import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'
import { makeStyles } from "@material-ui/core"

function TransactionList() {
  const [transactions, setTransactions] = useState([])
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      justifyContent: "space-between"
    },
  });

  const classes = useStyles();
  
  useEffect(() => {
    fetch('http://localhost:8000/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
  }, [])

  const transactionList = transactions.map((transaction) => {
    return <Transaction 
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    amount={transaction.amount}
    category={transaction.category}
    id={transaction.id}
    transactions={transactions}
    setTransactions={setTransactions}
    />
  })

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
          <TableRow>
            <TableCell>
              Date
            </TableCell>
            <TableCell
            align='right'
            >
              Description
            </TableCell>
            <TableCell
            align='right'
            >
              Amount
            </TableCell>
            <TableCell
            align='right'
            >
              Category
            </TableCell>
          </TableRow>
        {transactionList}
      </TableBody>
    </Table>
  )
}

export default TransactionList;