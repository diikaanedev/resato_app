const router = require('express').Router();

const commandeCtrl = require('../controllers/commande');

router.post('/' , commandeCtrl.add);
router.get('/' , commandeCtrl.get);
router.post('/update' , commandeCtrl.traitementUpdate);
router.get('/traitement' , commandeCtrl.getEnTraitement);

module.exports = router;