from flask import Flask, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/admin")
@cross_origin()
def admin():
    return render_template("admin.html")


@app.route("/videomng")
@cross_origin()
def videomng():
    return render_template("videomng.html")


@app.route("/subs")
@cross_origin()
def subs():
    return render_template("subs.html")


if __name__ == "__main__":
    app.run(debug=True)
