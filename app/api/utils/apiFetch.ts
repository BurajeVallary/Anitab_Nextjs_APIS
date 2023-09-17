import { ACCESS_TOKEN, BASE_URL } from "@/app/config";

//CRUDE method to use on the end point
//if posting sth use PUT
// interface apiFetchProps{
//     request :String,
//     path:String,
//     body?:String
// }
// export async function apiFetch () {
//     try{
//         const response = await fetch(`${BASE_URL}${apiProps.path}`,{
//             method:apiProps.request ??'GET',
//             headers: {
//                 'Authorization': `Bearer ${ACCESS_TOKEN}`
//             }
//         })
//         const result = await response.json();
//         return new Response(JSON.stringify(result),{
//             status: 200,
//             statusText:'success'
//         })
//     }
    
// }

// export  async function GET(){
//     try{
//         const response = await fetch(`${BASE_URL}/3/movie/popular`,{
//             method:'GET',
//             headers: {
//                 'Authorization': `Bearer ${ACCESS_TOKEN}`
//             }
//         })
//         const result = await response.json();
//         return new Response(JSON.stringify(result),{
//             status: 200,
//             statusText:'success'
//         })
//     }
//     catch(error:any){
//     return new Response(error.message, {
//         status:500,
//         statusText:'error'
//     })
//     }
// }
