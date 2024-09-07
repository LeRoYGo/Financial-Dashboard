import { DivComponent } from '../../common/div-component.js';
import { ChartBox } from '../chart/chart.js';
import './tabs.css';

export class Tabs extends DivComponent {
	#listTab;
	#balance;
	#chart;
	constructor(balance, listTab) {
		super('div');
		this.#balance = balance;
		this.#chart = new ChartBox();
		this.#listTab = listTab;
	}
	#addEvent() {
		document.addEventListener('DOMContentLoaded', function () {
			const tabItems = document.querySelectorAll('.tab-item');

			tabItems.forEach(function (tab) {
				tab.addEventListener('click', function () {
					const tabId = this.getAttribute('data-tab');
					const content = document.getElementById(tabId);

					// Удаляем активный класс у текущих вкладок и контента
					document.querySelector('.tab-item.active').classList.remove('active');
					document.querySelector('.tab-pane.active').classList.remove('active');

					// Добавляем активный класс для выбранной вкладки и контента
					this.classList.add('active');
					content.classList.add('active');
				});
			});
		});
	}

	#generateList(tag, classStyle, listElement = []) {
		const el = document.createElement(tag);
		el.classList.add(classStyle);
		el.innerHTML = '';
		const tagHTML = tag == 'ul' ? 'li' : 'div';
		listElement.map(item => {
			el.innerHTML += `<${tagHTML} class="${item.classStyle.join(' ')}"
				${tag == 'ul' ? ` data-tab=${item.dataTab}` : `id=${item.dataTab}`}>
				${item.content}</${tagHTML}>`;
		});

		return el;
	}

	generateChartBox(el) {
		el.innerHTML = '';
		el.appendChild(this.#chart.render());
	}

	workChartBox() {
		this.#chart.egre();
	}

	render() {
		this.el.classList.add('container', 'tabs');

		this.el.innerHTML = `
		<div class='body-tabs'>
			<h2 class='body-tabs__title'>Your Balance</h2>
			<span class='body-tabs__sum'>₽ ${this.#balance}</span>
		</div>`;

		this.el.appendChild(
			this.#generateList('ul', 'tab-list', this.#listTabItem)
		);
		this.el.appendChild(
			this.#generateList('div', 'tab-content', this.#listTabContent)
		);
		this.#addEvent();
		const activeTab = this.el.querySelector('div.tab-pane.active');
		this.generateChartBox(activeTab);
		return this.el;
	}
}
