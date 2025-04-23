import React from 'react';
import { UserRole } from '../data/mockData.js';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary elements for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const Report2 = () => {
  const data = {
    labels: UserRole.map((user) => user.role),
    datasets: [
      {
        label: 'User Role Count',
        data: UserRole.map((user) => user.count),
        backgroundColor: [
          '#4F46E5',
          '#22C55E',
          '#F59E0B',
          '#EF4444',
          '#06B6D4',
          '#8B5CF6',
        ],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151', // dark grey
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return(
    <>
  <Pie data={data} options={options}/>
  
  
  </>
  )
};

export default Report2;
