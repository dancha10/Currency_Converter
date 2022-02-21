import React from 'react';
import { InputNumber } from 'antd';

export interface IInputCurrency {
	value: number;
	inputChange: (value: number) => void;
}

export const InputCurrency: React.FC<IInputCurrency> = ({
	value,
	inputChange,
}) => {
	return (
		<InputNumber
			style={{ width: 150 }}
			min={0}
			value={value}
			controls={false}
			keyboard={false}
			onChange={event => inputChange(event)}
		/>
	);
};
