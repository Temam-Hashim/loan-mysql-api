import {
  Create,
  Get,
  GetById,
  GetRandom,
  Update,
  Delete,
} from "./faq_modal.js";

export function createFAQ(req, res) {
  const body = req.body;
  Create(body, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: error.message,
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
}

export function getFAQById(req, res) {
  const id = req.params.id;
  GetById(id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to fetch FAQ",
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

export function getFAQ(req, res) {
  Get((error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to fetch FAQ",
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

export function getRandomFAQ(req, res) {
  GetRandom((error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to fetch testimonial",
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

export function updateFAQ(req, res) {
  const body = req.body;
  const id = req.params.id;

  Update(body, id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to update FAQ",
        status: "failed",
      });
    }
    return res.status(200).json({
      success: 1,
      message: "FAQ updated successfully!",
      data: results,
    });
  });
}
export function deleteFAQ(req, res) {
  const id = req.params.id;
  Delete(id, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: 0,
        message: "failed to delete FAQ",
        status: "failed",
      });
    } else if (results == "") {
      return res.status(201).json({
        success: 0,
        message: "no FAQ with this id",
        status: "failed",
      });
    } else {
      return res.status(200).json({
        success: 1,
        message: "FAQ deleted successfully!",
      });
    }
  });
}
