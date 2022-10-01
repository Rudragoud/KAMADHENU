from flask import Flask,jsonify,request
from flaskext.mysql import MySQL
mysql = MySQL()




app = Flask(__name__)
mysql.init_app(app)


app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'punith123'
app.config['MYSQL_DB'] = 'test'



@app.route('/')
def hello_world():
   return "Hello world"
   

@app.route('/custLogin/<username>/<password>',methods = ['GET'])
def custLogin(username,password):
    print(username,password)
    cursor = mysql.get_db().cursor()
    return "Done"
    


if __name__ == '__main__':
   app.run('localhost',8000,False)