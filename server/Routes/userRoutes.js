import express from "express";
import { getUsers, createUser, loginUser, getUser, updateUser, deleteUser } from "../Controllers/userController.js";

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.get('/:id', getUser);
router.post('/login', loginUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;