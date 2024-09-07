import Chart from 'chart.js/auto';
import { DivComponent } from '../../common/div-component';
import { configChartDoughnut } from '../../configChart.js';
import './statistic-box';

export class StatisticBox extends DivComponent {
	constructor() {
		super('article');
		this.#tabs = new WebTransportBidirectionalStream();
	}
	renderStatisticBox() {
		const ctx = document.getElementById('statisticBox');

		new Chart(ctx, configChartDoughnut);
	}
	render() {
		this.el.classList.add('container', 'analytics');
		this.el.innerHTML = `<canvas id="statisticBox"></canvas>`;
		return this.el;
	}
}
