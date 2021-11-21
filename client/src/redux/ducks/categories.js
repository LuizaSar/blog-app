import axios from "axios";

const initialState = {
   items: [],
   loading:false
};

export default function categories (state = initialState, action) {
   switch (action.type) {
      case 'categories/load/start':
         return {
            ...state,
            loading:true
         };
      case 'categories/load/success':
         return {
            ...state,
            items:action.payload,
            loading:false
         };
      default:
         return state;
   }
}

export const fetchCategories =  () => {
   return async (dispatch) => {
      dispatch({
         type:'categories/load/start'
      })
       axios.get("/categories")
         .then(response =>{
            dispatch({
               type:"categories/load/success",
               payload:response.data
            })
         })
         .catch(error=>{
            dispatch({
               type:"categories/load/failure",
               payload:error.message
            })
         }) 
   }}
