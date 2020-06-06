'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */



const Campeonato = use('App/Models/Campeonato')

/**
 * Resourceful controller for interacting with campeonatoes
 */
class CampeonatoController {
  /**
   * Show a list of all campeonatoes.
   * GET campeonatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const campeonatos = await Campeonato.all();

    return campeonatos;
  }

  /**
   * Create/save a new campeonato.
   * POST campeonatoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['Nome','Inicio','Fim']);

    data.Inicio = new Date()

    data.Fim = new Date()

    const createdCamp = await Campeonato.create({...data});

    return createdCamp;
  }

  /**
   * Display a single campeonato.
   * GET campeonatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params

    const campeonatos = await Campeonato.find(id);

    return campeonatos;

  }

  /**
   * Update campeonato details.
   * PUT or PATCH campeonatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params

    const data = request.only(['Nome','Inicio','Fim']);

    data.Inicio = undefined
    data.Fim = undefined

    const campeonato = Campeonato.query().where('id',id).update(data)

    return campeonato
  }

  /**
   * Delete a campeonato with id.
   * DELETE campeonatoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params
    
    const campeonato = Campeonato.query().where('id', id).delete()
  
    return campeonato
  }
}

module.exports = CampeonatoController
