var mongoose=require('mongoose');

const postScheme=new mongoose.Schema({
 

    content:{
    
        type:String,
        required:true,
      
    
    },

    
    user:{

        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
        
    },
    //include the ids of comment in the post 
    //comment is the array of stirng
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
    
     
}, {timestamps: true} );


const Post =mongoose.model('Post', postScheme);

module.exports=Post;
