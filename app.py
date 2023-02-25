from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)


@app.route("/health")
def health():
    return jsonify({"status": "OK"})


@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello World!"})


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
