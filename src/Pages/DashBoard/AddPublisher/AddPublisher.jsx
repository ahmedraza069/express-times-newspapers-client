import { useForm } from "react-hook-form";
import useAxiosUsers from "../../../hooks/useAxiosUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPublisher = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosUsers = useAxiosUsers();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    try {
      console.log(data);

      // Upload image to the image hosting API
      const imageFile = { image: data.image[0] };
      const imageRes = await axiosUsers.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(imageRes.data);

      if (imageRes.data.success) {
        // If image upload is successful, proceed to create a publisher
        const publisherInfo = {
          name: data.name,
          image: imageRes.data.data.display_url,
        };

        const publisherRes = await axiosSecure.post(
          "/publisher",
          publisherInfo
        );

        console.log(publisherRes.data);

        if (publisherRes.data.insertedId) {
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Publisher Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          
        } else {
          console.log("Failed to insert publisher");
        }
      } else {
        console.log("Image upload failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <h3 className="font-bold text-4xl text-center bg-gray-600 py-7">
        Add Publisher
      </h3>
      <div className="flex justify-center items-center bg-slate-500 h-[500px] py-16 ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Publisher Name</span>
              </div>
              <input
                {...register("name")}
                type="text"
                required
                placeholder="Type here"
                className="input input-bordered text-black w-full max-w-xs"
              />
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">
                    Pick Publisher Image
                  </span>
                </div>
                <input
                  {...register("image")}
                  type="file"
                  required
                  className="file-input text-black file-input-bordered w-full max-w-xs"
                />
              </label>
            </label>

            <input
              className="flex justify-center items-center mt-3 w-full bg-gray-900 text-white py-3 rounded-md"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPublisher;
