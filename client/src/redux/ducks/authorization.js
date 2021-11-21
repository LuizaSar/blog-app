import axios from "axios";

const initialState = {
   user:JSON.parse(localStorage.getItem('user')) || null || {},
   loading:false,
   error:false,
   profilePic:'',
   updated:false
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
               error:false,
               loading:false,
               user:{},
            };
            case 'user/update/success':
            return {
               ...state,
               error:false,
               loading:false,
               user:action.payload,
               updated:true
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
            localStorage.setItem('user', JSON.stringify(response.data));
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


    export const updateUser =  (username, email, password, file, userId) => {
      const updatedUser = {
            username,
            email,
            password,
            userId,
      }
   return async (dispatch) => {
      dispatch({
         type:'user/update/start'
      })
      if (file) {
         const data =new FormData();
         const filename = Date.now() + file.name;
         data.append("name", filename);
         data.append("file", file);
         updatedUser.profilePic = filename;
         try {
           await axios.post("/upload", data);
         } catch (err) {}
      }
          axios.put("/users/" + userId, updatedUser)
         .then(response =>{
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({
               type:"user/update/success",
               payload:response.data
            })
         })
         .catch(error=>{
            dispatch({
               type:"user/update/failure",
               payload:error
            })
         })
   }}