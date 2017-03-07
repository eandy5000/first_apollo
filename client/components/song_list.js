import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import gql from 'graphql-tag';

import query from '../queries/fetchSongs';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({
            variables: { id },
            refetchQueries: [ { query } ]
        })
        //or we can chain a promise instead of refetchQueries
        //.then(() => this.props.data.refetch())
    }
    renderSongs() {
        return this.props.data.songs.map(song => {
            return <li 
                        key={song.id} 
                        className="collection-item"
                        onClick={() =>{
                            hashHistory.push(`/songs/${song.id}`);
                        }}
                    >
                        {song.title}
                        <i 
                            className="material-icons trash"
                            onClick={() => this.onSongDelete(song.id)}
                        >
                        delete
                        </i>
                  </li>
        });
    }
    
    render() {
        if(this.props.data.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>   
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link 
                    to="songs/new"
                    className="btn-floating btn-large right red"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id: $id){
            title
        }
    }
`;

export default graphql(mutation) ( 
    graphql(query)(SongList) 
    );