import React ,{useState} from 'react'

export default function About() {
    const [Btn,setBtn]=useState("Enable dark mode")

 const [myStyle,setmyStyle]=useState({
    color : 'white',
        backgroundColor :'black'
    }
 )

 const toggleState=()=>
 {
    if(myStyle.color=== 'white')
    {
        setmyStyle(
        {
            color : 'black',
        backgroundColor :'white'
        }
        )
        setBtn("Enable dark mode")
    }
    else
    {
        setmyStyle(
            {
                color : 'white',
            backgroundColor :'black'
            }
            )
            setBtn("Enable light mode")

    }
 }

    
        
  return (

    <>
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
   
  </div>
    </div>
    
<div className="container"> <button className="btn btn-primary my-3" onClick={toggleState}>{Btn}</button>
</div>

</>
    
  )
}
