import { DivComponent } from '../../common/div-component';
import './statistic-box';
import img from '/Analytics.png';

export class StatisticBox extends DivComponent {
	constructor() {
		super('article');
	}

	render() {
		this.el.classList.add('container', 'analytics');
		this.el.innerHTML = `<h2>Тут будет график круговой</h2>
		<img src='${img}'/>`;
		return this.el;
	}
}
