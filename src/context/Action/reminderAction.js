import { REMINDER_ERROR, REMINDER_SUCCESS, REMINDER_LOADING, REMINDER_SPINNER } from '../actionsType/actiontypes';
import {addBirthday, deleteBirthday, editBirthday} from '../../firebase/firebaseConfig'
// register user with email and password 
export const addBirthdayField = (user, form) =>  async (reminderDispatch)=>{
    reminderDispatch({
        type:REMINDER_LOADING,
        loading:true

    })
    try{
      const data = await addBirthday(user, form);
        // sort array 
        data.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          });
    // dispatch data returened 
    reminderDispatch({//this can be optional(firebase returns a complete set on Provider.js)
            type:REMINDER_SUCCESS,
            loading: false,
            payload:data,
            error:null,
        })
    }
    catch(error){
    //   setError('Error Signing up with email and password');
    reminderDispatch({
            type:REMINDER_ERROR,
            loading: false,
            post: null,
            payload: error.message
        })
    }
  };
// delete birthday collection action 
  export const deleteCard = (itemId, user) =>  async (reminderDispatch)=>{
      reminderDispatch({
          type:REMINDER_SPINNER,
          loading:true
      })
      try{
        let data = await deleteBirthday(itemId, user.uid)
        reminderDispatch({
            type:REMINDER_SUCCESS,
            loading:false,
            error: null,
            payload: data
        })
      }catch(error){
        reminderDispatch({
            type:REMINDER_ERROR,
            loading: false,
            // post: null,
            payload: error.message
        })
      }
  }
// edit birthday reminder 
  export const editCard = (itemId, user, form) =>  async (reminderDispatch)=>{
    reminderDispatch({
        type:REMINDER_SPINNER,
        loading:true
    })

    try{

        // call edit function in firebasec config 
      let data = await editBirthday(itemId, user.uid, form);
      reminderDispatch({
          type:REMINDER_SUCCESS,
          loading:false,
          error: null,
          payload: data
      })
    }catch(error){
      reminderDispatch({
          type:REMINDER_ERROR,
          loading: false,
          // post: null,
          payload: error.message
      })
    }
}

