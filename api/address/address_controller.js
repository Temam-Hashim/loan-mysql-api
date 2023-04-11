import {
  Create,
  Get,
  GetByCustomerId,
  Update,
  Delete,
} from "./address_modal.js";

import {GetById} from "./../customer/customer_modal.js"

export function createAddress(req, res) {
  const body = req.body;
GetById(body.customer_id,(error,results)=>{

  if(error){
    console.log(error);

    return res.status(500).json({
      status:"failed",
      message:"something want wrong with customer table",
      code:500,
    })
  }

  if(results){
    Create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: "failed",
          message: "database connection error!",
        });
      }
      return res.status(200).json({
        message:"address created",
        status: "success",
        data: results,
      });
    });
  }else{
    return res.status(404).json({
      status:"failed",
      message:"no customer found in the customer table with the specified id",
      code:404,
    })
  }

})


  
}
export function getAddressByCustomerId(req, res) {
  const userId = req.params.id;
  GetByCustomerId(userId, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "failed to fetch address",
        code: 500,
      });
    }
    if (!results) {
      return res.status(404).json({
        status: "empty",
        message: "record not found!",
  code:404
      });
    }
    return res.status(200).json({
      message:"Address found",
      status: "success",
      data: results,
      code:200
    });
  });
}
export function getAddresses(req, res) {
  Get((error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: "failed to fetch addresses",
        status: "failed",
        code:500
      });
    }
    if (!results) {
      return res.status(404).json({
        message: "record not found!",
        status: "empty",
        code:404
      });
    }

    return res.status(200).json({
      message:"Total "+results.length+" found",
      status:"success",
      code:200,
      data: results,
      
    });
  });
}
export function updateAddress(req, res) {
  const body = req.body;
  const id = req.params.id;


  Update(body, id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to update address",
        status: "failed",
        code:500,
      });
    }
    return res.status(200).json({
      message: "address updated successfully!",
      status:"success",
      code:200,
      data: results,
    });
  });
}

export function deleteAddress(req, res) {
  const id = req.params.id;
  Delete(id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to delete address",
        status: "failed",
      });
    } else if (results == "") {
      return res.status(201).json({
        success: 0,
        message: "no address with this id",
        status: "failed",
      });
    } else {
      return res.status(200).json({
        success: 1,
        message: "address deleted successfully!",
      });
    }
  });
}
