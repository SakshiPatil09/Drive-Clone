const jwt = require('jsonwebtoken')
const User = require('../../models/user.model')

const userSignin = async (req, res, next) => {

     // Make sure that the request.body is not empty
    if (req.body === null || req.body === undefined) {
        return res.json({ msg: "Invalid User Credentials" });
    } 
    else {
        // Extract information from Body
        const { username, email, password } = req.body;

        // Checking whether a user exixts in database
        const isExisting = await User.findOne({ email: email });
        if (isExisting !== null || isExisting !== undefined) {
            try {
                // Checking hashed password 
                const checkPassword = await bcrypt.compare(
                    password,
                    isExisting.password
                );
                // Checking if the password is correct
                if (checkPassword) {

                    // Assign JsonWebToken to valid user(email)
                    const accessToken = jwt.sign(req.body.email, process.env.JWT_ACCESS_TOKEN, {expiresIn : "30m"})
                    
                    // Return success response
                     return res.status(200).json({ 
                        msg: "Signin Successful", 
                        accessToken : accessToken, 
                        username : username,
                        email : email 
                    });
                }
                else {
                    // Sigin in Failure "Incorrect Password"
                    return res.status(400).json({msg : "Incorrect password"})
                }
            }
            catch(err) {

                return res.status(500).json({msg : "Internal Server Error in sigin process"})
            }
        }
        else {
             return res.status(400).json({ msg: "User Does Not Exists" });
        }
    }

};

module.exports = userSignin;
