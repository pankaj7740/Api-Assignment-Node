interface product {
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string
}

export const products : product[]=[{
    id:1,
    title:"spotify",
    price:29.7,
    category:"multimedia",
    description:"best application to listen music",
    image:"./images/main.jpg" 
},
{
    id:2,
    title:"Whatsapp",
    price:29.7,
    category:"Chat Application",
    description:"Optimized application for chatting",
    image:"./images/main.jpg" 

},
{
    id:3,
    title:"instagram",
    price:2467,
    category:"social media Application",
    description:"Optimized application for using social media",
    image:"./images/main.jpg" 
}
]

export default {products};