
const user = require('./../models/user/login');
 const checkUnique = async (req, res, next) => {
  const { email } = req.body;
    const existingEmail = await user.findOne({
        email: email
    })
    if(existingEmail){
        return res.status(400).json({ error: 'Email already exists'})
    }
    next();


};
module.exports = checkUnique
