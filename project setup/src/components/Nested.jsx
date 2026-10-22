import React, { useState } from 'react'

const Nested = () => {
    let[user,setUser]=useState({
            name:"David",
           address:{
                city:"Trichy",
                place:"Thuraiyur",
                pincode:{
                    code:621002,
                    zip:121,
                    contect:{
                        phone:1234567890
                    }
                }
           }
    })
    let handleData=(e)=>{
            let{name,value}=e.target;
            console.log(name);
            let nested=name.split('.');
            console.log(nested);

            if(name.includes('address.pincode.contect')){
                name=nested[nested.length-1];
                    console.log("==>",name);
                    
                    setUser({...user,
                        address:{
                            ...user.address,
                            pincode:{
                                ...user.address.pincode,
                                contect:{
                                    ...user.address.pincode.contect,
                                    [name]:value
                                }
                            }
                        }

                    })
            }
            
                else if(name.includes('address.pincode')){
                    name=nested[nested.length-1];
                    console.log("==>",name);
                    
                    setUser({...user,
                        address:{
                            ...user.address,
                            pincode:{
                                ...user.address.pincode,
                                [name]:value
                            }
                        }

                    })
            }
            else if(name.includes('address.')){
                name=nested[nested.length-1];
                 console.log("==>",name);
                setUser({...user,
                    address:{
                        ...user.address,
                        [name]:value
                    }
                })

           }
           
           
            else {
                console.log("==>",name);
                setUser({...user,
                    [name]:value
                })
            }
            
    }
  return (
    <div>
        <input type="text" name="name" 
        value={user.name} 
        onChange={handleData} />
        <input type="text" name="address.city" 
        value={user.address.city} 
        onChange={handleData} />
        <input type="text" name="address.place" 
        value={user.address.place} 
        onChange={handleData} />
        <input type="text" name="address.pincode.code" 
        value={user.address.pincode.code} 
        onChange={handleData} />
        <input type="text" name="address.pincode.zip" 
        value={user.address.pincode.zip} 
        onChange={handleData} />
        <input type="text" name="address.pincode.contect.phone" 
        value={user.address.pincode.contect.phone} 
        onChange={handleData} />
        <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default Nested