import React from 'react';
import { useGate, useStore } from 'effector-react';
import { SelectCurrency } from 'shared/ui';

import { $currenciesList, ConverterPageGate, selectClicked } from '../model';

export const CurrencyConversion = () => {
	useGate(ConverterPageGate);
	const currenciesList = useStore($currenciesList);
	return (
		<div>
			<SelectCurrency currencies={currenciesList} onChange={selectClicked} />
		</div>
	);
};
