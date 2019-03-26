import { INPUT_TYPES, WELLS } from '../../_utils/constants';

export const wellSelect = {
	wells: {
		elementConfig: {
			label: 'Select well',
			hint: 'This is required.',
			type: INPUT_TYPES.select,
			value: '',
			options: WELLS
		},
		validation: {}
	}
};
