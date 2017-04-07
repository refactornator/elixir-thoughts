import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { forgetThought } from '../actions';

export class Thought extends React.Component {
  render() {
    const { thought, forgetThought } = this.props;
    const sinceHappened = moment(thought.creationTime).fromNow();

    return (
      <li className="thought-card">
        <h6>
          <div className="relative-time">{sinceHappened}</div>
          <IconButton
            className="delete-button"
            iconStyle={{
              color: 'rgba(0, 0, 0, 0.541176)',
              width: 20,
              height: 20
            }}
          >
            <ActionDelete onClick={forgetThought.bind(this, thought.id)} />
          </IconButton>
        </h6>
        <p>
          {thought.text}
        </p>
      </li>
    );
  }
}

export default connect(({}, props) => props, {
  forgetThought
})(Thought);
