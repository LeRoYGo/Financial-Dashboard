import ExpensesIcon from '/Expenses.svg';
import IncomesIcon from '/Incomes.svg';
import WalletIcon from '/Wallet.svg';

export const store = {
	balance: 0,
	incomes: 0,
	expenses: 0,
	tabs: {
		tabsLine: {
			id: 'chartLine',
			listTabItem: [
				{
					name: 'Incomes',
					classStyle: ['tab-item', 'active'],
					dataTab: 'tab1',
					content: {
						content: '',
						classStyle: ['tab-pane', 'active'],
					},
				},
				{
					name: 'Expense',
					classStyle: ['tab-item'],
					dataTab: 'tab2',
					content: {
						content: '',
						classStyle: ['tab-pane'],
					},
				},
				{
					name: 'Savings',
					classStyle: ['tab-item'],
					dataTab: 'tab3',
					content: {
						content: '',
						classStyle: ['tab-pane'],
					},
				},
			],
		},
		tabsDoughnut: {
			id: 'chartDoughnut',
			listTabItem: [
				{
					name: 'Incomes',
					classStyle: ['tab-item', 'active'],
					dataTab: 'smallTab1',
					content: {
						content: '',
						classStyle: ['tab-pane', 'active'],
					},
				},
				{
					name: 'Expense',
					classStyle: ['tab-item'],
					dataTab: 'smallTab2',
					content: {
						content: '',
						classStyle: ['tab-pane'],
					},
				},
			],
		},
	},
	operations: [
		{
			title: 'Unknown',
			data: new Date(),
			sum: 0,
		},
	],
	listCard: [
		{
			title: 'Balance',
			amount: 0,
			icon: WalletIcon,
		},
		{
			title: 'Incomes This Month',
			amount: 0,
			icon: IncomesIcon,
		},
		{
			title: 'Expenses This Month',
			amount: 0,
			icon: ExpensesIcon,
		},
	],
};
