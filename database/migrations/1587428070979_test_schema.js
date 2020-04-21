'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments()
      table.string('Time1').notNullable()
      table.string('Time2').notNullable()
      table.string('Campeonato').notNullable()
      table.boolean('JogoDoBrasil').notNullable()
      table.integer('Dia').notNullable().unsigned()
      table.integer('Mes').notNullable().unsigned()
      table.integer('Ano').notNullable().unsigned()
      table.integer('BestOf').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestSchema
