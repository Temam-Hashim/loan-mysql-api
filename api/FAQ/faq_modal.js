import pool from "../../config/database.js";

export function Create(data, callback) {
  pool.query(
    `INSERT INTO faq(question, answer) VALUES (?,?)`,
    [data.question, data.answer],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}
export function Get(callback) {
  pool.query(`SELECT * FROM faq`, [], (errors, results, fields) => {
    if (errors) {
      return callback(errors);
    }
    return callback(null, results);
  });
}

export function GetRandom(callback) {
  pool.query(
    `SELECT * FROM faq order by RAND() LIMIT 10`,
    [],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}
export function GetById(id, callback) {
  pool.query(
    `SELECT * FROM faq WHERE id=?`,
    [id],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results[0]);
    }
  );
}

export function Update(data, id, callback) {
  pool.query(
    `UPDATE faq set question=?, answer=? WHERE id=?`,
    [data.question, data.answer, id],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}
export function Delete(id, callback) {
  pool.query(`DELETE FROM faq WHERE id=?`, [id], (errors, results, fields) => {
    if (errors) {
      return callback(errors);
    }
    return callback(null, results[0]);
  });
}
