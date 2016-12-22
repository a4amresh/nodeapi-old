function DataDelete(req, res, schema){
    schema.remove({_id: req.params.id}, function(err){
        if(err){
            res.send(err);
        } else{
            res.json({message: "Successfully Deleted"});
        }
    });
}
module.exports = DataDelete;