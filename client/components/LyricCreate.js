import React, { Component } from 'react';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  render() {
    return (
      <form>
        <label>Add a Lyric:</label>
        <input
          onChange={event => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default LyricCreate;
