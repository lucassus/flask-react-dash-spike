import dash
from dash import Input, Output, callback, dcc, html

dash.register_page(__name__)

initial_value = "Hello World!"

layout = html.Div(
    [
        html.H3("Change the value in the text box to see callbacks in action!"),
        output_html := html.Div(),
        html.Div(["Input: ", input_element := dcc.Input(value=initial_value, type="text")]),
        clear_button := html.Button("Clear"),
    ],
)


@callback(
    Output(output_html, "children", allow_duplicate=True),
    Input(input_element, "value"),
    prevent_initial_call="initial_duplicate",
)
def update_output_div(input_value):
    return f"Output: {input_value}"


@callback(
    Output(output_html, "children", allow_duplicate=True),
    Input(clear_button, "n_clicks"),
    prevent_initial_call=True,
)
def clear_output(n_clicks):
    if n_clicks:
        return f"Output: {initial_value}"
