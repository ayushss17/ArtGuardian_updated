import addItem from './model/addschema.js';
import mockDatabase from './Database/mockdatabase.js'

const defaultData = async (request,response) => {
    try{
        const items = request.body;
        const newData = new addItem(items);
        await newData.save()
        const title=items.title;
        const bigtitle=items.bigtitle;
        const price=items.price;
        const newArt = {
        id: mockDatabase.arts.length + 1,
        title,
        bigtitle,
        price,
        artistAddress: 123,
        };  
        mockDatabase.arts.push(newArt);
        console.log(mockDatabase); 
        response.status(200).json({message: items})

    }
    catch(error){
       response.status(500).json({message: error.message})
    }
}

export default defaultData;