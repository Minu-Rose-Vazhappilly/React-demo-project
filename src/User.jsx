function User({parentData1}){
    const showUser = (name)=>{
    alert(`Use is: ${name}`)
  }
    return(
        <>
        <h1>User Component</h1>
        <h2>Data from User Component: <span>{parentData1}</span></h2>
        <div className="text-center mt-5">
            <button onClick={()=>showUser(parentData1)} className="btn btn-primary">Show User Name</button>
        </div>
        </>
    )
}
export default User

