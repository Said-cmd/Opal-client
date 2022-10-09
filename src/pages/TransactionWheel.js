import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Legend, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

Chart.register(
  Tooltip, Legend
)

function TransactionWheel() {
  const [chart, setChart] = useState([])

  const baseURL = "https://opal-finance.herokuapp.com/transactions"

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch(`${baseURL}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((r) => {
        r.json().then((data) => {
          setChart(data)
        }).catch(error => {
          console.log(error);
        })
      })
    }
    fetchCategories()
  },[])
  
  const data = {
    labels: chart?.map(x => x.category),
    datasets: [{
        data: chart?.map(x => x.amount),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
        ],
        borderWidth: 1,
        hoverOffset: 4
    }]
}

const options = {
  maintainAspectRatio: false,
  legend: {
    labels: {
      fontSize: 26
    }
  }
}

  return (
    <div>
      <Doughnut
      data={data}
      height={600}
      options={options}
      />
    </div>
  )
}

export default TransactionWheel;