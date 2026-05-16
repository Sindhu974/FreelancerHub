function FreelancerCard(props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">

      <img
        src={props.image}
        alt=""
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-2xl font-bold mt-4">
        {props.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {props.role}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Hire Me
      </button>

    </div>
  );
}

export default FreelancerCard;