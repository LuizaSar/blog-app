import axios from "axios";

const initialState = {
   username: localStorage.getItem("user") || null,
   user:{},
   loading:false,
   error:false,
   profilePic:'',
};

export default function authorization (state = initialState, action) {
   switch (action.type) {
      case 'login/start':
         return {
            ...state,
            loading:true
         };
      case 'login/success':
         return {
            ...state,
            username:action.payload.username,
            user:action.payload,
            loading:false,
            profilePic:action.payload.profilePic
         };
         case 'login/failure':
         return {
            ...state,
            error:true,
            loading:false,
         };
         case 'logout/success':
            return {
               ...state,
               username:null, 
               error:false,
               loading:false
            };
      default:
         return state;
   }
}

export const setAuth =  (username, password) => {
   return async (dispatch) => {
      dispatch({
         type:'login/start'
      })
       axios.post("/auth/login",{
          username,
          password,
       })
         .then(response =>{
            localStorage.setItem('user', response.data.username);
            dispatch({
               type:"login/success",
               payload:response.data
            })
         })
         .catch(error=>{
            dispatch({
               type:"login/failure",
               payload:error
            })
            
         }) 
   }}

   export const logout = () => {
      localStorage.removeItem('user');
      return {
        type: 'logout/success',
      };
    };
