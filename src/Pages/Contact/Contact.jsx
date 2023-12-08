/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const Contact = () => {
    const iframeStyle = {
        filter: "grayscale(1) contrast(1.2) opacity(0.4)",
      };
      const {user} = useContext(AuthContext)
    return (
        <div>
           <Helmet>
        <title>Express Times | Contacts</title>
      </Helmet>
        <div className="py-8">
           <div
             className="hero rounded-lg"
             style={{
               backgroundImage:
                 "url(https://i.ibb.co/XWZ6GMx/cool-background-5.png)",
             }}
           >
             <div className="hero-overlay bg-opacity-60 py-16 rounded-lg"></div>
             <div className="hero-content text-center text-neutral-content rounded-lg py-16">
               <div className="max-w-4xl">
                 <h1 className="mb-5 text-5xl font-bold">
                 <Typewriter
               words={["Reach out for inquiries and support. We're here to help."]}
               loop={true}
               cursor={true}
               cursorStyle="_"
               delaySpeed={1000}
             />
                 </h1>
              
               </div>
             </div>
           </div>
         </div>
     <div className="text-gray-600 body-font relative">
       <div
         data-aos="fade-up"
         data-aos-duration="3000"
         className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
       >
         <div
           data-aos="fade-down"
           data-aos-duration="3000"
           className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-8  flex items-end justify-start relative"
         >
           <iframe
             width="100%"
             height="100%"
             className="absolute inset-0"
             title="map"
             src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
             style={iframeStyle}
           ></iframe>
           <div className="bg-white relative flex flex-wrap lg:pr-8 py-6 rounded shadow-md">
             <div className="lg:w-1/2 px-6">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 ADDRESS
               </h2>
               <p className="mt-1">Gazipur, Dhaka, Bangladesh</p>
               <p className="mt-1 text-sm">
                 Get in Touch with Us for Questions, Support, or Collaborations.
                 We're Here to Hear from You and Assist You!
               </p>
             </div>
             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 EMAIL
               </h2>
               <a className="text-indigo-500 text-sm leading-relaxed">
                 {user?.email}
               </a>
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                 PHONE
               </h2>
               <p className="leading-relaxed">+880 1797277740</p>
             </div>
           </div>
         </div>
         <div className="p-4 rounded-lg text-white flex flex-col md:ml-auto flex-1 md:py-8 mt-8 md:mt-0" style={{ backgroundImage: 'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")' }}>
           <form
             className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
           >
             <label className="block">
               <span className="mb-1">Full name</span>
               <input
                 type="text"
                 placeholder="Your name"
                 className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Email address</span>
               <input
                 type="email"
                 placeholder="leroy@jenkins.com"
                 className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Message</span>
               <textarea
                 rows="3"
                 className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
               ></textarea>
             </label>
             <button
               type="button"
               className="self-center bg-white text-black font-medium px-8 py-3 text-lg rounded"
             >
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   </div>
    );
};

export default Contact;