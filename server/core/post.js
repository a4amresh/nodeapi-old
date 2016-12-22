function postDocs(res, req, schema, columns) {
    var schema = new schema();
    for(var i in columns){
        schema[i] = req.body[i];
    }
    schema.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({message: "Post Successfully"});
        }
    });
}
module.exports = postDocs;