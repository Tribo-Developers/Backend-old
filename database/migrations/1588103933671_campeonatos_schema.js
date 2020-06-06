'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampeonatosSchema extends Schema {
  up () {
    this.create('campeonatoes', (table) => {
      table.increments()
      table.string('Nome').unique().notNullable()
      table.timestamp('Inicio').notNullable()
      table.timestamp('Fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('campeonatoes')
  }
}

module.exports = CampeonatosSchema
