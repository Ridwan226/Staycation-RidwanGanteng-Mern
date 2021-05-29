const router = require('express').Router();
const adminController = require('../controller/adminController');
const {upload} = require('../middlewares/multer');

router.get('/dashboard', adminController.viewDashboard);

// enpoint Category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

router.get('/booking', adminController.viewBooking);

// enpoint Bank
router.get('/bank', adminController.viewBank);
router.get('/item', adminController.viewItem);
router.post('/bank/add', upload, adminController.addBank);
router.put('/bank/edit', upload, adminController.editBank);
router.delete('/bank/:id', adminController.delBank);

module.exports = router;
