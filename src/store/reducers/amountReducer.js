import { INC_AMOUNT, DEC_AMOUNT } from "../action-types";

export default (state=0, action) => {
    switch(action.type){
        case INC_AMOUNT:
            return state + action.amount;
        
        case DEC_AMOUNT:
            return state - action.amount

        default:
            return state
    }
}