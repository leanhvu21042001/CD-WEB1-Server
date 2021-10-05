const mysql = require('mysql');
const dbConfig = require('./../config/db.config');

const pool = mysql.createPool(dbConfig.poolConfig);


// Cơ chết promies
module.exports = {
  load: function (sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
  insert: function (table, entity) {
    const sql = `INSERT INTO ${table} SET ?`;
    return new Promise((resolve, reject) => {
      pool.query(sql, entity, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    })
  },
  update: function (table, entity, condition) {
    const sql = `UPDATE ${table} SET ? WHERE ?`;
    return new Promise((resolve, reject) => {
      pool.query(sql, [entity, condition], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    })
  },
  delete: function (table, condition) {
    const sql = `DELETE FROM ${table} WHERE ?`;
    return new Promise((resolve, reject) => {
      pool.query(sql, condition, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    })
  },
}