import React, { Component } from 'react';

class LyricList extends Component {
    renderList() {
        return this.props.songLyrics.map(lyric => {
            return (
                <li key={lyric.id} className="collection-item">
                    <p> {lyric.content} </p>
                </li>
            );
        });
    }
    render() {
        console.log('in list ', this.props.songLyrics)
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

export default LyricList;