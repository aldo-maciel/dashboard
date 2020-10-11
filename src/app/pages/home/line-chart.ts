import { Chart, Label } from 'chart.js';

const random = () => Math.round(Math.random() * 255);

export const lineChartData: Chart.ChartDataSets[] = [
  {
    label: 'Produtos',
    fill: true,
    lineTension: 0.1,
    backgroundColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }
];
export const lineChartLabels: Array<string> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
export const lineChartOptions = {
  responsive: true
};
export const lineChartLegend = true;

// Doughnut
export const doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
export const doughnutChartData = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70]
];

export const radarChartOptions = {
  responsive: true
};
export const radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

export const radarChartData = [
  { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];

export const pieChartOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  plugins: {
    datalabels: {
      formatter: (value: any, ctx: any) => {
        return ctx.chart.data.labels[ctx.dataIndex];
      }
    }
  }
};
export const pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
export const pieChartData: number[] = [300, 500, 100];
export const pieChartLegend = true;
export const pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
  }
];

export const polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
export const polarAreaChartData = [300, 500, 100, 40, 120];
export const polarAreaLegend = true;
