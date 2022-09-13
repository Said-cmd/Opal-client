import { TableBody, TableCell, TableRow } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'
import { makeStyles } from "@material-ui/core"

function TransactionList({ search }) {
  const [transactions, setTransactions] = useState([]);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      justifyContent: "space-between"
    },
  });

  const classes = useStyles();
  
  useEffect(() => {
    fetch('http://localhost:9292/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
  }, [])

  const filteredTransactions = transactions.filter((transaction) => {
    return (transaction.description.toLowerCase().includes(search.toLowerCase()))
  })

  const transactionList = filteredTransactions.map((transaction) => {
    return <Transaction 
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    amount={transaction.amount}
    category={transaction.category}
    id={transaction.id}
    transaction={transaction}
    transactions={transactions}
    setTransactions={setTransactions}
    />
  })

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
          <TableRow>
            <TableCell
            style={{ fontWeight: "bold"}}
            >
              Date
            </TableCell>
            <TableCell
            align='right'
            style={{ fontWeight: "bold"}}
            >
              Description
            </TableCell>
            <TableCell
            align='right'
            style={{ fontWeight: "bold"}}
            >
              Amount
            </TableCell>
            <TableCell
            align='right'
            style={{ fontWeight: "bold"}}
            >
              Category
            </TableCell>
            <TableCell
            align='center'
            style={{ fontWeight: "bold"}}
            >
              Edit Transaction
            </TableCell>
          </TableRow>
        {transactionList}
      </TableBody>
    </Table>
  )
}

export default TransactionList;