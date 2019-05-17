import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
	render() {
		return (
			<div className={'Die-dice-position'}>
				<i class={'fas fa-dice-' + this.props.number + (this.props.rolling ? ' fas-animate' : '')} />
			</div>
		);
	}
}
