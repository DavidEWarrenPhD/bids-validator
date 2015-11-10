// dependencies -----------------------------------------------------------

import React              from 'react';
import pluralize          from 'pluralize';
import Issues             from './validation-results.issues.jsx';
import {Accordion, Panel} from 'react-bootstrap';

// component setup --------------------------------------------------------

export default class ValidationResults extends React.Component {

// life cycle events ------------------------------------------------------

	render () {
		let errors = this.props.errors;
		let warnings = this.props.warnings;

		// errors
		let errorsWrap;
		if (errors.length > 0) {
			let totalErrors = this._countIssues(errors);
			let errorHeader = <span>click to view {totalErrors} {pluralize('error', totalErrors)} in {errors.length} {pluralize('files', errors.length)}</span>;
			errorsWrap = (
				<Panel className="fadeIn upload-panel error-wrap" header={errorHeader}  eventKey='1'>
					<Issues issues={errors} issueType="Error"/>
				</Panel>
			);
		}

		//warnings
		let warningWrap;
		if (warnings.length > 0) {
			let totalWarnings = this._countIssues(warnings);
			let warningHeader = <span>click to view {totalWarnings} {pluralize('warning', totalWarnings)} in {warnings.length} {pluralize('files', warnings.length)}</span>;
			warningWrap = (
				<Panel className="fadeIn upload-panel warning-wrap" header={warningHeader}  eventKey='2'>
					<Issues issues={warnings} issueType="Warning" />
				</Panel>
			);
		}

		// validations errors and warning wraps
		return (
			<Accordion className="validation-messages" accordion>
				{errorsWrap}
				{warningWrap}
			</Accordion>
		);
	}

// custom methods ---------------------------------------------------------

	_countIssues(issues) {
		let numIssues = 0;
		for (let issue of issues) {numIssues += issue.errors.length;}
		return numIssues;
	}

}

ValidationResults.propTypes = {
	errors:   React.PropTypes.array,
	warnings: React.PropTypes.array
};

ValidationResults.Props = {
	errors:   [],
	warnings: []
};