import axios from "axios"
import { GET_PROD_SUCCESS } from "../constants/prodConstants";
import { GET_PROD_FAILURE } from "../constants/prodConstants";
const URL = process.env.REACT_APP_API_URL
export const getProducts = (paintType) => async (dispatch)=>{
            try{
                const response = await axios.post(`${URL}/products`, {type:paintType});
                console.log("getProducts.js: ",paintType)
                dispatch({type:GET_PROD_SUCCESS,payload:response.data})
            }
            catch(error){
                dispatch({type:GET_PROD_FAILURE,payload:error.message})
            }
        }
        