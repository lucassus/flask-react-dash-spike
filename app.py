import dash
from dash import Dash, html
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

dash_app = Dash(__name__, server=app, use_pages=True, pages_folder="./backend/pages", url_base_pathname="/dash/")
dash_app.layout = html.Div(dash.page_container)


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
