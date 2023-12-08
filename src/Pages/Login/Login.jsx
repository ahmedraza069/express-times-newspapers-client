/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosUsers from "../../hooks/useAxiosUsers";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const axiosUsers = useAxiosUsers();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
  
    const { googleSignIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
  const from = location.state?.from?.pathname || '/'
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setLoginError('');
      if (!email || !password) {
        setLoginError('Email and password are required.');
        return;
      }
      
      if ((email, password)) {
        signIn(email, password)
          .then((res) => {
      
            console.log(res.user);
      
            toast.success('Login Succesfull')
            // navigate(location?.state ? location.state : "/");
            navigate(from, {replace: true})
          })
          .catch(error => {
            setLoginError('Incorrect username or password.')
            console.log(error);
            
          });
      }
    };
  
    const handleGoogleLogin = () => {
  
      googleSignIn()
        .then((res) => {
          const userInfo ={
            name: res.user?.displayName,
            email: res.user?.email,
            image: res.user?.photoURL
      }

      axiosUsers.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Success!", "Sign in Successfull.", "success");
        }
      })
          console.log(res.user);
      
          Swal.fire(
            'Success!',
            'Login Successfull.',
            'success'
          )
          
          // navigate(location?.state ? location.state : "/");
          navigate(from, {replace: true})
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/zX21py4/photo-1514064019862-23e2a332a6a6-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg)",
        }}
      >
         <Helmet>
        <title>Express Times | Login</title>
      </Helmet>
  
        <div className="hero-overlay bg-opacity-60"></div>
  
        <Toaster
    position="top-center"
    reverseOrder={false}
  />
        <div className="hero-content text-center text-neutral-content py-10">
          <div className="max-w-md">
            <div className="flex justify-center items-center text-white h-screen">
              <div className="w-full max-w-md p-8 space-y-3 bg-gray-800 rounded-lg">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="space-y-6">
                  <div className="space-y-1 text-start text-sm">
                    <label for="email" className="block dark:text-gray-400 text-start">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-md text-gray-800" required
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label for="password" className="block dark:text-gray-400 text-start">
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                    
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      className="w-full px-4 py-3 rounded-md text-gray-800" required
                    />
                    <p className="text-start text-sm">
                      {loginError}
                    </p>
                    <div className="flex justify-end text-xs dark:text-gray-400">
                      <a rel="noopener noreferrer" href="#">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div>
              <button
                    onClick={handleLogin}
                    type="submit"
                    name="register"
                    id="register"
                    className="btn bg-gray-800 w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg "
                  >
                   <input type="submit" value="Login" />
                  
                  </button>
                </div>
                </form>
                <div className="flex items-center py-3 space-x-1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                  <p className="px-3 text-sm dark:text-gray-400">
                    Login with social accounts
                  </p>
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                
  
                  <button onClick={handleGoogleLogin}
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg "
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                      </svg>
                      <span className="ml-4"> Log in with Google</span>
                    </div>
                  </button>
                </div>
                <p className="text-sm pt-2 text-center sm:px-6 dark:text-gray-400">
                  Don't have an account?
                  <Link
                    className="text-white underline font-semibold"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Toaster
    position="top-center"
    reverseOrder={true}
  />
      </div>
    );
};

export default Login;