const Golfers = require('./Golfers')
const Tournaments = require('./Tournaments')
const Courses = require('./Courses')

Golfers.hasOne(Tournaments)

Tournaments.belongsTo(Golfers)
Tournaments.belongsTo(Courses)

Courses.hasOne(Tournaments)

module.exports = { Golfers, Tournaments, Courses }