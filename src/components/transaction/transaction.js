import { DivComponent } from '../../common/div-component';
import './transaction.css';

export class Transaction extends DivComponent {
	#title;
	#data;
	#sum;
	constructor(title = 'Нет данных', sum = 0, data = new Date()) {
		super();
		this.#title = title;
		this.#data = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
		this.#sum = sum;
	}
	#lol() {
		let style = '';

		if (this.#sum < 0) {
			style = 'transaction__sum--expense';
		} else if (this.#sum > 0) {
			style = 'transaction__sum--income';
			this.#sum = '+' + this.#sum;
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
			${this.#lol()}`;
		return this.el;
	}
}
