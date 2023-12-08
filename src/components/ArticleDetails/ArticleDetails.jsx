import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { IoEyeSharp } from "react-icons/io5";

const ArticleDetails = () => {
  const articleInfo = useLoaderData();
  const {
    title,
    image,
    publisher,
    tags,
    view,
    timeZone,
    area,
    // userEmail,
    userImg,
    userName,
    packageDescription,
  } = articleInfo;

  return (
    <div>
      <PageTitle pageTitle={"Article"} animateTitle={"Details"}></PageTitle>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={image}
            alt="product-image"
          />
          <div className="w-full h-full">
            <div
              className="flex overflow-hidden rounded-md  text-white"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
              }}
            >
              <div className="w-full p-8">
                <div className="flex space-x-4 ">
                  <img
                    alt=""
                    src={userImg}
                    className="object-cover w-12 h-12 rounded-full shadow"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                    >
                      {userName}
                    </a>
                    <span className="text-xs dark:text-gray-400">
                      {timeZone}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap py-4 gap-2">
                  {tags.map((tag, index) => (
                    <p key={index} className="badge badge-outline">
                      {tag}
                    </p>
                  ))}
                </div>
                <h1 className="text-2xl py-2 font-bold  text-white">
                  {publisher}
                </h1>
                <h1 className="text-xl pb-2 font-medium  text-white">
                  {title}
                </h1>
                <div className="flex items-center">
                  <h2 className=" text-base flex  items-center mr-16 text-white">
                    <span className="mr-2">
                      <FaLocationDot />
                    </span>
                    {area}
                  </h2>
                  <h1 className="text-normal flex justify-center items-center  text-white dark:text-gray-200 ">
                    <p className="mr-1">
                      <IoEyeSharp />
                    </p>
                    {view}
                  </h1>
                </div>
                <p className="py-4 font-medium  text-white text-normal dark:text-gray-400">
                  {packageDescription}
                </p>
                <Link to={'/all-articles'}>
                <button  className=" my-4 px-5 py-4 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 ">
                  Go Back
                </button></Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
