import React from "react";
import '../Fortnite/Fortnite.css';

class Fortnite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      winsolo: '',
      windupla: '',
      winsquad: ''
    };
  }

  renderizar() {
    /*
    fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Ninja')
      .then(response => response.json())
      .then(data => this.setState({data: data.uid}));*/

    fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=' + this.props.username)
      .then(response => response.json())
      .then(player => {

        fetch("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=" + player.uid + "&platform=pc")
          .then(response => response.json())
          .then(data => this.setState({ winsolo: data.data.keyboardmouse.defaultsolo.default.placetop1, windupla: data.data.keyboardmouse.defaultduo.default.placetop1, winsquad: data.data.keyboardmouse.defaultsquad.default.placetop1 }));
      });
  }
  componentDidMount() {
    this.renderizar();
  }
  componentDidUpdate() {
    this.renderizar();
  }
  render() {
    return (
      <div className='dados'>
        <div>NICK: {this.props.username}</div>
        <div>WIN SOLO:{this.state.winsolo}</div>
        <div>WIN DUO:{this.state.windupla}</div>
        <div>WIN SQUAD:{this.state.winsquad}</div>

      </div>
    );
  }
}

export default Fortnite;