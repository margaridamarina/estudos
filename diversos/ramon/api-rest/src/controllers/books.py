from flask_restx import Resource
from src.server.instance import Server

books_db = [
    {'id': 0, 'title': 'War and Peace'},
    {'id': 1, 'title': 'Clean Code'}
]

server = Server()

app, api = server.app, server.api

@api.route('/books')
class BookList(Resource):
    def get(self, ):
        return books_db

    def post(self):
        print("------------------")
        print(api)
        print(type(api))
        response = api.payload
        books_db.append(response)
        return response, 200