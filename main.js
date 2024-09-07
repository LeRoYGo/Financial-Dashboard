import './src/common/div-component.css';
import { CardList } from './src/components/card-list/card-list.js';
import { ChartBox } from './src/components/chart/chart.js';
import { Header } from './src/components/header/header.js';
import { StatisticBox } from './src/components/statistic-box/statistic-box.js';
import { TransactionsList } from './src/components/transactions-list/transactions-list.js';
import './style.css';

const lol = [
	{
		title: 'Премия',
		data: new Date(),
		sum: 100,
	},
	{
		title: 'Покупка Еды',
		data: new Date(),
		sum: -100,
	},
	{
		title: 'Зарплата',
		data: new Date(),
		sum: 50000,
	},
];

class MainView {
	#chart;
	#statisticBox;
	constructor() {
		this.app = document.getElementById('app');
		this.#chart = new ChartBox();
		this.#statisticBox = new StatisticBox();
	}
	render() {
		this.app.classList.add('layout');
		this.app.appendChild(new Header().render());
		this.app.appendChild(new CardList(2331, 6467, 3000).render());
		this.app.appendChild(this.#statisticBox.render());
		this.app.appendChild(this.#chart.render());
		this.app.appendChild(new TransactionsList(lol).render());
		this.#statisticBox.renderStatisticBox();
	}
}
new MainView().render();
