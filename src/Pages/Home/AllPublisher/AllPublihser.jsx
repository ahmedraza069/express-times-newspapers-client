import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePublisher from "../../../hooks/usePublisher";

const AllPublihser = () => {
    const [publishers] = usePublisher();
    console.log(publishers);
  return (
    <div>
      <SectionTitle
        heading={"All"}
        animateHeading={"Publishers"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {
            publishers.map(publisher => <div key={publisher._id} className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-full h-64">
              <img className="w-full h-full"
                src={publisher.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-gray-900 text-white">
              <h2 className="card-title text-2xl font-bold">{publisher.name}</h2>
            </div>
          </div>
        )
        }
        </div>
    </div>
  );
};

export default AllPublihser;
