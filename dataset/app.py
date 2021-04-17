from flask import Flask, make_response
from builder import Piebuilder, BarBuilder
from datasource import Datasource

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

piebuilder = Piebuilder()
barBuilder = BarBuilder()
ds = Datasource()

@app.route("/indicatorCard")
def indicator_card():
    dataset = ds.get_player_info()
    response = make_response(dataset)
    response.status = '200'
    response.headers['Content-Type'] = 'application/json;charset=utf-8'
    return response


@app.route("/heroesGameTime")
def heroes_game_time():
    dataset = barBuilder.get_heroes_game_time()
    response = make_response(dataset)
    response.status = '200'
    response.headers['Content-Type'] = 'application/json;charset=utf-8'
    return response


@app.route("/heroesVictory")
def heroes_victory():
    dataset = piebuilder.get_heroes_victory()
    response = make_response(dataset)
    response.status = '200'
    response.headers['Content-Type'] = 'application/json;charset=utf-8'
    return response


if __name__ == "__main__":
    app.run()