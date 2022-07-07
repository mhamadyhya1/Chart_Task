import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const Mou7afazat = ['بيروت الأولى', 'بيروت الثانية','شمال الأولى','شمال الثانية', 'شمال الثالثة']
  const data = {
    labels:Mou7afazat,
    datasets:[
      {
        label : "نسبة المئوية لاقتراع في انتخابات 2022",
        data:[37,32,45,41,40],
        backgroundColor:[
          'green',
          'gray',
          'orange',
          'blue',
          'yellow',
          'red',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth:5,
      },
    ],
}
  return (
    <main>
      <div className='PieChart' style={{width:550,height:450}}>
      <Pie data={data}/>
    </div>
    </main>
    
    
  )
}
