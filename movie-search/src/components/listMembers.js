import React from "react";
import { connect } from "react-redux";
function listMembers(props) {
	return (
		<div>
			<h1>List of teammates:{props.members}</h1>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		members: state.membersReducer.members,
	};
};

export default connect(mapStateToProps, null)(listMembers);
