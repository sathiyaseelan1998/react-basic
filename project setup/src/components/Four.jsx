import React from 'react'
// import PropTypes from 'prop-types'
const Four = ({name,age}) => {
  return (
    <div>
        <h2>{name} {age}</h2>
    </div>
  )
}

export default Four

// Four.PropTypes={
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number.isRequired
// }