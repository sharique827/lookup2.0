import express from "express";
import { lookup } from "../controller/lookup";

export const router = express.Router();

router.post("/lookup", lookup);
