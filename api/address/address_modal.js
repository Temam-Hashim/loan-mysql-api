import pool from "../../config/database.js";

export function Create(data, callback) {
  pool.query(
    `INSERT INTO cust_address(customer_id,city,subcity,state,country,werada,kebele,house_no)VALUE(?,?,?,?,?,?,?,?)`,
    [data.customer_id, data.city, data.subcity, data.state, data.country, data.werada, data.kebele, data.house_no],
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
    `SELECT * FROM cust_address`,
    [],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results);
    }
  );
}

export function GetByCustomerId(id, callback) {
  pool.query(
    `SELECT * FROM cust_address WHERE customer_id=?`,
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
    `UPDATE cust_address set city=?, subcity=?, state=?, country=?, werada=?, kebele=?, house_no=? WHERE customer_id=?`,
    [data.city, data.subcity, data.state, data.country, data.werada, data.kebele, data.house_no,id],
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
    `delete from cust_address where customer_id=?`,
    [id],
    (errors, results, fields) => {
      if (errors) {
        return callback(errors);
      }
      return callback(null, results[0]);
    }
  );
}

