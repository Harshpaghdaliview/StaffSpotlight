import React from 'react'
import { ClipLoader } from 'react-spinners'
 
const spinner = () => 
{
  const override = {
  display: "flex",
  margin: "0 auto",
  position: "absolute",
  height: "100px",
  width: "100px",
  top: "50%",
  left: "50%",
} 
  return (
    <div> 
    
    <ClipLoader
    loading={loading}
    cssOverride={override}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  
  

</div>
  )
}

export default spinner