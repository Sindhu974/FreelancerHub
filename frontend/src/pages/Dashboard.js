function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          Freelancer Hub
        </h1>

        <ul className="space-y-6 text-lg">

          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Messages
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Payments
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Settings
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Freelancer Dashboard
        </h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              Active Projects
            </h2>

            <p className="text-5xl mt-4 text-blue-600">
              12
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              Earnings
            </h2>

            <p className="text-5xl mt-4 text-green-600">
              ₹25K
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              Completed Projects
            </h2>

            <p className="text-5xl mt-4 text-pink-600">
              48
            </p>
          </div>

        </div>

        {/* Recent Projects */}
        <div className="mt-12">

          <h1 className="text-4xl font-bold mb-8">
            Recent Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-lg">

              <h2 className="text-2xl font-bold">
                Ecommerce Website
              </h2>

              <p className="text-gray-600 mt-2">
                Need MERN Stack developer for ecommerce project.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Details
              </button>

            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">

              <h2 className="text-2xl font-bold">
                AI Chatbot
              </h2>

              <p className="text-gray-600 mt-2">
                Looking for AI engineer to build chatbot system.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;