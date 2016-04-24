# angular-jsf

[![NPM version](https://badge.fury.io/js/angular-jsf.svg)](http://badge.fury.io/js/angular-jsf)

`angular-jsf` combines built-in angular `$httpBackend` service with `JSON-Schema-faker` massive mock data generator.
It provides an easy to use interface for defining RESTful endpoints, such as this one:

    jsfRegisterMock({
        name: 'User Item',
        url: /\/users\/(\d+)/,
        method: 'GET',
        responseSchema: {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "faker": "name.findName"
                }
            },
            "required": [ "name" ]
        }
    });