from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/getSettings', methods=['POST'])
def get_settings():
    id_instance = request.form['idInstance']
    api_token = request.form['apiToken']

    api_url = f"https://1103.api.green-api.com/waInstance{id_instance}/getSettings/{api_token}"
    response = requests.get(api_url)

    return jsonify(response.json())
@app.route('/getStateInstance', methods=['POST'])
def get_state_instance():
    id_instance = request.form['idInstance']
    api_token = request.form['apiToken']

    api_url = f"https://1103.api.green-api.com/waInstance{id_instance}/getStateInstance/{api_token}"
    response = requests.get(api_url)

    return jsonify(response.json())
@app.route('/sendMessage', methods=['POST'])
def send_message():
    id_instance = request.form['idInstance']
    api_token = request.form['apiToken']
    phone_number = request.form['phoneNumber']
    message = request.form['message']

    api_url = f"https://1103.api.green-api.com/waInstance{id_instance}/sendMessage/{api_token}"
    payload = {
        "chatId": f"{phone_number}@c.us",
        "message": message
    }
    response = requests.post(api_url, json=payload)
    return jsonify(response.json())
@app.route('/sendFileByUrl', methods=['POST'])
def send_file_by_url():
    id_instance = request.form['idInstance']
    api_token = request.form['apiToken']
    phone_number = request.form['phoneNumber']
    file_url = request.form['fileUrl']

    api_url = f"https://1103.api.green-api.com/waInstance{id_instance}/sendFileByUrl/{api_token}"
    payload = {
        "chatId": f"{phone_number}@c.us",
        "urlFile": file_url,
        "fileName": "file"
    }

    response = requests.post(api_url, json=payload)

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
