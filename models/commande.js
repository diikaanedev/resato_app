const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Commande = sequelize.define('commande', {

    prixCommande: { type: Sequelize.STRING },
    tableCommande: { type: Sequelize.STRING },
    listPlatCommande: { type: Sequelize.STRING },
    statusCommande: { type: Sequelize.STRING },
    


});

module.exports = Commande;