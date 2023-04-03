import express from "express";
import { getFiles, getFilesList } from "../controllers/fileController.js";

const router = express.Router();

router.get("/files/data", getFiles);
router.get("/files/list", getFilesList);

export default router;
