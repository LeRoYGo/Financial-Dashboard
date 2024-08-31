import { DivComponent } from '../../common/div-component';
import './card.css';
import WalletIcon from '/Wallet.svg';

export class Card extends DivComponent {
	#title;
	#amount;
	#icon;
	constructor(title = '', amount = 0, icon = WalletIcon) {
		super('article');
		this.#title = title;
		this.#amount = amount;
		this.#icon = icon;
	}

	render() {
		this.el.classList.add('container', 'card');
		this.el.innerHTML = `
				<img src="${this.#icon}" alt="">
				<h2 class="card__title">${this.#title}</h2>
				<span class="card__amount">₽ ${this.#amount}</span>
		`;
		return this.el;
	}
}
