const User = require('../../models/user.model')

// To Display User Profile
const profile = async (req, res, next) => {
       // Make sure that the request.body is not empty
    if (req.body === null || req.body === undefined || req.params === undefined || req.params === null) {
        return res.json({ msg: "Invalid User Credentials" });
    } 
    else {
        const userid  = req.params.userid

        try {
            const user = await User.findById(userid)
            const userInfo = {
                username: user.username,
                email: user.email,
                storageused: user.storageUsed,
                profilephoto: user.profilephoto,
            };
            return res.status(200).json(userInfo);
            
        }
        catch(err) {
            return res.status(404).json({msg : "User not found"})
        }

    
    }
}

module.exports = profile