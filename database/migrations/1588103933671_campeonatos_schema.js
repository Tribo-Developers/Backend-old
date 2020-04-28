'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampeonatosSchema extends Schema {
  up () {
    this.create('campeonatos', (table) => {
      table.increments()
      table.string('Nome').unique().notNullable().primary()
      table.timestamps('Inicio').notNullable()
      table.timestamps('Fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('campeonatos')
  }
}

module.exports = CampeonatosSchema
