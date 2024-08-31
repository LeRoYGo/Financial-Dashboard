import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';
import ExpensesIcon from '/Expenses.svg';
import IncomesIcon from '/Incomes.svg';
import WalletIcon from '/Wallet.svg';

export class CardList extends DivComponent {
	#listCard;

	constructor(balance = 0, incomes = 0, expenses = 0) {
		super();
		this.#listCard = [
			new Card('Balance', balance, WalletIcon),
			new Card('Incomes This Month', incomes, IncomesIcon),
			new Card('Expenses This Month', expenses, ExpensesIcon),
		];
	}

	render() {
		this.el.classList.add('card-list');
		this.el.innerHTML = '';
		this.#listCard.map(card => this.el.appendChild(card.render()));
		return this.el;
	}
}
