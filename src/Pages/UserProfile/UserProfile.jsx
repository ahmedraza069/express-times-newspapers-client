import { useContext } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
           <Helmet>
        <title>Express Times | Profile</title>
      </Helmet>
            <PageTitle pageTitle={'Welcome To'} animateTitle={'My Profile'}></PageTitle>
            <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col bg-slate-400">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded-lg" src={user?.photoURL} alt=""  />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 flex justify-center items-center gap-2"><RiMapPinUserFill />{user?.displayName}</h1>
      <h1 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900 flex justify-center items-center gap-2"><MdEmail />
{user?.email}</h1>
      <p className="mb-8 leading-relaxed">I am a highly skilled and motivated full-stack developer with a passion for creating robust and efficient web applications. With a solid foundation in both front-end and back-end technologies, I bring a comprehensive approach to software development. My experience encompasses a range of projects, from designing responsive user interfaces to architecting scalable server-side solutions.</p>
      <div className="flex justify-center">
     <Link to={'/'}>   <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go Home</button></Link>
      </div>
    </div>
  </div>
</section>
            </div>
        </div>
    );
};

export default UserProfile;