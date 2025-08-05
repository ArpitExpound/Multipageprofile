const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth.getAllUsers);
router.get('/:id', auth.getUserById);
router.post('/signup', auth.register); 
router.post('/login', auth.login);
router.post('/api/forgotpassword', auth.forgotPassword);
router.post('/reset-password/:token', auth.resetPasswordWithToken);
router.put('/:id', auth.updateUser);
router.delete('/:id', auth.deleteUser);

module.exports = router;