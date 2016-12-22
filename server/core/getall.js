function getAll(res, req, schema) {
    schema.find(function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    });
}
module.exports = getAll;