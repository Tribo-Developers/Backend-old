'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimeCampSchema extends Schema {
  up () {
    this.create('time_camps', (table) => {
      table.increments()
      table.string('Time').references('Nome').inTable('times')
      table.string('Campeonato').references('Nome').inTable('campeonatoes')
      table.timestamps()
    })
  }

  down () {
    this.drop('time_camps')
  }
}

module.exports = TimeCampSchema
