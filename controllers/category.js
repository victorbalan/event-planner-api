module.exports = Category => ({
    save(req, res) {
        new Category(req.body).save()
            .then(saved => res.json(saved))
            .catch(err => res.send(err).status(500));
    },
    findAll(req, res) {
        Category.find().select('_id name events').exec()
            .then(categories => res.json(categories))
            .catch(err => res.send(err).status(500));
    },
});