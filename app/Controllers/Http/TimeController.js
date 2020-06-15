'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Time = use('App/Models/Time')

/**
 * Resourceful controller for interacting with times
 */
class TimeController {
  /**
   * Show a list of all times.
   * GET times
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const times = await Time.all();

    return times;

  }

  /**
   * Create/save a new time.
   * POST times
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only(['Nome','Logo','Jogador1','Jogador2','Jogador3','Jogador4','Jogador5','Coach']);

    const createdTime = Time.create({...data});

    return createdTime;
  }

  /**
   * Display a single time.
   * GET times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params

    const time = Time.find(id)
  
    return time

  }

  /**
   * Update time details.
   * PUT or PATCH times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params
    
    const data = request.only(['Nome','Logo','Jogador1','Jogador2','Jogador3','Jogador4','Jogador5','Coach']);

    const time = Time.query().where('id',id).update(data)

    return time
  }

  /**
   * Delete a time with id.
   * DELETE times/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    
    const time = Time.query().where('id', id).delete()
  
    return time
  }
}

module.exports = TimeController
