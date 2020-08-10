import React, {useState} from 'react'
import {UglyConsumer} from "./Components/UglyContext"
import AddUgly from "./Components/AddUgly"


function App() {
  const [editToggle, setEditToggle] = useState(false)

  return (
    <div>
      <div style={{backgroundColor: "black"}}>
        <h1 className= "header">Add a Ugly!</h1>
      </div>
      <AddUgly />
      <h1 className= "subHeader">List of the Ugliest Things Ever!</h1>
      <UglyConsumer>
        {context => (
            <div>
              { !editToggle ?
              <>
              {context.uglyThings.map(uglies => 
                <div className= "container">
                  <h1>{uglies.title}</h1>
                  <p>{uglies.description}</p>
                  <img src={uglies.imgUrl} alt= ""/>
                  <ul> 
                    {uglies.comments.map(comment => <li>{comment}</li>)}
                  </ul>
                  <button className= 'commentButton' onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Add Comment</button>
                </div>)}
              </>
              :
              <>
              {context.uglyThings.map(uglies => 
                <div>
                  <div className= "container">
                    <h1>{uglies.title}</h1>
                    <p>{uglies.description}</p>
                    <img src={uglies.imgUrl} alt= ""/>
                  </div>
                  <form className= "container">
                    <input 
                      type= "text"
                      value= {context.uglyComment}
                      placeholder= "Comment"
                      name= "uglyComment"
                      onChange= {context.handleChange}
                    />
                    <input 
                      type= "button"
                      value= "Add Comment"
                      onClick= {context.handleComment}
                    />
                  </form>
                  <div className= "container">
                    <button className= "close" onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                  </div>
                </div>)}
              </>}
            </div>
        )}
      </UglyConsumer>
      
    </div>
  );
}

export default App;
