import axios from "axios";

const initialState = {
   username: "",
   password:"",
   email:"",
   loading:false,
   error:false,
};

export default function registration (state = initialState, action) {
   switch (action.type) {
      case 'registration/start':
         return {
            ...state,
            loading:true
         };
      case 'registration/success':
         return {
            ...state,
            username:action.payload.username,
            email:action.payload.email,
            password:action.payload.password,
            loading:false
         };
         case 'registration/failure':
         return {
            ...state,
            error:true,
            loading:false
         };
      default:
         return state;
   }
}

export const register =  (username, password, email) => {
   return async (dispatch) => {
      dispatch({
         type:'registration/start'
      })
       axios.post("/auth/register",{
          username,
          password,
          email
       })
         .then(response =>{
            dispatch({
               type:"registration/success",
               payload:response.data
            })
         })
          
         .catch(error=>{
            dispatch({
               type:"registration/failure",
               payload:error
            })
         }) 
   }}
