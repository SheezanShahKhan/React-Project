import express from "express"
import userModel from "../../model/User.js"
import bcrypt from "bcrypt"
import tokenize from "../../utils/token.js"

const router = express.Router()
router.post("/register", async (req, res) => {
    try {
        let { email, password } = req.body
        let existingUser = await userModel.findOne({
            email
        });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" })
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        let newUser = await userModel.create({
            email,
            password: hashedPassword
        })
        const token = await tokenize({
            id: newUser._id
        });
        res.status(201).json
            ({ msg: "User created successfully",token })

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: "Internal Server Error"})
    }
})


export default router