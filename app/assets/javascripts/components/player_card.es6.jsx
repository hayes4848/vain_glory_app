class PlayerCard extends React.Component {
  render () {
    return (
      <div className='player-card'>
        <h4>Name: {this.props.player.name}</h4>
        <div>ID: {this.props.player.id}</div>
        <div>Lifetime Gold: {this.props.player.lifetimeGold}</div>
        <div>Win Streak: {this.props.player.winStreak}</div>
        <div>Loss Streak: {this.props.player.lossStreak}</div>
      </div>
    );
  }
}

// PlayerCard.propTypes = {
//   id: React.PropTypes.string,
//   name: React.PropTypes.string,
//   lifetimeGold: React.PropTypes.string,
//   winStreak: React.PropTypes.string,
//   lossStreak: React.PropTypes.string
// };
