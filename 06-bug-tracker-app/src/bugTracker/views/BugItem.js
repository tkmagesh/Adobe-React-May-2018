import React, { Component } from 'react';

 class BugItem extends Component{
	constructor(props){
		super(props);
		this.onBugNameClick = this.onBugNameClick.bind(this);
	}
	onBugNameClick(){
		this.props.toggle(this.props.model);
	}
	render(){
		let { model : bug } = this.props;
		let bugNameItem = bug.isClosed 
			? (<span className="bugname closed" onClick={this.onBugNameClick}>{bug.name}</span>) 
			: (<span className="bugname" onClick={this.onBugNameClick}>{bug.name}</span>);
		return(
			<li>
				{bugNameItem}
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}

export default BugItem;