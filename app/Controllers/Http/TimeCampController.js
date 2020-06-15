'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TimeCamp = use('App/Models/TimeCamp')

/**
 * Resourceful controller for interacting with timecamps
 */
class TimeCampController {
  /**
   * Show a list of all timecamps.
   * GET timecamps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const timeCamp = await TimeCamp.all();

    return timeCamp
  }

  /**
   * Create/save a new timecamp.
   * POST timecamps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const data = request.only(['Time','Campeonato'])

      const timecamp = await TimeCamp.create({...data})

      return timecamp
    }catch(e){
      response.status(400).send({content: 'Valor inválido passado para o relacionamento'})
    }

  }

  /**
   * Display a single timecamp.
   * GET timecamps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params

    const timecamp = await TimeCamp.find(id)

    return timecamp
  
  }

  /**
   * Update timecamp details.
   * PUT or PATCH timecamps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params

    const data = request.only(['Time','Campeonato'])
    try{
    
      const timecamp = TimeCamp.query().where('id',id).update(data)
    
      return timecamp
    }catch(e){
      response.status(400).send({content: 'Valor inválido passado para o relacionamento'})
    }
    
  }

  /**
   * Delete a timecamp with id.
   * DELETE timecamps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params

    const timecamp = TimeCamp.query().where('id',id).delete()

    return timecamp
  }
}

module.exports = TimeCampController
