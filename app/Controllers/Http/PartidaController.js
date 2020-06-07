'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Partida = use('App/Models/Partida')

/**
 * Resourceful controller for interacting with partidas
 */
class PartidaController {
  /**
   * Show a list of all partidas.
   * GET partidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const partidas = await Partida.all()

    return partidas;
  }

  /**
   * Create/save a new partida.
   * POST partidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["Inicio","Campeonato","Time1","Time2","MD","Jogo_Brasil","Banner_Jogo"])
  
    data.Inicio = new Date()

    const createdPartida = await Partida.create({...data})

    return createdPartida

  }

  /**
   * Display a single partida.
   * GET partidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params

    const partidas = await Partida.find(id)

    return partidas

  }

  /**
   * Update partida details.
   * PUT or PATCH partidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params

    const data = request.only(["Inicio","Campeonato","Time1","Time2","MD","Jogo_Brasil","Banner_Jogo"])
  
    data.Inicio = new Date()
    
    const partida = await Partida.query().where('id',id).update(data)

    return partida
  }

  /**
   * Delete a partida with id.
   * DELETE partidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params

    const partida = await Partida.query().where('id',id).delete()

    return partida
  
  }
}

module.exports = PartidaController
