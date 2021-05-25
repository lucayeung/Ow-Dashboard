from flask import Flask, jsonify
import service

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

###################
# ENDPOINTS BEGIN #
###################

@app.route("/health")
def health_check():
    """App健康检查"""
    # dataset = svc.get_player_info()
    return jsonify({'isSuccess': True, 'data': None}), 200


@app.route("/heroes")
def get_hero_list():
    heroes = service.get_all_heroes()
    return jsonify({'isSuccess': True, 'data': heroes}), 200


@app.route("/heroes/<hero_name>")
def get_hero_detail_by_name(hero_name: str):
    hero = service.get_hero_detail_by_name(hero_name)
    return jsonify({'isSuccess': True, 'data': hero}), 200


#################
# ENDPOINTS END #
#################

if __name__ == "__main__":
    app.run()