import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import moment from "moment";
// import { Select } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure, { axiosSecure } from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import makeAnimated from "react-select/animated";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// const animatedComponents = makeAnimated();

// const tags = [
//   "Breaking News",
//   "Headlines",
//   "World News",
//   "Local News",
//   "Politics",
//   "Economics",
//   "Business",
//   "Finance",
//   "Stock Market",
//   "Technology",
//   "Science",
//   "Health",
//   "Environment",
//   "Climate Change",
//   "Education",
//   "Opinion",
//   "Editorial",
//   "Analysis",
//   "Features",
//   "Investigative Journalism",
//   "Interviews",
//   "Sports",
//   "Entertainment",
//   "Culture",
//   "Arts",
//   "Travel",
//   "Lifestyle",
//   "Food",
//   "Fashion",
//   "Trends",
//   "Celebrities",
//   "Crime",
//   "Law",
//   "Justice",
//   "Technology Trends",
//   "Innovation",
//   "Startups",
//   "Social Media",
//   "Cybersecurity",
//   "Data Privacy",
//   "Automotive",
//   "Aviation",
//   "Space Exploration",
//   "Military",
//   "Human Rights",
//   "Diversity",
//   "Inequality",
//   "Religion",
//   "Ethics",
//   "Weather Updates"
// ];
// const options = tags.map((tag) => ({ value: tag, label: tag }));

const UpdateMyArticle = () => {
    const { _id, title,
        image,
     
       view,
       
       area,
       publisher,
       category,
       packageDescription,} = useLoaderData();

    const {user} = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
  
  
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const selectedTags = selectedOptions.map((tag) => tag.value);

//   const handleChange = (selectedOptions) => {
//     setSelectedOptions(selectedOptions);
//   };
  const handleAddArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const userEmail = form.email.value;
    const userImg = form.user_image.value;

    const view = form.view.value;
    const area = form.area.value;
    const publisher = form.publisher.value;
    const category = form.category.value;
    

    const packageDescription = form.description.value;
    const userName = form.user_name.value;
    const timeZone = form.date_time.value;

    const articleInfo = {
      title,
       image,
      userName,
      userEmail,
      userImg,
      view,
      timeZone,
      area,
      publisher,
      category,
      packageDescription,
      
    };
 
    axiosSecure.patch(`/allArticles/${_id}`, articleInfo)
     .then(res => {
      console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Your Article Updated SuccesFully",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
          form.reset()
          navigate('/my-articles')
     })
  };
  return (
    <div>
      <PageTitle pageTitle={"Update"} animateTitle={"Article"}></PageTitle>
      <div>
      <div>
      <div className="lg:p-24">
        <div
          className="p-8 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
          }}
        >
          <form onSubmit={handleAddArticle}>
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Article Title
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    placeholder="Article Title"
                    name="title"
                    className="input input-bordered w-full"
                    defaultValue={title}
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Article Photo URL
                  </span>
                </label>
                <label>
                  <input
                    type="url"
                    required
                    placeholder="Article Photo URL"
                    name="image"
                    className="input input-bordered w-full"
                    value={image}
                  />
                </label>
              </div>
            </div>
            {/* input flex part */}
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Name
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    name="user_name"
                    value={user?.displayName}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Email
                  </span>
                </label>
                <label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={user?.email}
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Photo URL
                  </span>
                </label>
                <label>
                  <input
                    type="url"
                    required
                    name="user_image"
                    value={user?.photoURL}
                    placeholder="Your Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* input flex part */}
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Article Views
                  </span>
                </label>
                <label>
                  <input
                    type="number"
                    required
                    name="view"
                    value={view}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Article Post Date/Time
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    name="date_time"
                    value={`${moment().format("ddd, MMM D, YYYY, h:mm:ss a")}`}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Area
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    placeholder=" Area"
                    name="area"
                    defaultValue={area}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* input flex part */}
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Publisher
                  </span>
                </label>
                <label>
                  <select
                    required
                    name="publisher"
                    value={publisher}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select a publisher</option>
                    <option value="The Daily Star">The Daily Star</option>
                    <option value="Dhaka Tribune">Dhaka Tribune</option>
                    <option value="Daily Observer">Daily Observer</option>
                    <option value="Financial Express">Financial Express</option>
                    <option value="Bangladesh Today">Bangladesh Today</option>
                    <option value="Bangladesh Today">Business Standard</option>
                    
                  </select>
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Category
                  </span>
                </label>
                <label>
                  <select
                    required
                    name="category"
                    defaultValue={category}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select a Category</option>
                    <option value="Political Affairs">Political Affairs</option>
                    <option value="World News">World News</option>
                    <option value="Travel">Travel</option>
                    <option value="Sport Highlights">Sport Highlights</option>
                    <option value="Crime Reports">Crime Reports</option>
                    <option value="Premium Content">Premium Content</option>
                    <option value="Educational Insights">
                      Educational Insights
                    </option>
                  </select>
                </label>
              </div>
            </div>
            {/* <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-white">
                  Tags
                </span>
              </label>
              <label>
                <Select
                name="selectedTags"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                
                />
              </label>
            </div> */}
            <div className="mt-6 w-full">
              <p className="font-semibold text-white py-2">Description</p>
              <textarea
                className="p-2 rounded-lg w-full"
                placeholder="Enter your description here..."
                name="description"
                rows="4"
                defaultValue={packageDescription}
              ></textarea>
            </div>
            {/* input flex part */}
            <div className="mb-8">
              <input
                type="submit"
                value="Post Article"
                className="btn btn-block text-white mt-6"
                style={{
                  backgroundImage:
                    'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default UpdateMyArticle;
