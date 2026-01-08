import addItem from "./model/addschema.js";
const changeAdd = async (req,res) =>{

    try{
    const data = req.body;
    console.log("DataID: ",data._id)
    const response = await addItem.findOne({ _id: data._id });
    console.log('Respose: ',response);
    if (response) {
    response.artistaddress = data.metamaskAccount;
    response.save();
    res.json({ success: true, message: data });
  } else {
    res.status(500).json({ success: false, message:'Art Purchased Succesfully' });
    return res.status(200).json(data);  
  }
    }catch(error){
        console.log(error.message)
    }
}


export default changeAdd;