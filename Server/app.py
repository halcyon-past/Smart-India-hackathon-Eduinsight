from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

loaded_model = joblib.load('model.pkl')
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return 'Server is running!!'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()
        input_df = pd.DataFrame(input_data)
        predictions = loaded_model.predict(input_df)
        response = {'predictions': predictions.tolist()}
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()


