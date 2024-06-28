import express from "express"
import authRouter from "./auth.js"
import roleRouter from "./role.js"
import permissionRouter from "./permission.js"
import userRouter from "./user.js"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/roles", roleRouter)
router.use("/permissions", permissionRouter)


export default router