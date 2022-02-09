from flask import Flask, render_template, request
from pynmeagps import NMEAReader
# pip install flask, pynmeagps to use these packages

app = Flask(__name__)


# Flask routes
@app.route("/")
def home():
    return render_template('index.html')


@app.route("/makeRequest", methods=["GET"])
def make_request():
    try:
        req = NMEAReader.parse(request.args['query'])
        result = {'sentences': '<input type="text" class="result" readonly="readonly" value="Type de la trame : $GN' + req.msgID + '">' \
                                '<input type="text" class="result" readonly="readonly" value="Heure d\'envoi : ' + str(req.time) + '">' \
                                '<input type="text" class="result" readonly="readonly" value="Position de la latitude : ' + str(req.lat) + '">' \
                                '<input type="text" class="result" readonly="readonly" value="Position de la longitude : ' + str(req.lon) + '">',
                  'lat': str(req.lat),
                  'lon': str(req.lon)
                  }

    except Exception as e:
        result = {'sentences': '<p class="red"> Entrez une trame NMEA valide : <strong>' + str(e) + '</strong>'}

    return result
