import { useContext } from "react";
import useArticle from "../../hooks/useArticle";
import { AuthContext } from "../../providers/AuthProvider";
import PageTitle from "../../Shared/PageTitle/PageTitle";

import { MdDeleteForever } from "react-icons/md";

import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyArticle = () => {
  const [articles, refetch] = useArticle();
  const { user } = useContext(AuthContext);

  const userArticles = articles.filter(
    (article) => article.userEmail === user?.email
  );

  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allArticles/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  
  return (
    <div>
       <Helmet>
        <title>Express Times | My Article</title>
      </Helmet>
      <PageTitle pageTitle={"My"} animateTitle={"Articles"}></PageTitle>
      <h3 className="text-4xl text-center font-bold pt-8 pb-6">
        Total Posts : {userArticles.length}
      </h3>
      <div className="grid grid-cols-1 gap-7 p-8">
        <div>
          <div className="overflow-x-auto w-full bg-gray-800 rounded-t-md">
            <table className="table table-zebra">
              {/* head */}
              <thead className="text-center text-base  text-white">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Action</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* row 1 */}
                {userArticles.map((article, index) => (
                  <tr className="bg-gray-400" key={article._id}>
                    <th>{index + 1}</th>
                    <td>
                      {" "}
                      <div className="flex items-center justify-center  gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={article.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold w-64">{article.title}</div>
                        </div>
                      </div>
                    </td>

                    <td className="font-medium">Pending</td>
                    <td className="">
                      {" "}
                      <div className="flex justify-center items-center">
                      <Link to={`/update-article/${article._id}`}>
                      <button className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center">
                          <CiEdit />
                        </button>
                      </Link>
                      </div>
                    </td>

                    <td>
                      <div className="flex justify-center items-center">
                        <button onClick={() => handleDeleteArticle(article._id)} className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center">
                          <MdDeleteForever />
                        </button>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="flex justify-center items-center">
                        <Link to={`/my-articles/${article._id}`}>
                          <button  className="py-2 px-4 text-sm text-white bg-gray-800 rounded-lg flex justify-center items-center">
                            See Details
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticle;
