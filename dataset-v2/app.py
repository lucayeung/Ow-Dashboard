from flask import Flask, jsonify
import service
import datasource

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

ds = datasource.Datasource()

###################
# ENDPOINTS BEGIN #
###################

@app.route("/health")
def health_check():
    """App健康检查"""
    # dataset = svc.get_player_info()
    return jsonify({'isSuccess': True, 'data': None}), 200


@app.route("/heroes")
def get_heroes():
    heroes = service.get_all_heroes()
    return jsonify({'isSuccess': True, 'data': heroes}), 200


@app.route("/heroes/<hero_name>")
def get_hero_detail_by_name(hero_name: str):
    hero = service.get_hero_detail_by_name(hero_name)
    return jsonify({'isSuccess': True, 'data': hero}), 200


@app.route("/player-info")
def get_player_info():
    player_info = ds.get_player_info()
    return jsonify({'isSuccess': True, 'data': player_info}), 200


@app.route("/hero-list")
def get_hero_list():
    hero_list = ds.get_heroes_list()
    return jsonify({'isSuccess': True, 'data': hero_list}), 200


@app.route("/heroes_game_time")
def get_heroes_game_time():
    heroes_game_time = ds.get_heroes_game_time()
    return jsonify({'isSuccess': True, 'data': heroes_game_time}), 200


@app.route("/heroes_victory")
def get_heroes_victory():
    heroes_game_time = ds.get_heroes_victory()
    return jsonify({'isSuccess': True, 'data': heroes_game_time}), 200


#################
# ENDPOINTS END #
#################

if __name__ == "__main__":
    app.run()