import Chart from 'chart.js/auto';
import { DivComponent } from '../../common/div-component';
import './chart.css';

export class ChartBox extends DivComponent {
	constructor() {
		super();
	}
	static workChart(configChartDoughnut, id) {
		const ctx = document.getElementById(id);
		new Chart(ctx, configChartDoughnut);
	}
	render(id) {
		this.el.classList.add('chart');
		this.el.innerHTML = `<canvas id="${id}"></canvas>`;
		return this.el;
	}
}
