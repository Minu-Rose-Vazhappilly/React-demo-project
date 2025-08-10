import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    },[count])
  return (
    <div className='m-5 border rounded p-5' style={{display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <h1>Counter Component</h1>
            <h1 style={{fontSize:"100px"}}>{count}</h1>
            <div className='mt-5'>
                <button onClick = {()=>setCount(count+1)} className='btn btn-success'>Increment</button>
                <button onClick = {()=>setCount(count-1)} className='btn btn-warning ms-2'>Decrement</button>
                <button onClick = {()=>setCount(0)} className='btn btn-primary ms-2'>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter