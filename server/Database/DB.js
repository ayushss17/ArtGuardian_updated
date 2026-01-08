import mongoose from "mongoose";


export const  connection = async () =>{
    const URL=`mongodb+srv://ayushsawant2005:123456969@artguardian.piweli4.mongodb.net/?retryWrites=true&w=majority&appName=ArtGuardian`
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true });
        console.log("DB connected");
    }   
    catch(error){
        console.log(error.message)
    }

}

export default connection;