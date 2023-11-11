from flask import Flask, jsonify, url_for
from flask_cors import CORS


api = Flask(__name__)
api.config["SERVER_NAME"] = "127.0.0.1:5000"
CORS(api)

with api.test_request_context():
    data = [
        {   
            "id": 1,
            "isPublic": True,
            "hostId": 123,
            "name": "Modest Explorer",
            "price": 60,
            "type": "Simple",
            "image": url_for("static", filename="van1.png", _external=True),
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {   
            "id": 2,
            "isPublic": True,
            "hostId": 123,
            "name": "Beach Bum",
            "price": 80,
            "type": "Rugged",
            "image": url_for("static", filename="van2.png", _external=True),
            "description": "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper."
        },
        {   
            "id": 3,
            "isPublic": True,
            "hostId": 234,
            "name": "Reliable Red",
            "price": 100,
            "type": "Luxury",
            "image": url_for("static", filename="van3.png", _external=True),
            "description": "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it."
        },
        {   
            "id": 4,
            "isPublic": True,
            "hostId": 345,
            "name": "Dreamfinder",
            "price": 65,
            "type": "Simple",
            "image": url_for("static", filename="van4.png", _external=True),
            "description": "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated."
        },
        {   
            "id": 5,
            "isPublic": True,
            "hostId": 456,
            "name": "The Cruiser",
            "price": 120,
            "type": "Luxury",
            "image": url_for("static", filename="van5.png", _external=True),
            "description": "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."
        },
        {   
            "id": 6,
            "isPublic": True,
            "hostId": 123,
            "name": "Green Wonder",
            "price": 70,
            "type": "Rugged",
            "image": url_for("static", filename="van6.png", _external=True),
            "description": "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere."
        }
    ]


@api.route("/api/vandata")
def index():
    return jsonify(data)


@api.route("/api/van/<int:id>")
def test(id):
    if 0 < id <= len(data):
        return jsonify(data[id - 1])
    else:
        return "BAD REQUEST"


@api.route("/api/host/<int:hostId>/vans")
def getHostVans(hostId):
    return jsonify(tuple(filter(lambda van: van["hostId"] == hostId, data)))


if __name__ == "__main__":
    api.run(debug=True)
