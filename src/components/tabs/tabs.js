import { DivComponent } from '../../common/div-component.js';
import { ChartBox } from '../chart/chart.js';
import './tabs.css';

export class Tabs extends DivComponent {
	#listTab;
	constructor(listTab) {
		super();
		this.#listTab = listTab;
	}
	#addEvent() {
		document.addEventListener('DOMContentLoaded', function () {
			var tabItems = document.querySelectorAll('.tab-item');

			tabItems.forEach(function (tab) {
				tab.addEventListener('click', function () {
					var tabId = this.getAttribute('data-tab');
					var content = document.getElementById(tabId);

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
	#generateListTab(listElement) {
		const elUl = document.createElement('ul');
		elUl.classList.add('tab-list');

		const elDiv = document.createElement('div');
		elDiv.classList.add('tab-list');
		listElement.map(item => {
			elUl.innerHTML += `
			<li class='${item.classStyle.join(' ')}' data-tab=${item.dataTab}>${
				item.name
			}</li>`;
			elDiv.innerHTML += `
			<div class='${item.content.classStyle.join(' ')}' id=${item.dataTab}>${
				item.content.content
			}</div>`;
		});

		return [elUl, elDiv];
	}
	#generateChart() {
		const activeTab = this.el.querySelector('div.tab-pane.active');
		activeTab.appendChild(new ChartBox().render(this.#listTab.id));
	}
	render() {
		this.el.classList.add('tabs', this.#listTab.id);
		const listTabs = this.#generateListTab(this.#listTab.listTabItem);
		listTabs.forEach(item => this.el.appendChild(item));
		this.#addEvent();
		this.#generateChart();
		return this.el;
	}
}
