import React from 'react';
import './styles/Botton.scss';
export interface BottonInterface {
	name: string
}

const Botton : React.FC<BottonInterface> = (props: BottonInterface) => {
	return <button className='button'>{props.name}</button>;
};

export default Botton;
