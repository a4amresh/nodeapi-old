function getAll(req, res, schema) {
    schema.findById(req.params.id, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    });
}
module.exports = getAll;