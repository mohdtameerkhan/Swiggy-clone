import React, { useState, useEffect } from 'react';

// export default function Practice(){
//     const   [count, setCount] = useState(0);

//     useEffect(()=>{
//         alert("useEffect called")
//     },[count] )
//     return(
//         <>
//         <p>Count : {count}</p>
//         <button onClick={()=>setCount(count + 1)}>increent</button>
//         </>
//     )
    

// }


function Practice() {
  const [count, setCount] = useState(0);

  // Run after every render


  // Run once + cleanup on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("4. Timer running");
    }, 4000);

    return () => {
      clearInterval(timer);
      console.log("4. Timer cleaned up");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

export default Practice;