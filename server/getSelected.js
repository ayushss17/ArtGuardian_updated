import addItem from "./model/addschema.js";
export const getSelected = async (req,res)=>{
    try{

    const response=req.body;
    const acc=response.metamaskAccount
    console.log()
    const data= await addItem.find({artistaddress:acc})
    res.json({ success: true, message: data });
    }catch(error){
        console.log(error)
    }
}