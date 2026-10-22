import React, { useState } from 'react'

const NextObj = () => {
    let[user,setUser]=useState({
        name:"Virat",
        age:37,
        address:{
            place:"Sengai",
            city:"Trichy"
        },
        contect:{
            phone:"9090908787",
            pin:{
                code:"621002"
            }
        }
    })
//    let{address}=user;
//     console.log("Check ==>",address);
    
    let handleData=(e)=>{
        let {name,value}=e.target;
        let nested=name.split('.')
        //console.log(nested);
        
      // if(nested.length>1){
          if(name.includes('address.')){
          name=nested[1];
          setUser({...user,
            address:{
            ...user.address,
            [name]:value
            }
          })
       }
       else if(name.includes('contect.')){
            console.log(nested);
            if(name.includes('contect.pin.')){
                 console.log("==>",nested);
                 name=nested[2];
                setUser({...user,
                    contect:{
                        ...user.contect,
                        pin:{
                            ...user.contect.pin,
                            [name]:value
                        }
                    }
                    
                })
               
                
            }
            else{
                    name=nested[1]
                setUser({
                    ...user,
                    contect:{
                        ...user.contect,
                        [name]:value
                    }
                }
                )
            }
       }
       else{
            setUser({
                ...user,
                [name]:value
            })
       }
        
        
        
    }
     let handleDatas=(e)=>{
        let {name,value}=e.target;
            let {address}=user
      
        
    }
     let {...contect}=user;
                console.log(user.contect.pin);
      //console.log(user);
  return (
    <div>
        <form >
            <input type="text" name='name' 
            value={user.name} onChange={handleData} />
            <input type="text" name='age' 
            value={user.age} onChange={handleData} />
            <input type="text" name='address.place' 
            value={user.address.place} onChange={handleData} />
            <input type="text" name='address.city' 
            value={user.address.city} onChange={handleData} />
             <input type="text" name='contect.phone' 
            value={user.contect.phone} onChange={handleData} />
            <input type="text" name='contect.pin.code' 
            value={user.contect.pin.code} onChange={handleData} />
        
        </form>
        <h3>{user.name} - {user.age}</h3>
        <h3>{user.address.place} - {user.address.city}</h3>
        <pre>{JSON.stringify(user,null,1)}</pre>
    </div>
  )
}

export default NextObj