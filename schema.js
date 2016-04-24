var schemas = {};

schemas.UserCollectionGet = {
    "type": "array",
    "minItems": 4,
    "minItems": 8,
    "items": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "faker": "name.findName"
            },
            "email": {
                "type": "string",
                "faker": "internet.email"
            },
            "age": {
                "type": "integer",
                "minimum": 0,
                "maximum": 100
            }
        },
        "required": [
            "name",
            "email",
            "age"
        ]
    }
};

schemas.UserItemGet = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "faker": "name.findName"
        },
        "email": {
            "type": "string",
            "faker": "internet.email"
        },
        "age": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100
        }
    },
    "required": [
        "name",
        "email",
        "age"
    ]
};

schemas.UserItemCreate = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer",
            "minimum": 100,
            "maximum": 10000
        }
    },
    "required": [
        "id"
    ]
};
