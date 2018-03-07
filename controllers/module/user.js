const configure = require('./config');
const action = require('../module/action');

var user_schema = new configure.schema({
    _id: 'string',
  name: 'string',
  email: 'string',
  slackId: 'string',
  tasks: 'array',
  fixedTasks: 'array',
  freeTime: 'array',
  scheduled: 'array',
}, {
  collection: 'student'
});
var user = configure.mongoose.model('user', user_schema);

module.exports = {
	fetch_user: function(user_id,callback){
    user.findOne({slackId:user_id},function(err,user){
      if(err){
        console.log(err);
        return err;
      }
      callback(null,user._id);
    });
  }
}