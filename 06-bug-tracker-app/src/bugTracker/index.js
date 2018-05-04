import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import bugActions from './actions';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';


class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		);
	}
}

function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}
function mapDispatchToBugTrackerProps(dispatch){
	return bindActionCreators(bugActions, dispatch);
}

export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker);




