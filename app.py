from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


# Static files
@app.route("/assets/<path:path>")
def catch_all(path):
    return send_from_directory("./frontend/dist/assets", path)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory('./frontend/dist', "index.html")
