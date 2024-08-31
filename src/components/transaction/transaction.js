import { DivComponent } from '../../common/div-component';
import './transaction.css';

export class Transaction extends DivComponent {
	#title;
	#data;
	#sum;
	constructor(title = 'Нет данных', sum = 0, data = new Date()) {
		super();
		const dd = data.getDate();
		const mm = data.getMonth();
		const gggg = data.getFullYear();
		this.#title = title;
		this.#data = `${dd}/${mm}/${gggg}`;
		this.#sum = sum;
	}
	#lol() {
		let style = '';
		switch (true) {
			case this.#sum < 0:
				style = 'transaction__sum--expense';
				break;
			case this.#sum > 0:
				style = 'transaction__sum--income';
				this.#sum = '+' + this.#sum;
				break;
		}
		return `<span class='transaction__sum ${style}'>${this.#sum}</span>`;
	}

	render() {
		this.el.classList.add('transaction', 'transaction__container');
		this.el.innerHTML = `
						<div class="transaction__title">${this.#title}</div>
						<datetime class="transaction__data" datetime="${this.#data}">${
			this.#data
		}</datetime >
						${this.#lol()}
		`;
		return this.el;
	}
}
