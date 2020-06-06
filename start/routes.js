'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Exclusivo para testes
Route.group(()=>{
    Route.resource("test", "TestController").apiOnly()
})

Route.group(()=>{
    Route.resource("time", "TimeController").apiOnly()
})


Route.get('/itworks', ({request,response})=>{
    return {test: 'IT WORKS!'}
})
