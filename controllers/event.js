module.exports = Event => ({
    save(req, res) {
        new Event(req.body).save()
            .then(saved => res.json(saved))
            .catch(err => res.send(err).status(500));
    },
    findAll(req, res) {
        Event.find().select('_id name').exec()
            .then(events => res.json(events))
            .catch(err => res.send(err).status(500));
    },
});