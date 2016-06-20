module.exports = Comment => ({
    save(req, res) {
        new Comment(req.body).save()
            .then(saved => res.json(saved))
            .catch(err => res.send(err).status(500));
    },
    findByEvent(req, res) {
        Comment.find({event: req.params.event}).select('_id body').exec()
            .then(categories => res.json(categories))
            .catch(err => res.send(err).status(500));
    },
});