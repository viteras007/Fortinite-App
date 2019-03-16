// React
import React, { Component } from "react";

// Components
import Fortnite from "../Fortnite/Fortnite";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { displayStats: false, username: "" };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
    }

    /**
     * @description Use the value content of the event to maps to the state
     * @param {Object} event The object which represents the event of changing content of the "username" input
     */
    handleChangeUsername(event) {
        if (event === undefined || event === null || event.target === undefined || event.target === null ||
            event.target.value === undefined || event.target.value === null) {
            return;
        }
        const userNameValue = event.target.value;
        const displayStatsUpdated = userNameValue !== "";
        this.setState({ displayStats: displayStatsUpdated, username: userNameValue });
    }
    
    render() {
        const { displayStats, username } = this.state;
        return (
        <div>
            <div className="titleBox">
                <div className="title">
                    <h1>FORTNITE TRACKER</h1>
                </div>
            </div>
            <div className="searchbox">
                <form onSubmit={this.handleSubmit}>
                    <label className="label-username">USERNAME:</label>
                    <input type="text" name="name" onChange={this.handleChangeUsername} />
                </form>
                {displayStats && <Fortnite username={username}/>}
            </div>
      </div>
        );
    }
}

export default Home;