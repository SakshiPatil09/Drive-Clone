const bcrypt = require('bcryptjs')
const User = require('../../models/user.model')


const userSignup = async (req, res, next) => {
    // Make sure that the request.body is not empty
    if (req.body === null || req.body === undefined) {
        return res.status(400).json({msg : "Invalid User Credentials"})
    }
    else {
        // Extract information from Body
        const {username, email, password} = req.body
        
        // Check if the user already exists in the database
        const isExisting = await User.findOne({email : email})
        if (isExisting !== null) {
            return res
                .status(400)
                .json({ msg: "User already Existes" })
                .status(400);
        }
        else {
            try {
                // Hashing password
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                // Creating new user
                const user = new User({username : username, email : email, password : hashedPassword})
                await user.save()
                .then(user => {
                    res.status(200).json({msg : "Registration Successful"})
                })
                .catch(err => {
                    res.status(500).json({msg : "Something went wrong"})
                })
            }
            catch(err) {
                // Return an error as response if any error occours in the registration process
                return res.status(400).json({ error: err });
            }
        }
    }
}

module.exports = userSignup