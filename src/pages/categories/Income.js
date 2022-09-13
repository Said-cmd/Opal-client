import { TableBody, TableCell, TableRow } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import React, { useState, useEffect } from 'react'
import Transaction from '../../components/Transaction'
import { makeStyles } from "@material-ui/core"

function Income() {
  const [transactions, setTransactions] = useState([])
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

  const categoryTransactions = transactions.filter((transaction) => transaction.category.toLowerCase().includes("income".toLowerCase()))

  const transactionList = categoryTransactions.map((transaction) => {
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
          align='left'
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

export default Income;