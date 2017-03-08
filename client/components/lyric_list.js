import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
    onLike(id) {
        console.log(id, this.props)
        this.props.mutate({
            variables: { id }
        })
    }

    renderList() {
        return this.props.songLyrics.map(lyric => {
            return (
                <li key={lyric.id} className="collection-item">
                     {lyric.content}
                     <span className="thumb"> 
                     <i 
                        onClick={() => this.onLike(lyric.id)}
                        className="material-icons"
                     >
                     thumb_up</i> {lyric.likes}
                     </span>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h6>Lyric List</h6>
                <ul className="collection">
                    { this.renderList() }
                </ul>
            </div>
        );
    }
}

const mutation = gql`
mutation  AddLyricLike($id: ID){
  likeLyric(id: $id) {
    id
    likes
    content
  }
}
`;

export default graphql(mutation)(LyricList);
