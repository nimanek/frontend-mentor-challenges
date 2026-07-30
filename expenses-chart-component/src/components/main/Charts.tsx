import jsonData from './data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
  type ChartData,
  // ChartData,
  // ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const Charts = () => {
  // days in chart
  const days = jsonData.map((item)=>item.day)

  // amounts in chart
  const amounts = jsonData.map((item)=>item.amount)

  // finding the max price to change the color
  const maxAmount = Math.max(...amounts)

  // chart data
  const data:ChartData<'bar'> = {
    labels: days,
    datasets: [
      {
        data: amounts,
        backgroundColor: amounts.map((amout)=>amout===maxAmount ? '#74B6BD' : '#ED765E'),
        hoverBackgroundColor: amounts.map((amount)=>amount===maxAmount ? 'hsla(186, 34%, 60%, 0.7)' : 'hsla(10, 79%, 65%, 0.7'),
        borderRadius:3,
        borderSkipped:false,
      }
    ]
  }

  // chart options
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'hsl(25, 47%, 15%)',
        padding: 8,
        displayColors: false,
        callbacks: {
          title: () => '',
          label: (context) => `$${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks:{color:'gray'}
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  };


  return (
    <div className='md:h-50 h-36 my-4'>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Charts
