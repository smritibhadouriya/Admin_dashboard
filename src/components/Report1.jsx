import React, { useEffect, useRef } from 'react'
import  {WebsiteVisit} from '../data/mockData.js'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);


const Report1 = () => {
  
    const data = {
        labels: WebsiteVisit.map((visit)=>visit.month),
        datasets: [
          {
            label: 'Sales',
            data:  WebsiteVisit.map((visit)=>visit.visits),
            fill: false,
            borderColor: '#4F46E5',
            backgroundColor: '#4F46E5',
            tension: 0.4,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
      return <Line data={data} options={options} />;

}

export default Report1