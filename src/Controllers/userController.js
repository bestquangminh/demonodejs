class userController {
    getAllUser(req, res) {
        
        //* chọc model ra kq
        res.json({ id: 1, useName: 'Minh' });
    }
}


module.exports = new userController();