import { DivComponent } from '../../common/div-component';
import { Transaction } from '../transaction/transaction';
import './transactions-list.css';

export class TransactionsList extends DivComponent {
	#transactionsList;

	constructor(transactions = []) {
		super();
		this.#transactionsList = transactions.map(
			transaction =>
				new Transaction(transaction.title, transaction.sum, transaction.data)
		);
	}

	render() {
		this.el.classList.add('transactions-list', 'container');
		this.el.innerHTML = `<h2 class='transactions-list__title' >Transactions</h2>`;
		if (this.#transactionsList.length == 0) {
			let element = document.createElement('p');
			element.setAttribute('class', 'transactions--empty');
			element.innerHTML = 'Нет операций';
			this.el.appendChild(element);
		} else {
			this.#transactionsList.map(transaction =>
				this.el.appendChild(transaction.render())
			);
		}
		return this.el;
	}
}
