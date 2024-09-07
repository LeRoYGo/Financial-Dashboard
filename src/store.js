export const store = {
	tabs: {
		balance: 0,
		incomes: 0,
		expenses: 0,
		tabsLine: {
			listTabItem: [
				{
					name: 'Incomes',
					classStyle: ['tab-item', 'active'],
					dataTab: 'tab1',
					content: {
						content: 'div 1',
						classStyle: ['tab-pane', 'active'],
					},
				},
				{
					name: 'Expense',
					classStyle: ['tab-item'],
					dataTab: 'tab2',
					content: {
						content: 'div 2',
						classStyle: ['tab-pane'],
					},
				},
				{
					name: 'Savings',
					classStyle: ['tab-item'],
					dataTab: 'tab3',
					content: {
						content: 'div 3',
						classStyle: ['tab-pane'],
					},
				},
			],
		},
		tabsDoughnut: {
			listTabItem: [
				{
					name: 'Incomes',
					classStyle: ['tab-item', 'active'],
					dataTab: 'tab1',
					content: {
						content: 'div 1',
						classStyle: ['tab-pane', 'active'],
					},
				},
				{
					name: 'Expense',
					classStyle: ['tab-item'],
					dataTab: 'tab2',
					content: {
						content: 'div 2',
						classStyle: ['tab-pane'],
					},
				},
			],
		},
		operations: [
			{
				title: 'Unknown',
				data: new Date(),
				sum: 0,
			},
		],
	},
};
