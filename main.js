import './src/common/div-component.css';
import { CardList } from './src/components/card-list/card-list.js';
import { Chart } from './src/components/chart/chart.js';
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
	constructor() {
		this.app = document.getElementById('app');
	}
	render() {
		this.app.classList.add('layout');
		this.app.appendChild(new Header().render());
		this.app.appendChild(new CardList(2331, 646467, 6434).render());
		this.app.appendChild(new StatisticBox().render());
		this.app.appendChild(new Chart().render());
		this.app.appendChild(new TransactionsList(lol).render());
	}
}
new MainView().render();
