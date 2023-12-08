import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosUsers from "../../hooks/useAxiosUsers";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const axiosUsers = useAxiosUsers();

  const navigate = useNavigate();
  const { signUp, updateUserInfo, googleSignIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [registerError, setRegisterError] = useState("");

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

        navigate(location?.state ? location.state : "/");
        Swal.fire("Success!", "Sign in Successfull.", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError("");

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      setRegisterError(
        "Minimum six characters, at least one letter, one number and one special character"
      );
    } else {
      setRegisterError("");
      signUp(email, password)
        .then((res) => {
          navigate("/");
          updateUserInfo(displayName, photoURL).then(()=>{
            const userInfo = {
              name: displayName,
              email: email,
              image: photoURL,
            }

            axiosUsers.post('/users', userInfo)
            .then(res => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire("Success!", "Sign in Successfull.", "success");
              }
            })
            
          }).catch();
        
          console.log(res.user);
        })
        .catch((error) => {
          setRegisterError(error.message);
        });
    }
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/X87W44w/premium-photo-1700782893131-1f17b56098d0-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg)",
      }}
    >
       <Helmet>
        <title>Express Times | Register</title>
      </Helmet>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center py-28">
        <div className="max-w-md">
          <div className="flex justify-center items-center text-white h-screen">
            <div className="w-full max-w-md px-8 py-6  space-y-2 shadow-lg bg-gray-800 rounded-lg">
              <h1 className="text-2xl font-bold text-center">Register</h1>
              <form className="space-y-4">
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-400 text-start">
                    Name
                  </label>
                  <input
                    onChange={(e) => setDisplayName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    className="w-full text-gray-800 px-4 py-3 rounded-md "
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-400 text-start">
                    Photo url
                  </label>
                  <input
                    onChange={(e) => setPhotoURL(e.target.value)}
                    type="rul"
                    name="photoURL"
                    id="photoURL"
                    placeholder="Photo url"
                    className="w-full text-gray-800 px-4 py-3 rounded-md "
                  />
                </div>
                <div className="space-y-1  text-sm">
                  <label className="block dark:text-gray-400 text-start">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full text-gray-800 px-4 py-3 rounded-md"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-400 text-start">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="w-full text-gray-800 px-4 py-3 rounded-md "
                    required
                  />
                  <p className="py-1 text-sm text-start">
                    {registerError && registerError}
                  </p>
                  <div className="flex justify-end text-xs dark:text-gray-400">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <p>
                    <small className="text-red-400"></small>
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleRegister}
                    type="submit"
                    name="register"
                    id="register"
                    className="btn bg-gray-800 w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg "
                  >
                    <input type="submit" value="Register" />
                  </button>
                </div>
              </form>
              <div className="flex items-center py-3">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-sm ">
                  Register in with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 "></div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleGoogleLogin}
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
                    <span className="ml-4"> Sign in with Google</span>
                  </div>
                </button>
              </div>
              <p className="text-sm pt-2 text-center  sm:px-6 dark:text-gray-400">
                Alerady have an account?
                <Link
                  className="text-white text-normal underline font-semibold"
                  to={"/login"}
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
