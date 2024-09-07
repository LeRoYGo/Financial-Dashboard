import '../style.css';
import { CardList } from './components/card-list/card-list.js';
import { ChartBox } from './components/chart/chart.js';
import { Header } from './components/header/header.js';
import { StatisticBox } from './components/statistic-box/statistic-box.js';
import { TransactionsList } from './components/transactions-list/transactions-list.js';
import { configChartDoughnut, configChartLine } from './configChart.js';
import { store } from './store.js';

class MainView {
	constructor() {
		this.app = document.getElementById('app');
		this.app.classList.add('layout');
	}
	render() {
		this.app.appendChild(new Header().render());
		this.app.appendChild(new CardList(store.listCard).render());
		this.app.appendChild(new StatisticBox().render(store.tabs.tabsDoughnut));
		this.app.appendChild(
			new StatisticBox().render(store.tabs.tabsLine, store.balance)
		);
		this.app.appendChild(new TransactionsList(store.operations).render());

		ChartBox.workChart(configChartDoughnut, store.tabs.tabsDoughnut.id);
		ChartBox.workChart(configChartLine, store.tabs.tabsLine.id);
	}
}
new MainView().render();
