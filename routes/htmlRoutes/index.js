const router = require('express').Router();

router.use(require('../apiRoutes/animalRoutes'));
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;