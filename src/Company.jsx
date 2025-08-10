import React from 'react'

function Company() {
    const empArray = [
        {empName:"Minu",empAge:23,empDesg:"Developer"},
        {empName:"Theertha",empAge:21,empDesg:"HR"},
        {empName:"Harip",empAge:24,empDesg:"Tester"},
        {empName:"Mariya",empAge:23,empDesg:"Manager"},
        {empName:"Dilsha",empAge:24,empDesg:"Developer"}
    ]
  return (
    <>
    <h1>Inside Company Component</h1>
    <h2>Employee List</h2>
    <hr />
    <table className='table m-5'>
        <thead>
            <tr>
                <th>No</th>
                <th>EmpName</th>
                <th>EmpAge</th>
                <th>EmpDesig</th>
            </tr>
        </thead>
        <tbody>
            {
                empArray.map((emp,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empAge}</td>
                        <td>{emp.empDesg}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default Company