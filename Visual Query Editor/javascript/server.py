#!flask/bin/python
from flask import Flask, jsonify
import pandas as pd
from flask import request

app = Flask(__name__)

df = pd.read_csv("database.csv")

subject_list = list(set(df["SUBJECT"]))

@app.route('/api/v1.0/getSubjectObject', methods=['GET'])
def get_subject_object():
    arr = list(set(list(df['SUBJECT'].values) + list(df['OBJECT'].values)))
    response = jsonify({'subject_object': arr})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/v1.0/getPredicate', methods=['GET'])
def get_predicate():
    arr = list(set(list(df['PREDICATE'].values)))
    response = jsonify({'predicate': arr})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

'''@app.route('/api/v1.0/getSubject', methods=['GET'])
def get_subject():
    response = jsonify({'subject_list': subject_list})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/v1.0/getObject', methods=['GET'])
def get_object():
    args = request.args
    subject = args['subject']
    object_list = list(set(df[df['SUBJECT']==subject]["OBJECT"]))
    response = jsonify({'object_list': object_list})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/v1.0/getPredicate', methods=['GET'])
def get_predicate():
    args = request.args
    subject_name = args['subject']
    object_name = args['object']
    predicate_list = list(set(df[ (df['OBJECT']==object_name) \
                              & (df['SUBJECT']==subject_name)]["PREDICATE"]))
    response = jsonify({'predicate_list': predicate_list})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response'''

if __name__ == '__main__':
    app.run(debug=True)
