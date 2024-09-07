import { DivComponent } from '../../common/div-component';
import { Tabs } from '../tabs/tabs';
import './chart.css';

export class ChartBox extends DivComponent {
	constructor() {
		super();
	}

	render() {
		this.el.classList.add('container', 'chart');
		this.el.innerHTML = `
		<div>
			<h2>Your Balance</h2>
			<span>₽ 5490</span>
		</div>`;
		this.el.appendChild(new Tabs().render());

		return this.el;
	}
}
