const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")();

const commandeController = require("../controllers/commandeController");
const userController = require("../controllers/userController");



/* Afficher tous les users */
router.get("/users", auth.authenticate(), userController.getAllUsers);

/* Afficher le total des users */
router.get("/user/total", auth.authenticate(), userController.countUsers);

/* Afficher un user */
router.get("/user/:id", auth.authenticate(), userController.getUserById);

/* Ajouter un user */
router.post("/user/ajouter", auth.authenticate(), userController.addUser);

/* Modifier un user */
router.put("/user/modifier/:id", auth.authenticate(), userController.updateUser);

/* Supprimer un user */
router.delete("/user/supprimer/:id", auth.authenticate(), userController.deleteUser);



/* Afficher toutes les commandes */
router.get("/commandes", auth.authenticate(), commandeController.getAllCommandes);

/* Afficher le total des commandes */
router.get("/commande/total", auth.authenticate(), commandeController.countCommandes);

/* Afficher une commande */
router.get("/commande/:id", auth.authenticate(), commandeController.getCommandeById);

/* Ajouter une commande */
router.post("/commande/ajouter", auth.authenticate(), commandeController.addCommande);

/* Modifier une commande */
router.put("/commande/modifier/:id", auth.authenticate(), commandeController.updateCommande);

/* Supprimer une commande */
router.delete("/commande/supprimer/:id", auth.authenticate(), commandeController.deleteCommande);


module.exports = router;
