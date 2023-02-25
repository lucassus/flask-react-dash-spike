import uuid

import dash
from dash import Dash, html
from flask import Flask, jsonify, send_from_directory, request

from backend.expenses import Expense, list_expenses, create_expense, delete_expense

app = Flask(__name__)

dash_app = Dash(
    __name__,
    server=app,
    use_pages=True,
    pages_folder="./backend/pages",
    url_base_pathname="/dash/",
)

dash_app.layout = html.Div(dash.page_container)


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello World!"})


# TODO: Move it to a blueprint
@app.route("/api/expenses", methods=["GET"])
def api_expenses():
    expenses = list_expenses()
    return jsonify([expense.dict() for expense in expenses])


@app.route("/api/expenses", methods=["POST"])
def api_expenses_create():
    expense = create_expense(Expense.parse_raw(request.data))
    return jsonify(expense.dict())


@app.route("/api/expenses/<uuid:uuid>", methods=["DELETE"])
def api_expenses_delete(uuid: uuid.UUID):
    delete_expense(uuid)
    return jsonify({})


@app.route("/assets/<path:path>")
def frontend_assets(path):
    return send_from_directory("./frontend/dist/assets", path)


# TODO: Hot module reloading does not work
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def frontend_index(path):
    return send_from_directory("./frontend/dist", "index.html")
