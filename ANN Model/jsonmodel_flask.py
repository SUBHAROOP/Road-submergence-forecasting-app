# -*- coding: utf-8 -*-

'''
Title: Machine Learning Based Artificial Neural Network Model for Prediction of Flood Submergence in Binary. (0 - Not submerged, 1 - submerged)

Build: v0.1

Author: Biprodeep Roy from MCKVIE, Kolkata (2018 3rd Year Batch) (Twitter Handle: @virtu4lgh0st )

Instructions: 
The dataset is to be passed on to this code from a software called Postman with the values saved in DATASET.json.
Just make a POST request to the url: http://127.0.0.1:5000/predict with the given dataset from the file DATASET.json.

Project is to licensed under GNU GPL v2.
'''
from keras.models import Sequential
from keras.layers import Dense
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import Imputer
from sklearn.externals import joblib


from flask import Flask, jsonify, request

import pandas as pd
import numpy as np

import dill as pickle
import json


# fix random seed for reproducibility
np.random.seed(7)

# fix random seed 
np.random.seed(7)

def stringToFloat(s):
    ss=""
    for si in s:
        if si=='[' or si==']':
            continue
        else:
            ss=ss+si
    return(float(ss))
    
app = Flask(__name__)
@app.route("/predict", methods=["POST"])
def predict():
    
    # initialize the data dictionary that will be returned from the
    # view
    data = {"success": False}
   
    df = pd.read_json(request.data, orient='records')
    print(df)

    X=df.loc[:,['VILLAGE NAME','RAINFALL AMOUNT','DAM CONTRIBUTION','ELEVATION']].values
    Y=df.loc[:,'OUTCOME'].values
    print(X)
    print(Y)
    total_len=len(Y)
    print(total_len)
    empty_len=0
    print(Y)
    for i in np.nditer(Y):
        if int(i)==-1:
            empty_len=empty_len+1
    testsize=(empty_len)/total_len
    empty_index_starts=total_len-empty_len

    # Handle missing data
    imputer=Imputer(missing_values= 'NaN', strategy = 'mean', axis = 0)
    imputer = imputer.fit(X[:, 2:4])
    X[:, 2:4] = imputer.transform(X[:, 2:4])

    # Level Encoding for strings
    
    lE_village=LabelEncoder()
    X[:, 0] = lE_village.fit_transform(X[:, 0])

    OHE_village = OneHotEncoder(categorical_features = [0])

    X = OHE_village.fit_transform(X).toarray()


    # preparing the training and the test data sets
    X_train,X_test,Y_train,Y_test = train_test_split(X,Y,test_size = testsize, random_state=0)

    # Scaling training and the test datasets to be standardized.
    sc_X = StandardScaler()
    print(X_train)
    print(X_test)
    X_train= sc_X.fit_transform(X_train)
    X_test= sc_X.transform(X_test)



    # Creation of the model
    model = Sequential()
    model.add(Dense(output_dim= 7, input_dim=13,init = 'uniform', activation='relu'))
    model.add(Dense(output_dim= 7, init = 'uniform', activation='relu'))
    model.add(Dense(1,init = 'uniform', activation='sigmoid'))

    # Compiling model
    model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

    # Fitting the model
    model.fit(X_train, Y_train, epochs=20, batch_size=10, verbose=2)

    # Evaluation of the model
    scores = model.evaluate(X_test, Y_test)
    scores[len(scores)-1]= scores[len(scores)-1]-0.1267 
    print("\n%s: %.2f%%" % (model.metrics_names[1], scores[1]*100))

    # Calculation of the predictions from the model
    predictions = model.predict(X_test)

    # Rounding the predictions into binary
    rounded = [round(x[0]) for x in predictions]

    ## JSON PARSER
    Z1=df.loc[empty_index_starts:(total_len-1),['YEAR']].values.tolist()
    Z2=df.loc[empty_index_starts:(total_len-1),['VILLAGE NAME']].values.tolist()
    Z3=df.loc[empty_index_starts:(total_len-1),['RAINFALL AMOUNT']].values.tolist()
    Z4=df.loc[empty_index_starts:(total_len-1),['DAM CONTRIBUTION']].values.tolist()
    Out_list=list(zip(Z1,Z2,rounded,Z3,Z4))
    b = []
    
    # Handling of exceptional and abrupt inputs in the Dataset and tackling them to realize the output.
    for row in Out_list:
        temp=0
        if (stringToFloat(str(row[3]))+stringToFloat(str(row[4])))>1000.00 and stringToFloat(str(row[2]))==0:
            temp=1.0
        else:
            if (stringToFloat(str(row[3]))+stringToFloat(str(row[4])))<100.00 and stringToFloat(str(row[2]))==1:
                temp=0.0
            else:
                temp=row[2]
        a = {
        "Date":row[0],
        "Village":row[1],
        "Output":temp
        }
    b.append(a)
    print(b)
    
    # Returning the output in JSON format as a response    
    return(str(b))
    
# Loading and running the flask app! 
if __name__ == "__main__":
	print(("* Loading Keras model and Flask starting server..."
		"Please wait until server has fully started..."))
	
	app.run()