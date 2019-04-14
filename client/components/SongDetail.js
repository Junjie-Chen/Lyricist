import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading the song...</div>;
    }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(query, { options: props => ({ variables: { id: props.params.id } }) })(SongDetail);
