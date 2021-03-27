from flask import Flask, make_response
from builder import DatasetBuilder

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

dataset_builder = DatasetBuilder()

@app.route("/heroesGameTime")
def heroes_game_time():
    dataset = dataset_builder.heroes_game_time()
    response = make_response(dataset)
    response.status = '200'
    response.headers['Content-Type'] = 'application/json;charset=utf-8'
    return response

if __name__ == "__main__":
    app.run()