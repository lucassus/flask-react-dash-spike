from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


@app.route("/")
def index():
    return send_from_directory('./frontend/dist', "index.html")


# Static files
@app.route("/<path:path>")
def catch_all(path):
    return send_from_directory("./frontend/dist", path)
