import { DivComponent } from '../../common/div-component';
import { Tabs } from '../tabs/tabs.js';
import './statistic-box.css';

export class StatisticBox extends DivComponent {
	constructor() {
		super('article');
	}
	render(tabs, balance) {
		if (tabs.id == 'chartLine') {
			this.el.classList.add('container', 'bid-analytics');
			this.el.innerHTML = `
			<div class='body-tabs'>
				<h2 class='body-tabs__title'>Your Balance</h2>
				<span class='body-tabs__sum'>${balance}</span>
			</div>`;
		} else {
			this.el.classList.add('container', 'analytics');
			this.el.innerHTML = `
			<div class='body-tabs'>
				<h2 class='body-tabs__title'>Analytics</h2>
			</div>`;
		}

		this.el.appendChild(new Tabs(tabs).render());
		return this.el;
	}
}
