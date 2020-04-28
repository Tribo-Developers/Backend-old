'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimeCampSchema extends Schema {
  up () {
    this.create('time_camps', (table) => {
      table.increments()
      table.string('Time').notNullable().references('Nome').inTable('times')
      table.string('Campeonato').notNullable().references('Nome').inTable('campeonatos')
      table.timestamps()
    })
  }

  down () {
    this.drop('time_camps')
  }
}

module.exports = TimeCampSchema
