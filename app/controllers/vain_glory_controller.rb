class VainGloryController < ApplicationController

  def basic_vain_response
    # https://api.dc01.gamelockerapp.com/shards/na/players
    conn = Faraday.new(url: 'https://api.dc01.gamelockerapp.com', headers: {"Authorization" => "Bearer #{ENV['API_KEY']}", "X-TITLE-ID" => 'semc-vainglory', "Accept" => 'application/vnd.api+json'} ) 
    response = conn.get '/shards/na/players/6abb30de-7cb8-11e4-8bd3-06eb725f8a76' 
    raise 'it'
  end

end