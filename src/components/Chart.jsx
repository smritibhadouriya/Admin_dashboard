import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { Userpermonth } from '../data/mockData';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: Userpermonth.map((visit) => visit.month),
    datasets: [
      {
        label: 'Users',
        data: Userpermonth.map((visit) => visit.count),
        backgroundColor: '#29612D',
           
          borderColor:'#29612D',
          
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
        beginAtZero:false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
