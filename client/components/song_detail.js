import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSong';

import AddLyric from './lyric_create';
import LyricList from './lyric_list';

class SongDetail extends Component {
    render() {
        if(!this.props.data.song) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <h5>{this.props.data.song.title}</h5>
                <LyricList songLyrics={this.props.data.song.lyrics} />
                <AddLyric songId={this.props.params.id} />
            </div>
        );
    }
}

export default graphql(query, {
    options: (props) => {return { variables: { id: props.params.id }}}
})(SongDetail);
