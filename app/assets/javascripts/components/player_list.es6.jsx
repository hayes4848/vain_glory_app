class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players
    };
  }

  handleSort(e, type) {
    e.preventDefault()
    var players = this.state.players

    if (type == 'win') {
      players.sort((a, b) => b.winStreak - a.winStreak)
    } else if (type == 'loss') {
      players.sort((a, b) => b.lossStreak - a.lossStreak)
    } else if (type == 'name-asc') {
      players.sort((a, b) => a.name.localeCompare(b.name))
    } else if (type == 'name-desc') {
      players.sort((a, b) => b.name.localeCompare(a.name))
    }

    this.setState({
      players: players
    })
  }

  handleFilter(e, type) {
    e.preventDefault()
    var players = this.state.players

    if (type == 'all') {
      players = this.props.players
    } else if (type == 'gold-10') {
      players = players.filter(player => player.lifetimeGold > 10000)
    } else if (type == 'gold-15') {
      players = players.filter(player => player.lifetimeGold > 15000)
    } else if (type == 'gold-17') {
      players = players.filter(player => player.lifetimeGold > 17000)
    }

    this.setState({
      players: players
    })
  }

  // var arr = [{x:1},{x:2},{x:4}];

  // arr.reduce(function (a, b) {
  //   return {x: a.x + b.x}; // returns object with property x
  // })

  // // ES6
  // arr.reduce((a, b) => ({x: a.x + b.x}));

  // // -> {x: 7}

  render () {
    var cards = [];
    this.state.players.forEach(function(player) {
      cards.push(<PlayerCard player={player} />);
    });

    var wins = this.state.players.reduce((acc, obj) => { return acc + obj.winStreak; }, 0);
    var losses = this.state.players.reduce((acc, obj) => { return acc + obj.lossStreak; }, 0);

    return (
      <div>
        <div>
          <h2>Players: {this.state.players.length}</h2>
          <PlayerChart wins={wins} losses={losses} />
          <h4>
            <span>Sort:</span>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleSort(e, 'win')}>Win Streak</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleSort(e, 'loss')}>Loss Streak</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleSort(e, 'name-asc')}>Name Ascending</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleSort(e, 'name-desc')}>Name Descending</a>
          </h4>
          <h4>
            <span>Filter:</span>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleFilter(e, 'all')}>All Players</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleFilter(e, 'gold-10')}>Gold Over 10k</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleFilter(e, 'gold-15')}>Gold Over 15k</a>
            <a href='#' className='btn btn-primary sort-btn' onClick={(e) => this.handleFilter(e, 'gold-17')}>Gold Over 17k</a>
          </h4>
        </div>
        <div>{cards}</div>
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
