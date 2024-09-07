import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends DivComponent {
	#listCard;
	constructor(listCard) {
		super();
		this.#listCard = listCard.map(
			card => new Card(card.title, card.amount, card.icon)
		);
	}

	render() {
		this.el.classList.add('card-list');
		this.el.innerHTML = '';
		this.#listCard.map(card => this.el.appendChild(card.render()));
		return this.el;
	}
}
