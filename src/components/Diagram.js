import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Diagram() {
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  };
  const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels:Month,
    datasets:[
      {
        label: 'Dataset 1',
        data: Month.map(() => Math.random()*200),
        backgroundColor: 'red',
      },
      {
        label: 'Dataset 1',
        data: Month.map(() => Math.random()*100),
        backgroundColor: 'blue',
      },
    ]
  }

  return (
    <div className='BarChart' style={{height:650, width:625}}>
      <Bar options={options} data={data}/>
    </div>
  )
}
