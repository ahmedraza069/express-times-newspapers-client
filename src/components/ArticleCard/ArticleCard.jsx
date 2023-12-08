
import { Link } from "react-router-dom";

import { IoEyeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


const ArticleCard = ({ article, handleUpdateCount }) => {
 
  const {
    _id,
    title,
    image,
    publisher,
    tags,
    view,
    timeZone,
    area,
    userEmail,
    userImg,
    userName
  } = article;


  return (
    <div
      className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-lg"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/hyQsKRy/cool-background-6.png")',
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 ">
          <img
            alt="user_image"
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
            <span className="text-xs dark:text-gray-400">{timeZone}</span>
          </div>
        </div>
        <div>
          <p className="px-2 py-2 flex justify-center items-center bg-slate-300  text-xs font-semibold uppercase rounded-md text-black ">
            <p className="mr-1">
              <IoEyeSharp />
            </p>
            {view}
          </p>
        </div>
      </div>
      <p className="mb-3 border border-gray-500"></p>
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="flex flex-wrap pb-2 gap-2">
          {tags.map((tag, index) => (
            <p key={index} className="badge badge-outline">
              {tag}
            </p>
          ))}
        </div>
        <p className="mb-2 border border-gray-500"></p>
        <div className="flex justify-between py-2">
          <h2 className=" text-4xl font-bold">{publisher}</h2>
        </div>
        <h2 className="py-2 text-base flex  items-center text-black">
          <span className="mr-2">
            <FaLocationDot />
          </span>
          {area}
        </h2>
        <p className="text-xl font-semibold  text-black">{title}</p>
      </div>
      <button onClick={() => handleUpdateCount(_id)}>
        <Link to={`/all-articles/${_id}`}>
          <p
            className="px-4 py-4  text-normal font-semibold hero-overlay opacity-100 uppercase rounded-lg text-white"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
            }}
          >
            See Details
          </p>
        </Link>
      </button>
    </div>
  );
};

export default ArticleCard;
