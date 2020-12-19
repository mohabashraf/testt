const userService = require('../service/user')
        
router.get('/user', async (req, res, next) => {
    try
    {
        console.log("Hitting the GET user endpoint")
        const user = await userService.getUser(req.query.user_id);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json(err.message)
    }
});

   