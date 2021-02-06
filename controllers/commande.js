const commandeModel = require('../models/commande');

exports.add = (req, res) => {
    let { prix, table, listePlat } = req.body;

    commandeModel.create(({
        prixCommande: prix,
        tableCommande: table,
        listPlatCommande: listePlat,
        statusCommande: '0'
    })).then((cmd) => {
        res.json({
            message: "Insertion Réussi",
            data: cmd,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: "erreur",
            data: err,
            statusCode: 304
        })
    });
}

exports.get = (req, res) => {
    commandeModel.findAll({
        nest: true,
        where : {
            statusCommande : '0'
        }

    }).then((cmd) => {
        res.json({
            message: "cmd trouver",
            data: cmd,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            message: "erreur",
            data: err,
            statusCode: 304
        })
    });
}

exports.getEnTraitement = (req, res) => {
    commandeModel.findAll({
        nest: true,
        where : {
            statusCommande : '1'
        }

    }).then((cmd) => {
        res.json({
            message: "cmd en traitement trouver",
            data: cmd,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            message: "erreur",
            data: err,
            statusCode: 304
        })
    });
}

exports.traitementUpdate = (req, res) => {

    let { id } = req.body;

    commandeModel.update(
        { statusCommande: '1' },
        { where: { id } }
    )
        .then(result =>
            res.json(
                {
                    message: "cmd updating",
                    data: result,
                    statusCode: 200
                }
            )
        )
        .catch(err =>
            res.json(
                {
                    message: "err servenue",
                    data: err,
                    statusCode: 200
                }
            )
        )
}