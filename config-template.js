// Use js instead of json because it allow comments
// And the syntax is more relax

module.exports = {
  // Put your Google Maps Directions API key here
  apiKey: '***************************************',
  database: {
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'sunday',
    database: 'google_map_prototype',
  }
}