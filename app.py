from flask import Flask, jsonify, send_from_directory

from backend.dash_app import create_dash_app

app = Flask(__name__)

dash_app = create_dash_app(server=app)


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello World!"})


@app.route("/dash")
def my_dash_app():
    return dash_app.index()


# Static files
@app.route("/assets/<path:path>")
def catch_all(path):
    return send_from_directory("./frontend/dist/assets", path)


# TODO: Hot module reloading does not work
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return send_from_directory("./frontend/dist", "index.html")
