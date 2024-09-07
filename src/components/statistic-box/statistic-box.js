import Chart from 'chart.js/auto';
import { DivComponent } from '../../common/div-component';
import './statistic-box';

export class StatisticBox extends DivComponent {
	constructor() {
		super('article');
	}
	renderStatisticBox() {
		const ctx = document.getElementById('statisticBox');

		new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: 'My First Dataset',
						data: [300, 150, 100],
						backgroundColor: [
							'rgb(255, 99, 132)',
							'rgb(54, 162, 235)',
							'rgb(255, 205, 86)',
						],
						hoverOffset: 4,
					},
				],
			},
		});
	}
	render() {
		this.el.classList.add('container', 'analytics');
		this.el.innerHTML = `<canvas id="statisticBox"></canvas>`;
		return this.el;
	}
}
