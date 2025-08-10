import myStyles from './style.module.css'
import Company from './company'
function Employee({parentData,isEmp}){
    console.log(isEmp);
    //object destructure : used to access object value  without using dot operator
    //const/let/var {key1,key2,...}=object
    //
    
    const getName = (event)=>{
        console.log(event.target.value);
        
    }
    return(
        <>
        <h2 className={myStyles.headingStyle}>Employee Component</h2>
        { isEmp && <h3>Data from Parent:<span className='text-danger'>{parentData}</span></h3> }
        <p className={myStyles.paraStyle} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet doloremque a ratione officia, quibusdam consectetur veniam et facere quaerat neque quasi. Esse minima distinctio soluta iure voluptas rerum quas!
        Saepe quaerat placeat facilis. Excepturi nobis voluptas harum recusandae perspiciatis reprehenderit voluptates iste molestias nesciunt ratione, debitis in porro velit pariatur hic sit earum facilis. Culpa saepe cupiditate tempora molestias!
        Quisquam ipsum, veniam repellat sed est nemo deserunt quia error architecto at neque id, magni praesentium nihil doloribus corporis vitae quo nesciunt ab eveniet eius! Unde quisquam totam mollitia culpa!</p>
        <div className='mt-5'><input onChange={(e)=>getName(e)} type="text" className='form-control w-50' placeholder='Input Text' /></div>
        <Company/>
        </>
        
    )
}
export default Employee