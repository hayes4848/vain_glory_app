class PlayersController < ApplicationController
  def index
    @players = get_players.data.map do |player|
      {id: player.id, name: player.attributes.name, lifetimeGold: player.attributes.stats.lifetimeGold.round, winStreak: player.attributes.stats.winStreak, lossStreak: player.attributes.stats.lossStreak}
    end
  end

  def show
  end

  private

  def get_players
    # https://api.dc01.gamelockerapp.com/shards/na/players
    conn = Faraday.new(url: 'https://api.dc01.gamelockerapp.com', headers: {
      "Authorization" => "Bearer #{ENV['API_KEY']}",
      "X-TITLE-ID" => 'semc-vainglory',
      "Accept" => 'application/vnd.api+json'} )
    response = conn.get('/shards/na/players').body
    json = JSON.parse(response)
    Hashie::Mash.new(json)
  end
end
