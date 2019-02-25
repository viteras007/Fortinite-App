import React from "react";
import Fortnite from './Fortnite'

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.username);    
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nickname:
            <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default Searchbox;