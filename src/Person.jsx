import React from 'react'
import useFetch from './useFetch'

function Person() {
    const allUsers = useFetch("https://jsonplaceholder.typicode.com/users")
    console.log(allUsers);
    
  return (
    <div>Person
        <h1 className='text-center'>User's List</h1>
        <table className='table m-1'>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>email</th>
                <th>Phone</th>
                <th>website</th>
            </tr>
        </thead>
        <tbody>
            {
                allUsers?.length>0 && 
                allUsers.map((user,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}

export default Person