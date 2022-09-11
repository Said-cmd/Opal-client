import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';

function Transaction({ date, description, amount, category, id, transactions, setTransactions}) {
  const [edit, setEdit] = useState(false);
  const [color, setColor] = useState('')
  const [obj, setObj] = useState({
    date: date,
    description: description,
    amount: amount,
    category: category,
  });

  function handleEditTransaction() {
    setEdit((edit) => !edit)
  }

  function handleInputUpdate(updatedData){
    const updatedTransactions = transactions.map(transaction => {
      if (transaction.id === updatedData.id) {
        return updatedData;
      } else {
        return transaction;
      }
    })
    setTransactions(updatedTransactions);
  }

  function handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      setObj({
        ...obj, [name]: value
      });
      console.log(obj)
  }

  function handleUpdateTransaction() {
    fetch(`http://localhost:8000/transactions/${id}`, {
      method: "PATCH",
      headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((updatedTransactions) => { 
        console.log(updatedTransactions)
        handleInputUpdate(updatedTransactions)})
  }

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
            <TableCell contentEditable={edit} onChange={handleChange} name={date} value={date}>{date}</TableCell>
            <TableCell align="right" contentEditable={edit} onChange={handleChange} name={description} value={description}>{description}</TableCell>
            <TableCell align="right" contentEditable={edit} onChange={handleChange} name={amount} value={amount}>{amount}</TableCell>
            <TableCell align="right" contentEditable={edit} onChange={handleChange} name={category} value={category}>{category}</TableCell>
            <TableCell align="right" onClick={handleEditTransaction}>{edit ? <IconButton onClick={handleUpdateTransaction}><CheckIcon /></IconButton> : <IconButton><CreateIcon /></IconButton>}</TableCell>
            <TableCell align='right'>{<IconButton aria-label="delete" onClick={handleDeleteTransaction}><DeleteIcon /></IconButton>}</TableCell>
          </TableRow>
  );
}

export default Transaction;
