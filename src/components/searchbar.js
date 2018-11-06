import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {text:''};
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={event => this.setState({text: event.target.value})}/>
                Value of the input: {this.state.text}
            </div>
        );
    }
}

export default SearchBar;
