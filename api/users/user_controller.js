import {
  Create,
  Get,
  GetById,
  Update,
  Delete,
  GetByEmail,
} from "./user_modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(req, res) {
  const body = req.body;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(body.password, salt);
  Create(body, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "database connection error!",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
}
export function getUserById(req, res) {
  const userId = req.params.id;
  GetById(userId, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to fetch user",
        status: "failed",
      });
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "record not found!",
        status: "empty",
      });
    }
    const { password, created_at, ...others } = results;
    return res.status(200).json({
      success: 1,
      data: others,
    });
  });
}
export function getUsers(req, res) {
  Get((error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to fetch user",
        status: "failed",
      });
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "record not found!",
        status: "empty",
      });
    }

    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
}
export function updateUser(req, res) {
  const body = req.body;
  const id = req.params.id;

  if (body.password) {
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
  }

  Update(body, id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to update user",
        status: "failed",
      });
    }
    const { password, ...others } = results;
    return res.status(200).json({
      success: 1,
      message: "user updated successfully!",
      data: results,
    });
  });
}

export function deleteUser(req, res) {
  const id = req.params.id;
  Delete(id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to delete user",
        status: "failed",
      });
    } else if (results == "") {
      return res.status(201).json({
        success: 0,
        message: "no user with this id",
        status: "failed",
      });
    } else {
      return res.status(200).json({
        success: 1,
        message: "user deleted successfully!",
      });
    }
  });
}
export function login(req, res) {
  GetByEmail(req.body.email, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "mysql error please check your query",
        status: "failed",
      });
    }
    if (!results) {
      return res.status(201).json({
        success: 0,
        message: "no data associated with this email address!",
      });
    }

    const result = bcrypt.compareSync(req.body.password, results.password);
    // console.log(results[0].user_password);
    if (result) {
      results.password = undefined;
      const jt = jwt.sign({ result: results }, process.env.JWT_KEY, {
        expiresIn: "1h",
      });
      return res.json({
        success: 1,
        message: "login Successful!",
        data:results,
        token: jt,
      });
    } else {
      return res.json({
        success: 0,
        data: "invalid username or password",
      });
    }
  });
}
