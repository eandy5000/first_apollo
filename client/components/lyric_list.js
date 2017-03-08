import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        })
    }

    renderList() {
        return this.props.songLyrics.map(lyric => {
            return (
                <li key={lyric.id} className="collection-item">
                     {lyric.content}
                     <div className="thumb"> 
                     {lyric.likes} <i 
                        onClick={() => this.onLike(lyric.id, lyric.likes)}
                        className="material-icons"
                     >
                     thumb_up</i> 
                     </div>
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
