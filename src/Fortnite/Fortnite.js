// React
import React from "react";

// Configurations
import { generalConfig } from "../config/generalConfig";

// Styles
import "../Fortnite/Fortnite.css";

class Fortnite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      winsolo: "",
      windupla: "",
      winsquad: ""
    };

    this.retrieveUserData = this.retrieveUserData.bind(this);
    this.retrieveUserStatsData = this.retrieveUserStatsData.bind(this);
    this.retrieveUserStatsDataCallback = this.retrieveUserStatsDataCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { username } = nextProps;
    this.retrieveUserData(username);
  }

  /**
   * @description Retrieve the data of the user based on the username definition
   * @param {String} userName The name of the user which will be used to retrieve the user
   * @return {Promise<Response>} The data of the user context
   */
  retrieveUserData(userName) {
    fetch(generalConfig.API_URLS.USERS.FIND_BY_ID.concat("?username=").concat(userName))
      .then(response => response.json())
      .then(this.retrieveUserStatsData);
  }

  /**
   * @description Retrieve the stats data of a specific user based on his definitions
   * @param {Object} userData The object which represents the data of the user
   * @return {Promise<Response>} The stats data of a specific user
   */
  retrieveUserStatsData(userData) {
    if (userData === undefined || userData === null || userData.uid === undefined || userData.uid === null) {
      return;
    }
    fetch(generalConfig.API_URLS.USERS.STATS.concat("?user_id=").concat(userData.uid).concat("&platform=pc"))
      .then(response => response.json())
      .then(this.retrieveUserStatsDataCallback)
  }
  
  /**
   * @description The callback of the functionality which retrieve the stats data of a specific user
   * @param {Object} userStatsData The stats data of a specific user
   */
  retrieveUserStatsDataCallback(userStatsData) {
    const dataDuo = userStatsData === undefined || userStatsData === null || userStatsData.data === undefined || userStatsData.data === null || userStatsData.data.keyboardmouse === undefined ||
      userStatsData.data.keyboardmouse === null || userStatsData.data.keyboardmouse.defaultduo === undefined || userStatsData.data.keyboardmouse.defaultduo === null || userStatsData.data.keyboardmouse.defaultduo.default === undefined ||
      userStatsData.data.keyboardmouse.defaultduo.default === null ? undefined : userStatsData.data.keyboardmouse.defaultduo.default.placetop1;

    const dataSolo = userStatsData === undefined || userStatsData === null || userStatsData.data === undefined || userStatsData.data === null || userStatsData.data.keyboardmouse === undefined ||
      userStatsData.data.keyboardmouse === null || userStatsData.data.keyboardmouse.defaultsolo === undefined || userStatsData.data.keyboardmouse.defaultsolo === null || userStatsData.data.keyboardmouse.defaultsolo.default === undefined ||
      userStatsData.data.keyboardmouse.defaultsolo.default === null ? undefined : userStatsData.data.keyboardmouse.defaultsolo.default.placetop1;

    const dataSquad = userStatsData === undefined || userStatsData === null || userStatsData.data === undefined || userStatsData.data === null || userStatsData.data.keyboardmouse === undefined ||
      userStatsData.data.keyboardmouse === null || userStatsData.data.keyboardmouse.defaultsquad === undefined || userStatsData.data.keyboardmouse.defaultsquad === null || userStatsData.data.keyboardmouse.defaultsquad.default === undefined ||
      userStatsData.data.keyboardmouse.defaultsquad.default === null ? undefined : userStatsData.data.keyboardmouse.defaultsquad.default.placetop1;
    
    this.setState({ windupla: dataDuo, winsolo: dataSolo, winsquad: dataSquad });
  };

  render() {
    const { username } = this.props;
    const { windupla, winsquad, winsolo } = this.state;
    return (
      <div className="dados">
        <div>NICK: {username}</div>
        <div>WIN SOLO: {winsolo}</div>
        <div>WIN DUO: {windupla}</div>
        <div>WIN SQUAD: {winsquad}</div>
      </div>
    );
  }
}

export default Fortnite;