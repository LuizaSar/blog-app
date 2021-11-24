import axios from "axios";

const initialState = {
   items: [],
   item:{},
   loading:false,
   file:null,
   search:''
};

export default function posts (state = initialState, action) {
   switch (action.type) {
      case 'posts/load/start':
         return {
            ...state,
            loading:true
         };
      case 'posts/load/success':
         return {
            ...state,
            items:action.payload,
            loading:false
         };
         case 'post/load/start':
            return {
               ...state,
               loading:true
            };
         case 'post/load/success':
         return {
            ...state,
            item:action.payload,
            loading:false
         };
         case 'posts/search/set':
            return {
              ...state,
              search: action.payload,
            };
      default:
         return state;
   }
}

export const fetchPosts =  (search) => {
   return async (dispatch) => {
      dispatch({
         type:'posts/load/start'
      })
       axios.get("/posts" + search)
         .then(response =>{
            dispatch({
               type:"posts/load/success",
               payload:response.data
            })
         })
          
         .catch(error=>{
            dispatch({
               type:"posts/load/failure",
               payload:error.message
            })
         }) 
   }}


export const fetchPost =  (path) => {
   return async (dispatch) => {
      dispatch({
         type:'post/load/start'
      })
       axios.get("/posts/" + path)
         .then(response =>{
            dispatch({
               type:"post/load/success",
               payload:response.data
            })
         })
          
         .catch(error=>{
            dispatch({
               type:"post/load/failure",
               payload:error.message
            })
         }) 
   }}

   export const submitPost =  (username, title, desc, file, categories) => {
         const newPost = {
               username,
               title,
               desc,
               categories
         }
      return async (dispatch) => {
         dispatch({
            type:'post/submit/start'
         })
         if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await axios.post("/upload", data);
            } catch (err) {}
         }
             axios.post("/posts",newPost)
            .then(response =>{
               dispatch({
                  type:"post/submit/success",
                  payload:response.data
               })
               window.location.replace("/post/" + response.data._id);
            })
            .catch(error=>{
               dispatch({
                  type:"post/submit/failure",
                  payload:error
               })
            })
      }}

      export const deletePost =  (post, username) => {
         return async (dispatch) => {
            dispatch({
               type:'post/delete/start'
            })
             axios.delete("/posts/" + post._id, {
                data:{username:username}
             })
               .then(response =>{
                  dispatch({
                     type:"post/delete/success",
                     payload:response.data
                  })
                  window.location.replace("/")
               })
               .catch(error=>{
                  dispatch({
                     type:"post/delete/failure",
                     payload:error.message
                  })
               }) 
         }}
         
         export const updatePost =  (title, desc, username, post) => {
         return async (dispatch) => {
            dispatch({
               type:'post/update/start'
            })
                axios.put("/posts/" + post._id,{
                   username:username,
                   title:title,
                   desc:desc
                })
               .then(response =>{
                  dispatch({
                     type:"post/update/success",
                     payload:response.data
                  })
                  window.location.reload();
               })
               .catch(error=>{
                  dispatch({
                     type:"post/update/failure",
                     payload:error
                  })
               })
         }}

         export function setSearchPosts(text) {
            return {
              type: 'posts/search/set',
              payload: text,
            };
          }