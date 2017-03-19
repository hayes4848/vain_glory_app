class PlayerChart extends React.Component {

  initChart() {
    var ctx = document.getElementById("myChart");
    var chartData = {
        labels: [
            "Win Streak",
            "Loss Streak"
        ],
        datasets: [
            {
                data: [this.props.wins, this.props.losses],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ]
            }]
    };
    if (typeof myChart !== 'undefined') {
      window.myChart.datasets[0].data[0].value = this.props.wins;
      window.myChart.datasets[0].data[1].value = this.props.losses;
      window.myChart.update();
    } else {
      var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: chartData,
          options: {
          }
      });
    }
  }

  render () {
    this.initChart()
    return (
      <div></div>
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
