from dash import dash
from flask import Flask
from dash import html, dcc, Output, Input


def create_second_dash_app(server: Flask,url_base_pathname:str) -> dash.Dash:
    app = dash.Dash(__name__, server=server, url_base_pathname=url_base_pathname)

    app.layout = html.Div(
        [
            html.H6("Change the value in the text box to see callbacks in action!"),
            output_html := html.Div(),
            html.Div(
                ["Input: ", input_element := dcc.Input(value="initial value", type="text")]
            ),

        ],
    )

    @app.callback(
        Output(output_html, component_property="children"),
        Input(input_element, component_property="value"),
    )
    def update_output_div(input_value):
        return f"Output: {input_value}"


    return app
