import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';
import ExpensesIcon from '/Expenses.svg';
import IncomesIcon from '/Incomes.svg';
import WalletIcon from '/Wallet.svg';

export class CardList extends DivComponent {
	#listCard;

	constructor() {
		super();
		this.#listCard = [
			new Card('Balance', '12,003.902', WalletIcon),
			new Card('Incomes This Month', '12,003.902', IncomesIcon),
			new Card('Expenses This Month', '12,003.902', ExpensesIcon),
		];
	}

	render() {
		this.el.classList.add('card-list');
		this.el.innerHTML = '';
		this.#listCard.map(card => this.el.appendChild(card.render()));
		return this.el;
	}
}
