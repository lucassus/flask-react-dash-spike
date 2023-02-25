import dash as dash
from dash import html, dcc, Output, Input
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

dash_app = dash.Dash(__name__, server=app, url_base_pathname="/dash/")

dash_app.layout = html.Div(
    [
        html.H6("Change the value in the text box to see callbacks in action!"),
        html.Div(
            ["Input: ", dcc.Input(id="my-input", value="initial value", type="text")]
        ),
        html.Br(),
        html.Div(id="my-output"),
    ],
)


@dash_app.callback(
    Output(component_id="my-output", component_property="children"),
    Input(component_id="my-input", component_property="value"),
)
def update_output_div(input_value):
    return f"Output: {input_value}"


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
