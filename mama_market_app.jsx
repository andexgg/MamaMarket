import React,{useState} from 'react';

const FREE_LIMIT=2500;
const products=[
 {id:1,name:'Organic Honey',price:350,img:'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'},
 {id:2,name:'Ethiopian Coffee',price:420,img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93'},
 {id:3,name:'Shea Butter',price:180,img:'https://images.unsplash.com/photo-1585238342028-4bbc2f6c5f9f'},
 {id:4,name:'Spices Pack',price:260,img:'https://images.unsplash.com/photo-1587049352858-63b1e63a7e32'}
];

export default function MamaMarketApp(){
 const [cart,setCart]=useState([]);
 const [open,setOpen]=useState(false);
 const addToCart=p=>{
  setCart(prev=>{
   const found=prev.find(i=>i.id===p.id);
   if(found) return prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i);
   return [...prev,{...p,qty:1}];
  });
  setOpen(true);
 };
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const remaining=Math.max(0,FREE_LIMIT-subtotal);
 return(
 <div className='p-6 font-sans'>
  <h1 className='text-3xl font-bold mb-2'>Mama Market</h1>
  <p className='mb-6 text-green-700 font-semibold'>Orders totaling $2,500 or more are delivered free to your door anywhere in the U.S.</p>
  <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
   {products.map(p=>
    <div key={p.id} className='border rounded-2xl shadow p-3'>
     <img src={p.img} className='h-40 w-full object-cover rounded-xl'/>
     <h3 className='font-bold mt-2'>{p.name}</h3>
     <p>${p.price}</p>
     <details className='text-sm my-1'><summary>Read more</summary>High quality {p.name} sourced naturally.</details>
     <button onClick={()=>addToCart(p)} className='bg-black text-white w-full rounded-xl p-2 mt-2'>Add to cart</button>
    </div>)}
  </div>
  <button onClick={()=>setOpen(true)} className='fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow'>Cart ({cart.length})</button>
  {open&&<div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
   <div className='bg-white p-6 rounded-2xl w-96'>
    <h2 className='text-xl font-bold mb-2'>Your Cart</h2>
    {cart.map(i=><div key={i.id} className='flex justify-between'><span>{i.name} x {i.qty}</span><span>${i.price*i.qty}</span></div>)}
    <hr className='my-2'/>
    <p className='font-semibold'>Subtotal: ${subtotal.toFixed(2)}</p>
    {subtotal>=FREE_LIMIT?
      <p className='text-green-600 font-bold mt-2'>Congratulations! Your orders are eligible for free delivery.</p>:
      <p className='text-red-600 mt-2'>Add ${remaining.toFixed(2)} more to get free shipping to your address.</p>}
    <button onClick={()=>setOpen(false)} className='mt-4 bg-gray-800 text-white w-full p-2 rounded-xl'>Close</button>
   </div>
  </div>}
 </div>);
}
