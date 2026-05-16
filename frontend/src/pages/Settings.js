function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Profile Settings
      </h1>

      <div className="bg-white p-10 rounded-xl shadow-lg max-w-3xl">

        {/* Profile Image */}
        <div className="flex justify-center mb-8">

          <img
            src="https://i.pravatar.cc/150?img=5"
            alt=""
            className="w-32 h-32 rounded-full"
          />

        </div>

        {/* Form */}
        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
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
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;