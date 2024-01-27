import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'



const Signup = () => {

    const [user, setUser] = useState({
         name:"",
         email:"",
         password:"",
         confirmPassword:"",
    }) 
   
    const navigate = useNavigate();
    
  

        const handleInput = (e)=>{
               let name = e.target.name;
               let value = e.target.value;
               setUser({
                ...user,
                [name]:value, 
               })
        }

        const handleSubmit = async(e)=>{
              e.preventDefault();
              console.log(user)
             try {
              const response = await fetch(`http://localhost:5000/api/signup`,{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(user),
              })

    
          


              if(response.ok){
               const res_data = await response.json()
             console.log("res from server", res_data)
              localStorage.setItem('token', res_data.token)
             setUser({
                  name:"",
                  email:"",
                  password:"",
                  confirmPassword:"",
                 } )
                 navigate('/')
              } else{
          
              }
               console.log(response)
             } catch (error) {
              console.log("register", error)
             }
              
        }

  return (
    <div>
    <div className={styles.container}>
  <div className={styles.mainContainer}>
    <div className={styles.title}>QUIZZIE</div>
    <div className={styles.components}>
      <button className={styles.loginBtn}>
        <NavLink to='/' className={styles.loginText}>Login</NavLink>
      </button>
      <button className={styles.signupBtn}>
        <NavLink to='/signup' className={styles.signupText}>Sign Up</NavLink>
      </button>
    </div>
    <div >
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.name}>
          <label htmlFor="name" className={styles.nameText}>
            Name
          </label>
          <input
            required
            autoComplete='off'
            type="text"
            name="name"
            className={styles.nameInputBox}
            onChange={handleInput}
            
            value={user.name}
          />
        </div>



        <div className={styles.email}>
          <label htmlFor="email" className={styles.emailText}>
            Email
          </label>
          <input
             required
            autoComplete='off'
            type="email"
            name="email"
            
            className={styles.emailInputBox}
            onChange={handleInput}
            value={user.email}
          />
        </div>





        <div className={styles.password}>
          <label htmlFor="password" className={styles.passwordText}>
            Password
          </label>
          <input
              required
              autoComplete="off"
            type="password"
            name="password"
            className={styles.passwordInputBox}
            onChange={handleInput}
           
            value={user.password}
          />
        </div>
        <div className={styles.confirmPassword}>
          <label htmlFor="confirmPassword" className={styles.confirmPasswordText}>
            Confirm Password
          </label>
          <input
          required
          autoComplete="off"
            type="password"
            name="confirmPassword"
            className={styles.confirmPasswordInputBox}
            onChange={handleInput}
  
            value={user.confirmPassword}
          />
        </div>
        <button type="submit" 
        className={styles.submitBtn}>
          Sign Up
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup
