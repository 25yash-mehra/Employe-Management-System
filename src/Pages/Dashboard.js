import React from 'react'
import Header from '../components/Header'
import styles from "../style/Dashboard.module.css"
function Dashboard() {
  return (
<>
<div style={{display:"flex"}}>
<Header/>
     <div className={styles.Boxcontainer}>
      <div className={styles.box1}>
        <i class="fa-regular fa-user" style={{fontSize:"45px", marginLeft:"30px", marginTop:"10px"}}></i>
        <h3>Total employee</h3>   
      </div>
      {/* --------------------------------2nd-----------------*/}
      <div className={styles.box2}>
        <i class="fa-solid fa-indian-rupee-sign" style={{fontSize:"45px", marginLeft:"30px", marginTop:"10px"}}></i>
        <h3>Total Salary</h3>   
      </div>
      </div>
      {/* <i class="fa-solid fa-indian-rupee-sign"></i> */}
</div>
</>
  )
}

export default Dashboard