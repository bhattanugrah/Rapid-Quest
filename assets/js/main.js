 // Return with commas in between
 var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

var dataPack1 = [2, 4, 10, 20, 25, 40, 46, 54, 65, 76, 80, 98, 100];
var dataPack2 = [5, 8, 15, 25, 30, 45, 55, 60, 65, 80, 90, 100, 120];
var dataPacl3 = [8, 12, 17, 26, 37, 50, 80, 90, 120, 150, 200, 250, 300];
var dates = [20, 25, 25, 30 ,35, 40, 60 , 65];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById('bar-chart');
var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: dates,
        datasets: [
        {
            label: 'Employer',
            data: dataPack1,
						backgroundColor: "rgb(29,78,163)",
						hoverBackgroundColor: "rgb(29,78,163)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Employee',
            data: dataPack2,
						backgroundColor: "rgb(87,123,249)",
						hoverBackgroundColor: "rgb(87,123,249)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Total Interest',
            data: dataPack2,
						backgroundColor: "rgb(134,173,250)",
						hoverBackgroundColor: "rgb(134,173,250)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        }
        ]
    },
    options: {
     		animation: {
        	duration: 10,
        },
        tooltips: {
					mode: 'label',
          callbacks: {
          label: function(tooltipItem, data) { 
          	return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
          }
          }
         },
        scales: {
          xAxes: [{ 
          	stacked: true, 
            gridLines: { display: false },
            }],
          yAxes: [{ 
          	stacked: true, 
            ticks: {
        			callback: function(value) { return numberWithCommas(value); },
     				}, 
            }],
        }, // scales
        legend: {display: true}
    } // options
   }
);


