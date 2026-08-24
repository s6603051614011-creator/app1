import React,{ useEffect,useState } from 'react'

function Effect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Jack Wick')

    useEffect(() => {
        document.title = `You clicked ${count} times`
},[count,name])

    return (
        <center>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setName('JohnWick')}>Change Name</button>
        </center>
    )
}


export default Effect