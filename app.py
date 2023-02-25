import dash as dash
from dash import html
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

dash_app = dash.Dash(
    __name__,
    server=app,
    url_base_pathname="/dash/"
)

dash_app.layout = html.Div(id="dash-container", children="Hello Dash!")


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


# TODO: JavaScript stacktraces are not readable
# TODO: Hot module reloading does not work
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory('./frontend/dist', "index.html")
