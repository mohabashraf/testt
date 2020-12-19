const userModel = require('../model/user')

const getUser = async (userId) => {
    try
     {
        return await userModel.getUser(userId)
    } 
    catch (err) {
      throw err
    }
  };


module.exports = {getUser}