import { useState } from "react";

function Profile() {

  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-center mb-10">
          Freelancer Profile
        </h1>

        {/* Image Upload */}
        <div className="flex flex-col items-center">

          {image ? (

            <img
              src={image}
              alt=""
              className="w-40 h-40 rounded-full object-cover mb-6"
            />

          ) : (

            <div className="w-40 h-40 rounded-full bg-gray-300 mb-6"></div>

          )}

          <input
            type="file"
            onChange={handleImage}
            className="mb-6"
          />

        </div>

        {/* Profile Form */}
        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Skills"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            placeholder="About Freelancer"
            className="w-full border p-4 rounded-lg h-40"
          ></textarea>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;