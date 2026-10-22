import { useContext } from "react"
import { Emp } from "./Content"

const Three = () => {
  return (
    <div>
        {/* <h2>THREE - {c}</h2> */}
        <Emp.Consumer>
            {
                ({user})=>{
                    return(
                    <h2>THREE - {user.city}</h2>
                    )
                }
            }
        </Emp.Consumer>
    </div>
  )
}

export default Three