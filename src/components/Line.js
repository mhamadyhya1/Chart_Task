import React, { useState } from 'react'
import {Line} from 'react-chartjs-2'
import './styles/LineStyle.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);  
export default function LineChart() {
  
  const Month = ['January','Febuary','March','April' ,'May' ,'June'] 
  const data = {
    labels: Month,
    datasets: [{
      label: 'Grade Average of Class A per Month',
      data: [40 ,60 , 80 , 52 , 32,42, 75],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.1
    },
    {
        label: 'Grade Average of Class B per Month',
        data: [30,45,60,65,70,75,80,90],
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.1
      },
    ]
  };
  const [LineData , setLineData] = useState(data)
  return (
    <div className='Line' style={{width:550,height:450}}>
        <Line data={LineData}/>
    </div>
    
  )
}
