import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: { title: this.state.title }
        });
        console.log(this.props.mutate)
    }

    render() {
        return (
            <div>
                <h5>Create Song</h5>
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <label>Song title</label>
                    <input 
                        value={this.state.title}
                        onChange={ event => this.setState({title: event.target.value}) }
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
