import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (

            <form onSubmit={this.onFormSubmit} className="ui form">
            <script src="https://kit.fontawesome.com/afd6aa68df.js" crossorigin="anonymous"></script>
            <div className="field">
            <input type="text" placeholder="   Search for photos on page..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
            </div>
            </form>
            );
    }
}

export default SearchBar;