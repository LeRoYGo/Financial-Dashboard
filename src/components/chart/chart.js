import { DivComponent } from '../../common/div-component';
import './chart.css';
import img from '/RevenueChart.png';

export class Chart extends DivComponent {
	constructor() {
		super();
	}

	render() {
		this.el.classList.add('container', 'chart');
		this.el.innerHTML = `<h2>Your Balance</h2>
		<img src="${img}"/>`;
		return this.el;
	}
}
