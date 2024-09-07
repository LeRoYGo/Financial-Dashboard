import '../style.css';
import './common/div-component.js';
import { CardList } from './components/card-list/card-list.js';
import { Header } from './components/header/header.js';
import { StatisticBox } from './components/statistic-box/statistic-box.js';
import { Tabs } from './components/tabs/tabs.js';
import { TransactionsList } from './components/transactions-list/transactions-list.js';
import { store } from './store.js';

class MainView {
	#statisticBox;
	#tabs;
	constructor() {
		this.app = document.getElementById('app');
		this.app.classList.add('layout');
		this.#statisticBox = new StatisticBox();
		this.#tabs = new Tabs(store.balance);
	}
	render() {
		this.app.appendChild(new Header().render());
		this.app.appendChild(
			new CardList(store.balance, store.incomes, store.expenses).render()
		);
		this.app.appendChild(this.#statisticBox.render());
		this.app.appendChild(this.#tabs.render());
		this.app.appendChild(new TransactionsList(store.operations).render());
		this.#statisticBox.renderStatisticBox();
		this.#tabs.workChartBox();
	}
}
new MainView().render();
