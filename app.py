from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/christmas')
def christmas():
    return render_template('adventuresofkyra.html')

@app.route('/snake')
def snake():
    return render_template('snake.html')

@app.route('/mineSweeper')
def mineSweeper():
    return render_template('minesweeper.html')

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)