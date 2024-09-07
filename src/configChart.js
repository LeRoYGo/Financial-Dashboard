export const configChartLine = {
	type: 'line',
	data: {
		datasets: [
			{
				fill: true,
				backgroundColor: ['rgba(101, 110, 225, 0.47)'],
				data: [
					{ x: '2016/12/25', y: 20 },
					{ x: '2016/12/26', y: 10 },
					{ x: '2016/01/30', y: 30 },
				],
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			point: {
				radius: 5,
				borderWidth: 2,
				hoverBorderWidth: 5,
			},
			line: {},
		},
	},
};

export const configChartDoughnut = {
	type: 'doughnut',
	data: {
		labels: ['Red', 'Blue', 'Yellow'],
		datasets: [
			{
				hoverOffset: 4,
				data: [100, 150, 300, 400],
				backgroundColor: [
					'rgba(255, 178, 106)',
					'rgba(251, 231, 127)',
					'rgba(175, 233, 194)',
					'rgba(114, 222, 246, 1.00)',
				],
			},
		],
	},
	options: {
		plugins: {
			legend: {
				position: 'bottom',
			},
		},
	},
};
