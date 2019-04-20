import React, { Component } from 'react';

class LyricList extends Component {
  onLyricLike(id) {

  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li
          key={id}
          className="collection-item"
        >
          {content}
          <i
            className="material-icons"
            onClick={() => this.onLyricLike(id)}
          >
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
