import Chart from 'chart.js/auto';
import { DivComponent } from '../../common/div-component';
import { configChartLine } from '../../configChart.js';
import './chart.css';

export class ChartBox extends DivComponent {
	constructor() {
		super();
	}
	egre() {
		const ctx = document.getElementById('myChart');
		new Chart(ctx, configChartLine);
	}

	render() {
		this.el.classList.add('chart');
		this.el.innerHTML = `<canvas id="myChart"></canvas>`;
		return this.el;
	}
}
