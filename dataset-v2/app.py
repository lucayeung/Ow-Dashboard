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
    return jsonify({'isSuccess': True, 'data': None}), 200


@app.route("/heroes")
def get_heroes():
    """所有英雄的简介"""
    heroes = service.get_all_heroes()
    return jsonify({'isSuccess': True, 'data': heroes}), 200


@app.route("/heroes/<hero_name>")
def get_hero_detail_by_name(hero_name: str):
    """英雄详情"""
    hero = service.get_hero_detail_by_name(hero_name)
    return jsonify({'isSuccess': True, 'data': hero}), 200


@app.route("/player-info")
def get_player_info():
    """玩家基本信息"""
    player_info = ds.get_player_info()
    return jsonify({'isSuccess': True, 'data': player_info}), 200


@app.route("/hero-list")
def get_hero_list():
    """玩家英雄的门面资料"""
    hero_list = ds.get_heroes_list()
    return jsonify({'isSuccess': True, 'data': hero_list}), 200


@app.route("/get_top5_heroes_game_time")
def get_top5_heroes_game_time():
    """游戏时间前5的英雄"""
    heroes_game_time = ds.get_top5_heroes_game_time()
    return jsonify({'isSuccess': True, 'data': heroes_game_time}), 200


@app.route("/heroes_victory")
def get_heroes_victory():
    """玩家比赛胜利前8的英雄的胜场"""
    heroes_game_time = ds.get_heroes_victory()
    return jsonify({'isSuccess': True, 'data': heroes_game_time}), 200


#################
# ENDPOINTS END #
#################

if __name__ == "__main__":
    app.run()