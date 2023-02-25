from dash import dash
from flask import Flask
from dash import html, dcc, Output, Input
import pandas as pd
import plotly.express as px


def create_first_dash_app(server: Flask, url_base_pathname:str) -> dash.Dash:
    app = dash.Dash(__name__, server=server, url_base_pathname=url_base_pathname)

    df = pd.read_csv(
        "https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv"
    )

    app.layout = html.Div(
        [
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

    # TODO: What about @callback for multiple apps?
    # TODO: Maybe multipage app will be the option https://dash.plotly.com/urls
    @app.callback(
        Output("graph-with-slider", "figure"),
        Input("year-slider", "value"),
    )
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

    return app
