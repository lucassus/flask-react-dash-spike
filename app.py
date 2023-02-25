from flask import Flask, jsonify, send_from_directory

from backend.dash_app import create_first_dash_app
from backend.second_dash_app import create_second_dash_app

app = Flask(__name__)

first_dash_app = create_first_dash_app(server=app, url_base_pathname="/dash/")
second_dash_app = create_second_dash_app(server=app, url_base_pathname="/dash-2/")


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello World!"})


@app.route("/assets/<path:path>")
def frontend_assets(path):
    return send_from_directory("./frontend/dist/assets", path)


# TODO: Hot module reloading does not work
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def frontend_index(path):
    return send_from_directory("./frontend/dist", "index.html")
