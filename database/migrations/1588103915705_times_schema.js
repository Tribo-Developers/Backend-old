'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimesSchema extends Schema {
  up () {
    this.create('times', (table) => {
      table.increments()
      table.string('Nome').notNullable().unique()
      table.string('Logo').notNullable()
      table.string('Jogador1').notNullable()
      table.string('Jogador2').notNullable()
      table.string('Jogador3').notNullable()
      table.string('Jogador4').notNullable()
      table.string('Jogador5').notNullable()
      table.string('Coach').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('times')
  }
}

module.exports = TimesSchema
