import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
	constructor() {
		super('header');
	}

	render() {
		this.el.classList.add('header');
		this.el.innerHTML = `<h1>Dashboard</h1>`;
		return this.el;
	}
}
