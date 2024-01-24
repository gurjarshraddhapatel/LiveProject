import React,{useState} from 'react'
import styles from './Login.module.css'
import { NavLink, useNavigate } from 'react-router-dom'


const Login = () => {

  const URL = "http://localhost:5000/api/login"
  const navigate = useNavigate();

  const[user, setUser] = useState({
     email:"",
     password:"",
  })
 
  const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
          ...user,
          [name]:value,

        })
  }
      
  const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
          const response = await fetch(URL,{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify(user)
          })

            console.log(response)
          if(response.ok){
            setUser({email:"", password:""})
          }
           navigate("/home")
      } catch (error) {
        alert("Invalid Credentials")
        console.log("Invalid Credentials")
      }
    
  }
 
  return (
    <div>
          <div className={styles.card}>
  <div className={styles.mainContainer}>
    <div className={styles.title}>QUIZZIE</div>
    <div className={styles.formStructure}>
      <button className={styles.container}>
      <NavLink to='/'>Log In</NavLink>
      </button>
      <button className={styles.container2}>
      <NavLink to='/signup'>Sign Up</NavLink>
      </button>
    </div>
    <div>
      <form
        onSubmit={handleSubmit}
        className={styles.signupForm}
 >       
        <div className={styles.emailInput}>
          <label htmlFor="email" className={styles.emailFont}>
            Email
          </label>
          <input
            value={user.email}
            type="email"
            name="email"
            required=""
            className={styles.email}
            onChange={handleInput}
          />
        </div>
        <div className={styles.passwordInput}>
          <label htmlFor="password" className={styles.passwordText}>
            Password
          </label>
          <input
          value={user.password}
            type="password"
            name="password"
            required=""
            className={styles.passwordBtn}
           onChange={handleInput}
          />
        </div>
        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
