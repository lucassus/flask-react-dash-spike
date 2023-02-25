import dash
from dash import Input, Output, callback, dcc, html

dash.register_page(__name__)


layout = html.Div(
    [
        html.H6("Change the value in the text box to see callbacks in action!"),
        output_html := html.Div(),
        html.Div(["Input: ", input_element := dcc.Input(value="initial value", type="text")]),
    ],
)


@callback(
    Output(output_html, component_property="children"),
    Input(input_element, component_property="value"),
)
def update_output_div(input_value):
    return f"Output: {input_value}"
