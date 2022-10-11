import express from "express";
import {
	createUser,
	updateUser,
	deleteUser,
	getUser,
	getAllUsers,
} from "../contollers/user.js";


import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res) => {
	res.send("Hello user , you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res) => {
	res.send("Hello user ,you can delete your account");
});
//CREATE
router.post("/", createUser);
// UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getAllUsers);

export default router;