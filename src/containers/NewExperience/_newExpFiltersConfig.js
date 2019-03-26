import { INPUT_TYPES, DISCIPLINES } from '../../_utils/constants';

export const newExpFilters = {
	discipline: {
		elementConfig: {
			label: 'Select your discipline',
			hint: 'This determines the reviewer.',
			type: INPUT_TYPES.select,
			value: '',
			options: [...DISCIPLINES]
		},
		validation: {}
	}
};
