const labels = ['Set 1', 'Set 2', 'Set 3', 'Set 4', 'Set 5', 'Set 6'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5 ,3,8,4,3,9],
      borderColor: 'rgb(36,0,0)',
      backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"]
    }
  ]
};

const config = {
  type: 'doughnut',
  maintainAspectRatio: false,
  data: data,
  options: {
    responsive: true,
  },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
};
// </block:config>

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, config);