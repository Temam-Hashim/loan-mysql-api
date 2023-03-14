import pool from "../../config/database.js";

export function Create(data, callback) {
  pool.query(
    `INSERT INTO users(email,password,role,profile_picture)VALUE(?,?,?)`,
    [data.email, data.password, data.role, data.profile_picture],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}
export function Get(callback) {
  pool.query(
    `SELECT id,email,role,profile_picture FROM users`,
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
    `SELECT * FROM users WHERE id=?`,
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
    `UPDATE users set email=?, password=?, role=?,profile_picture=? WHERE id=?`,
    [data.email, data.password, data.role, data.profile_picture, id],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}
export function Delete(id, callback) {
  pool.query(
    `delete from users where id=?`,
    [id],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results[0]);
    }
  );
}
export function GetByEmail(email, callback) {
  pool.query(
    `SELECT * FROM users WHERE email=?`,
    [email],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results[0]);
    }
  );
}
