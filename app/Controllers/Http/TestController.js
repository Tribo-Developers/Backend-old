'use strict'

class TestController {
    create({request, response}){
        return response.json({test: 'Hello World'})
    }
}

module.exports = TestController
