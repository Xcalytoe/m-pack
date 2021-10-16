import { REMINDER_ERROR, REMINDER_SUCCESS, REMINDER_LOADING, REMINDER_SPINNER, REMINDER_DELETE} from "../actionsType/actiontypes";
export const initialS ={
        loading: false,
        post: null,
        error:null,
}
 export const reminder =(state = initialS, action)=>{
     const {type, payload} = action;
    switch(type){
        case REMINDER_LOADING:
            return{
                ...state,
                loading: true,
                post: null,
                error:null,
            }
        case REMINDER_SPINNER:
            return{
                ...state,
                loading: true,
            }
        case REMINDER_SUCCESS:
            return{
                ...state,
                loading: false,
                post: payload,
                error:null,
            }
            case REMINDER_ERROR:
                return{
                    loading: false,
                    post: null,
                    error:payload,
                }
            case REMINDER_DELETE:
                return{
                    loading: false,
                    post: payload,
                    error:null,
                }
        default:
            return state

    }
}