'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class PartidasSchema extends Schema {
  up () {
    this.create('partidas', (table) => {
      table.increments()
      table.timestamp('Inicio').notNullable()
      table.string('Campeonato').references('Nome').inTable('campeonatoes').notNullable()
      table.string('Time1').references('Nome').inTable('times').notNullable()
      table.string('Time2').references('Nome').inTable('times').notNullable()
      table.string('Logo_Time1').notNullable()
      table.string('Logo_Time2').notNullable()
      table.integer('MD').notNullable()
      table.boolean('Jogo_Brasil').notNullable()
      table.string('Banner_Jogo')
      table.timestamps()
    })
  }

  down () {
    this.drop('partidas')
  }
}

module.exports = PartidasSchema
