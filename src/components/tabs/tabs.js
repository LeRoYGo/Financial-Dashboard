import { DivComponent } from '../../common/div-component';
import './tabs.css';

export class Tabs extends DivComponent {
	#listTabItem;
	#listTabContent;
	constructor() {
		super('div');
		this.#listTabItem = [
			{
				content: 'Incomes',
				classStyle: 'tab-item active',
				dataTab: 'tab1',
			},
			{
				content: 'Expense',
				classStyle: 'tab-item',
				dataTab: 'tab2',
			},
			{
				content: 'Savings',
				classStyle: 'tab-item',
				dataTab: 'tab3',
			},
		];
		this.#listTabContent = [
			{
				content: 'div 1',
				classStyle: 'tab-pane active',
				dataTab: 'tab1',
			},
			{
				content: 'div 2',
				classStyle: 'tab-pane',
				dataTab: 'tab2',
			},
			{
				content: 'div 3',
				classStyle: 'tab-pane',
				dataTab: 'tab3',
			},
		];
	}
	addEvent() {
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

	generateList(tag, classStyle, listElement = []) {
		const el = document.createElement(tag);
		el.classList.add(classStyle);
		el.innerHTML = '';
		const tagHTML = tag == 'ul' ? 'li' : 'div';
		listElement.map(item => {
			el.innerHTML += `<${tagHTML} class=${item.classStyle} data-tab=${item.dataTab}>${item.content}</${tagHTML}>`;
		});

		return el;
	}

	render() {
		this.el.classList.add('tabs');

		this.el.innerHTML = ``;

		this.el.appendChild(this.generateList('ul', 'tab-list', this.#listTabItem));
		this.el.appendChild(
			this.generateList('div', 'tab-content', this.#listTabContent)
		);
		this.addEvent();
		return this.el;
	}
}
