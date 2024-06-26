const router = require('express').Router();
const {getBingos,addBingo,deleteBingo,updateBingo,getAssociationBingos} = require('../controllers/bingo.js');
const { protect } = require('../middleware/protect.js');


router.use(protect);

router.route('/').get(getBingos)

router.route('/association').get(getAssociationBingos)

router.route('/').post(addBingo)

router.route('/:id').delete(deleteBingo)

router.route('/:id').put(updateBingo)

module.exports = router;