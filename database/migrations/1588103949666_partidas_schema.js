'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class PartidasSchema extends Schema {
  up () {
    this.create('partidas', (table) => {
      table.increments()
      table.timestamps('Inicio').notNullable()
      table.string('Campeonato').notNullable().references('Nome').inTable('campeonatos').primary()
      table.string('Time1').notNullable().primary()
      table.string('Time2').notNullable().primary()
      table.string('Logo_Time1').references('Logo').inTable('times').notNullable()
      table.string('Logo_Time2').references('Logo').inTable('times').notNullable()
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
