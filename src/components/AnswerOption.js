import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            id={props.answerContent}
            value={props.answerContent}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerContent}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption;