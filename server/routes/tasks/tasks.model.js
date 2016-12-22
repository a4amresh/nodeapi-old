var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TasksSchema = new Schema({
    task_title: {type: String, required: true},
    task_content: {type: String, required: true},
    task_status: String,
    user_name: String,
    user_id: Schema.Types.ObjectId,
    updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('tasks', TasksSchema);