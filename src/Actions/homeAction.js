import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restuarantConstant";

export const RestuarantsList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/restuarants.json')
        console.log('data', data.restaurants);
        dispatch({
            payload: data.restaurants , type: SUCCESS
        })
    }
    catch(error) {
        dispatch({
            payload: error , type: FAIL
        })
    }
}
