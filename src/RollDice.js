import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			die1: this.dieNum(),
			die2: this.dieNum(),
			rolling: false
		};
		this.totalChange = this.totalChange.bind(this);
	}

	dieNum() {
		const diceNum = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
		let pos = Math.floor(Math.random() * diceNum.length);
		return diceNum[pos];
	}

	setNum() {
		this.setState({
			die1: this.dieNum(),
			die2: this.dieNum()
		});
	}

	changeState(state) {
		this.setState({ rolling: state });
	}

	changingState() {
		this.changeState(true);
		setTimeout(() => this.changeState(false), 1000);
	}

	totalChange() {
		this.changingState();
		setTimeout(() => {
			this.setNum();
		}, 1000);
	}

	render() {
		return (
			<div>
				<h1>Roll Dice</h1>
				<div>
					<Die number={this.state.die1} rolling={this.state.rolling} />
					<Die number={this.state.die2} rolling={this.state.rolling} />
				</div>
				<div>
					<button disabled={this.state.rolling} onClick={this.totalChange}>
						{this.state.rolling ? 'Wait for it!!' : 'Shake it!'}
					</button>
				</div>
			</div>
		);
	}
}
