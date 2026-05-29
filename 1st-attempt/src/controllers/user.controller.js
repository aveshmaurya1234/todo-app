import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegisterControllers = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        // --- Validate the input ---
        if (!email || !password) {
            return res.status(400).json({ message: " email and password are required" })
        }

        let isExisted = await UserModel.findOne({email})
        if(isExisted)
        return res.status(409).json({
            message:"This email alredy exist"
        }) 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" })
        }

        if (password.trim().length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" })
        }

        // has password implemented 
        let hashedPassword = await bcrypt.hash(password, 10)

        let newUser = await UserModel.create({
            name, email, password: hashedPassword
        })

        // create token and set in cookie
        let token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.cookie("token", token)


        return res.status(201).json({
            message:"user creted successfully.",
            user:newUser,
        })

    }catch(error) {
        return res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        })
    }
}

const userloginControllers = async (req, res) => {
    try{
        const { email, password } = req.body;

        // --- Validate the input ---
        if (!email || !password) {
            return res.status(400).json({ message: " email and password are required" })
        }

        let isExisted = await UserModel.findOne({email})
        if(!isExisted)
        return res.status(404).json({
            message:"User not found"
        }) 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" })
        }

        if (password.trim().length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" })
        }

        // has password implemented 
        let comparePassword = await bcrypt.compare(password, isExisted.password)



        // create token and set in cookie
        let token = jwt.sign({ userId: isExisted._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.cookie("token", token)


        return res.status(200).json({
            message:"user logged in successfully.",
            user:isExisted,
        })

    }catch(error) {
        return res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        })
    }
}

export {
    userRegisterControllers,
    userloginControllers
}






       

//     } catch (error) {
//         return res.status(500).json({
//             error: error.message,
//         })
//     }
// }

// let loginController = async (req, res) => {
//     try {
//         let { email, password } = req.body;

//         if(!email || !password)
//         return res.status(400).json({
//             message:"All fields are required"
//         })

//         let isExisted = await UserModel.findOne({email})
//         if(!isExisted)
//         return res.status(404).json({
//             message:"User not found"
//         })

//         // // compare password
//         let isMatch = await isExisted.comparePassword(password)
//         if(!isMatch){
//             return res.status(401).json({
//             message:"Invalid credentials"
//         })
//         }
        

//         // create token and set in cookie
//         let accessToken = generateAccessToken(isExisted._id)
//         let refreshToken = generateRefreshToken(isExisted._id)

//         isExisted.refreshToken = refreshToken;
//         await isExisted.save()

//         res.cookie("accessToken", accessToken, {
//             httpOnly: true,
//             // secure: true,
//             // sameSite: "strict",
//             maxAge: 15 * 60 * 1000,
//         }) 

//         res.cookie("refreshToken", refreshToken, {
//             httpOnly: true,
//             // secure: true,
//             // sameSite: "strict",
//             maxAge: 24 * 60 * 60 * 1000,
//         }) 

//         return res.status(200).json({
//             message:"user logged in successfully.",
//             user:isExisted,
//         })

//     } catch (error) {
//         return res.status(500).json({
//             message: "Internal server error",
//             error
//         })
//     }
// }