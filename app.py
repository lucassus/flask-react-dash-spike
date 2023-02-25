import dash as dash
from dash import html, dcc, Output, Input
from flask import Flask, jsonify, send_from_directory
import pandas as pd
import plotly.express as px


app = Flask(__name__)

dash_app = dash.Dash(__name__, server=app, url_base_pathname="/dash/")

df = pd.read_csv(
    "https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv"
)


# TODO: Move it to a separate file
dash_app.layout = html.Div(
    [
        html.H6("Change the value in the text box to see callbacks in action!"),
        html.Div(
            ["Input: ", dcc.Input(id="my-input", value="initial value", type="text")]
        ),
        html.Br(),
        html.Div(id="my-output"),
        dcc.Graph(id="graph-with-slider"),
        dcc.Slider(
            df["year"].min(),
            df["year"].max(),
            step=None,
            value=df["year"].min(),
            marks={str(year): str(year) for year in df["year"].unique()},
            id="year-slider",
        ),
    ],
)


@dash_app.callback(
    Output(component_id="my-output", component_property="children"),
    Input(component_id="my-input", component_property="value"),
)
def update_output_div(input_value):
    return f"Output: {input_value}"


@dash_app.callback(Output("graph-with-slider", "figure"), Input("year-slider", "value"))
def update_figure(selected_year):
    filtered_df = df[df.year == selected_year]

    fig = px.scatter(
        filtered_df,
        x="gdpPercap",
        y="lifeExp",
        size="pop",
        color="continent",
        hover_name="country",
        log_x=True,
        size_max=55,
    )

    fig.update_layout(transition_duration=500)

    return fig


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
