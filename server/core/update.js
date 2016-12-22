function DataUpdate(req, res, schema, columns){
    schema.findById(req.params.id, function(err, docs){
        if(err) {
            res.send(err);
        } else {
            for(var k in columns){
                docs[k] = req.body[k];
            }
            docs.save(function(err){
                if(err){
                    res.send(err);
                } else {
                    res.json({message: "Updated Successfully!"});
                }
            });
        }
    })
}
module.exports = DataUpdate;