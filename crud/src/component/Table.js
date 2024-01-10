import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import Form from './Form'

function Table() {
   const [udata,setudata]=useState([])
   // const [email,setemail]=useState('')
   // const [password,setpassword]=useState('')
   const [userd,setuserd]=useState([])
   
   const navigate=useNavigate()
   useEffect(()=>{
      axios.get('http://localhost:4000/api/users').then((res)=>{
         console.log(res.data.data)
         setudata([...res.data.data])
      }).catch((err)=>{
         console.log(err)
      })
   },[udata])
   const handledelete=(id)=>{
      console.log(id)
      axios.delete(`http://localhost:4000/api/users/${id}`).then(()=>{
         alert('sucessfully deleted')
      }).catch((err)=>{
         alert(err.message)
      })
   }
   const handleudata=(eml)=>{
      if(eml){
         
         setuserd([...userd,eml])
      }
   }
   const handlesend=()=>{
      axios.post('http://localhost:4000/api/email/',{userd}).then(()=>{
         alert('mail send sucessfully')
      })
      .catch((err)=>{
         alert(err.message)
      })
   }
  return (
   <>
     {udata.length==0?navigate('/form'):
    <div style={{width:'97vw',display:'flex',justifyContent:'space-between',margin:'1rem',padding:'1rem'}}>
      <div style={{width:'60%',marginTop:'3rem',border:'solid 1px #C0C0C0'}}>
         <table style={{width:'100%'}}>
            <thead>
               <tr>
               <th>
                  select
               </th>
               <th>
                  id
               </th>
               <th>
                  Name
               </th>
               <th>
               Phone Number
               </th>
               <th>
               Email
               </th>
               <th>
               Hobbies
               </th>
               <th>
                  Edit
               </th>
               <th>
                  remove
               </th>
               </tr>
            </thead>
            <tbody>
               {udata.map((obj,i)=>(
                  <tr>
                  <td style={{textAlign:'center'}}><input type={'checkbox'} onChange={()=>handleudata(obj.email)}/></td>
                  <td style={{textAlign:'center'}}>{i+1}</td>
                  <td style={{textAlign:'center'}}>{obj.name}</td>
                  <td style={{textAlign:'center'}}>{obj.mob}</td>
                  <td style={{textAlign:'center'}}>{obj.email}</td>
                  <td style={{textAlign:'center'}}>{obj.hobbi}</td>
                  <td style={{textAlign:'center'}}><button onClick={()=>handledelete(obj._id)} style={{cursor:'pointer',backgroundColor:'red',color:'white',borderRadius:'5px',border:'none'}}>Delete</button></td>
               </tr>
               ))}
               
            </tbody>
         </table>
      </div>
      <div style={{width:'30%',marginTop:'3rem',display:'flex',flexDirection:'column',alignItems:'center',marginRight:'1rem',padding:'0.1rem'}}>
        <Link to='/form'><button style={{cursor:'pointer',height:'2rem',width:'5rem',borderRadius:'10px'}}>ADD user</button></Link>
        {/* <label>
                    <span style={{fontWeight:'bold'}}>Email</span><span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'2rem',
                        width:'96%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your Email for send mail'}
                        type='email'
                        value={email} onChange={(e)=>setemail(e.target.value)}
                    />
                </label>
                <label style={{marginTop:'1rem'}}>
                    <span style={{fontWeight:'bold'}}>Password</span><span style={{color:'red'}}>*</span><br/> 
                    <input style={{margin:'4px',fontSize:'0.95rem',height:'2rem',
                        width:'96%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                        border:'none',paddingLeft:'1rem'}}
                        placeholder={'Type your Email password'}
                        type='password'
                        value={password} onChange={(e)=>setpassword(e.target.value)}
                    />
                </label> */}
                <button onClick={handlesend} style={{height:'2rem',width:'5rem',borderRadius:'10px',marginTop:'1rem',cursor:'pointer'}}>Send mail</button>
      </div>
    </div>}
    </>
  )
}

export default Table