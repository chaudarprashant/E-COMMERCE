import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import upload from "../middlewares/multerMiddleware.js";
import categoryModel from '../models/categoryModel.js';

import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  upload.single("photo"),
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  upload.single("photo"),
  updateCategoryController
);

// get all category
router.get("/get-category", categoryControlller);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

// serve category photo
router.get("/category-photo/:id", async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id).select("photo");

    if (!category) {
      return res.status(404).send("Category not found");
    }

    if (category.photo && category.photo.data) {
      res.set("Content-Type", category.photo.contentType);
      return res.send(category.photo.data);
    } else {
      return res.status(404).send("No photo found");
    }
  } catch (error) {
    console.error("Photo Fetch Error:", error); // <-- Add this
    res.status(500).send({ success: false, error });
  }
});


export default router;
