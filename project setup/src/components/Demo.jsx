import React from 'react'
import Sample from './Sample'

const Demo = (props) => {
    console.log(props.dept);
    let user={name:"rohit",
                age:37,
                place:"trichy"
    }
    
  return (
    <div>
        demo -{props.dept}
        <Sample u={user}/>
    </div>

    
  )
}

export default Demo