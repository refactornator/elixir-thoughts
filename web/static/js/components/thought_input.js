import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { createThought, changeThought, changeCategory } from '../actions';

const styles = {
  label: {
    float: 'left',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 8,
    color: 'rgba(0, 0, 0, 0.870588)'
  },
  toggle: {
    marginTop: 7,
    width: null,
    display: 'inline-block',
    marginBottom: 16
  }
};

export class ThoughtInput extends React.Component {
  handleNewThought() {
    this.props.createThought({
      category: this.props.category,
      text: this.props.thought
    });
  }

  handleToggleChange(event, toggled) {
    const newCategory = toggled ? 'life' : 'work';
    this.props.changeCategory(newCategory);
  }

  render() {
    const { category, thought, changeThought } = this.props;
    return (
      <Card className="thought-input" style={{ zIndex: 100 }}>
        <CardText style={{ padding: '9px 16px 0 16px' }}>
          <textarea
            value={thought}
            onChange={event => changeThought(event.target.value)}
          />
          <label style={styles.label}>Work</label>
          <Toggle
            label="Life"
            toggled={category === 'work' ? false : true}
            labelPosition="right"
            onToggle={this.handleToggleChange.bind(this)}
            style={styles.toggle}
          />
          <div style={{ textAlign: 'right', float: 'right' }}>
            <RaisedButton
              className="remember-button"
              primary={true}
              label="Remember"
              onClick={this.handleNewThought.bind(this)}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

export default connect(({ category, thought }) => ({ category, thought }), {
  createThought,
  changeThought,
  changeCategory
})(ThoughtInput);
