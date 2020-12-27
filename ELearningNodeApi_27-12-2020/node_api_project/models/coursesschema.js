/**
 * "REST API Course"
 * 
 * Model for the ACME vacation package.
 */

var settings = require('../db/settings')


var CoursesSchema = settings.mongoose.Schema(
    {
        code : {type:String, required:[true,'Code is needed']},
        name : {type:String, required:[true,'Name is needed']},
        description : {type:String, required:true},
        category : {type:String, required:[true,'Category is needed']},
        contents : [{
            title:{type:String, required:true},
            description:{type:String, required:false},
            video : {type:String, required:true}
        }],
        durationInHours:{type: Number, required:true, min:1},
        price:{type: Number, required:true, min:0},
        offer : {
            discount: Number,
            expires:{type:Date, required:false}
        },
        authors : {type:[String], required:true},
        rating : {type: Number, required:false, min:0 , max:5}
    }
);

// Export the model
exports.Courses = settings.mongoose.model('courses', CoursesSchema)