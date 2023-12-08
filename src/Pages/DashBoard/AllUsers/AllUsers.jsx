import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUserSecret } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUpdateUser = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      refetch();
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Now You Are Admin",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
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
      <h3 className="text-4xl text-center font-bold pt-8 pb-6">
        Total User : {users.length}
      </h3>
      <div>
        <div className="overflow-x-auto w-full bg-gray-800 rounded-t-md">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-center text-base  text-white">
              <tr>
                <th></th>

                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              {users.map((user, index) => (
                <tr className="bg-gray-400" key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    {" "}
                    <div className="flex items-center justify-center  gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>

                  <td className="font-medium">{user?.email}</td>
                  <td className="">
                    {" "}
                    <div className="flex justify-center items-center">
                      {user.role === "admin" ? (
                        <button
                          onClick={() => handleUpdateUser(user)}
                          className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center"
                        >
                          <FaUserSecret />
                        </button>
                      ) : (
                        <button  onClick={() => handleUpdateUser(user)} className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center">
                          <FaUserCircle />
                        </button>
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="py-2 px-4 text-2xl text-white bg-gray-800 rounded-lg flex justify-center items-center"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
