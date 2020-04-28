'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampeonatosSchema extends Schema {
  up () {
    this.create('campeonatos', (table) => {
      table.increments()
      table.string('Nome').unique().notNullable()
      table.timestamp('Inicio').notNullable()
      table.timestamp('Fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('campeonatos')
  }
}

module.exports = CampeonatosSchema
