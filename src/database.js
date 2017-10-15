const Promise = require('bluebird');
const mysql = require('promise-mysql');
const config = require('../config.js').database;

const pool = mysql.createPool(config);

module.exports = {
  initAsync: () => {
    return pool.query(`
      CREATE TABLE IF NOT EXISTS google_map_prototype (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id for internal db usage',
        uuid varchar(36) NOT NULL COMMENT 'id for user to query result',
        status varchar(20) NOT NULL COMMENT 'store the status of the shortest path calculation',
        request JSON COMMENT 'Parameter of submit driving points request',
        response JSON COMMENT 'Response of get driving points request',
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
    `);
  },
  insertAsync: (uuid, status, request) => {
    return pool.query(
      `
        INSERT INTO google_map_prototype
        (uuid, status, request)
        VALUES (?, ?, ?);
      `,
      [ uuid, status, request ]
    );
  },
  selectAsync: (uuid) => {
    return pool.query(
      `
        SELECT * FROM google_map_prototype
        WHERE uuid = ?;
      `,
      [ uuid ]
    );
  },
  updateAsync: (uuid, status, response) => {
    return pool.query(
      `
        UPDATE google_map_prototype
        SET status = ?, response = ?
        WHERE uuid = ?;
      `,
      [ status, response, uuid ]
    );
  }
}