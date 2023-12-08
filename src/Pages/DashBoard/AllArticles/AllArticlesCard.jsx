import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidObjectsHorizontalRight } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import { SiCmake } from "react-icons/si";

const AllArticlesCard = ({ article, handleDeleteArticle }) => {
  const { user } = useContext(AuthContext);

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
    userName,
  } = article;
  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y p-6 bg-gray-500 rounded-lg text-white">
        <li className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover dark:border-transparent rounded outline-none sm:w-64 sm:h-64 bg-gray-500"
              src={image}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
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
                        <span className="text-xs dark:text-gray-400">
                          {timeZone}
                        </span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <h3 className="text-3xl pt-2 font-semibold leadi sm:pr-8">
                    {publisher}
                  </h3>
                  <h3 className="text-lg py-2 font-semibold leadi sm:pr-8">
                    {title}
                  </h3>
                  <h2 className="text-base font-medium flex  items-center text-white">
                    <span className="mr-2">
                      <FaLocationDot />
                    </span>
                    {area}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="py-2 px-3 bg-gray-600 flex justify-center items-center   text-lg  font-semibold uppercase rounded-md text-white ">
                    <p className="mr-1">
                      <IoEyeSharp />
                    </p>
                    {view}
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x space-x-4">
                <button className="py-2 px-4 bg-gray-800 rounded-lg flex justify-center items-center gap-2">
                  <BiSolidObjectsHorizontalRight /> Aprove
                </button>
                <button className="py-2 px-4 bg-gray-800 rounded-lg flex justify-center items-center gap-2">
                  <ImCross /> Decline
                </button>
                <button
                  onClick={() => handleDeleteArticle(_id)}
                  className="py-2 px-4 bg-gray-800 rounded-lg flex justify-center items-center gap-2"
                >
                  <MdDeleteForever /> Delete
                </button>
                <button className="py-2 px-4 bg-gray-800 rounded-lg flex justify-center items-center gap-2">
                  <SiCmake /> Make Premium
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AllArticlesCard;
