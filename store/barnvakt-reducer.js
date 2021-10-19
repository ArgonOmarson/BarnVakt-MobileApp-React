import BarnV from "../models/barnV";
import { ADD_BARNVAKT } from "./barnvakt-actions";



const initialState ={
    barnvakts: []
};
export default (state = initialState, action)=>{
    switch (action.type){
        case ADD_BARNVAKT:
            const newBarnV=new BarnV(new Date().toString(),action.BarnvaktData.namn, action.BarnvaktData.disc, action.BarnvaktData.image, action.BarnvaktData.tele)
            return {
                barnvakts:state.barnvakts.concat(newBarnV)
            }
            default:
                return state
    }
    
}