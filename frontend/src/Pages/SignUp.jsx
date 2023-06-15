import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/signup.css"

const SignUp = () => {
  return (
   <div className='cont'>
        <div className='background'>
            <img width={"100%"} src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        
        <div className='signup-page'>
            <div className='signup-detail'>
             <h1>Give your hand to make a change <br /> <span>CHARITY <span> HERO</span></span></h1>
             <img width={"100%"} src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80" alt="" />
             <h3>
                Create your account today and raise fund <br/>and bring the change in others life<br/> with the CharityHero support !
             </h3>
            </div>
            <div className='signup'>
                <h1>Charity<span>Hero</span>  <span> SignUp</span></h1>
                
                <br />
                <label >Username</label>
                <input type="text" placeholder='Enter your email'/>
                <br />
                <label >Password</label>
                <input type="password" placeholder='Password' />
                <br />
                <button>Sign Up</button>
                <span>Already have an account ? <Link className='log-btn' to='/login'>Login</Link> </span>

          </div>
         </div>
        </div>
  )
}

export default SignUp

// const DIV = styled.div`
 
// .background>img{
//     width: 100%;
//     height: 600px;
//     position: relative
// }
// .signup{
//    // border: 1px solid black;
//     width: 40%;
//     //background-color: whitesmoke;
//     background: rgba(34, 89, 97, 0.498);
//     border-radius: 10px;
//     height: 400px;
//     margin-top: 70px;
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//  }
// .signup-detail{
//     border: 1px solid black;
//     width: 48%;
//     border-radius: 40px 10px 10px 10px;
// }
// .signup-page{
//     position: absolute;
//     display: flex;
//     padding: 20px;
//    // border: 1px solid black;
//     width: 90%;
//     top: 7%;
//     left:5%;
//     justify-content: space-evenly;
//    // background-color : blue ;
//     background: rgba(147, 178, 191, 0.3);
//     border-radius : 90px 10px 100px 10px;
//     height: 600px;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
// }
// .signup>input{
// width: 80%;
// margin-top: 10px;
// margin-left: 10%;
// padding: 10px;
// border-radius: 20px;
// border: 0px solid black;
// }
// .signup>input:hover{
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
// }
// .signup>input:focus{
// border: 0px solid black;
// border-bottom: 3px solid rgb(30, 136, 229);
// outline: none;
// -webkit-transition: 0.2s;
// transition: 0.2s;
// }

// .signup>button{
// border-radius: 20px;
// background-color: #1E88E5;
// padding: 10px 20px;
// width: 80%;
// margin-top: 20px;
// margin-left: 10%;
// margin-bottom: 30px;
// }
// .signup>button:hover{
// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// background-color: #105b9d;
// color: #fefefe;
// }
// .signup>label{
// font-size: large;
// padding-left: 10%;
// }
// .signup>h1{
// color: rgb(30, 136, 229);
// font-size: 30px;
// padding-left: 20px;
// }
// .signup>h1>span{
// color: rgb(241, 246, 249);
// }
// .signup>span{
// padding-left: 10%;
// font-size: large;
// color: #fefefe;
// }
// .log-btn{
// color: #032f56; 
// text-decoration: underline;
// }

// .signup-detail{
// background: rgba(153, 217, 243, 0.3);
// padding: 10px;
// border: 0px solid red;
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 
// }
// .signup-detail>h1{
// color: rgb(54, 39, 39);
// font-size: 30px;
// padding-left: 20px;
// }
// .signup-detail>h1>span{
// color: rgb(20, 154, 232);
// }
// .signup-detail>h1>span>span{
// color: rgb(255, 255, 255);
// }
// .signup-detail>img{
// opacity: 80%;
// border-radius: 10px;
// margin-top: 10px;
// margin-bottom: 10px;
// }
// .signup-detail>h3{
// color: #fefefe;
// font-size: large;
// text-align: left;
// }
// `