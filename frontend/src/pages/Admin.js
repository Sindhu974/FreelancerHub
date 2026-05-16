function Admin() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-6 text-lg">

          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Users
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Freelancers
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Payments
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Reports
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold">
              Total Users
            </h2>

            <p className="text-5xl text-blue-600 mt-4">
              250
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold">
              Freelancers
            </h2>

            <p className="text-5xl text-green-600 mt-4">
              180
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold">
              Projects
            </h2>

            <p className="text-5xl text-pink-600 mt-4">
              96
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold">
              Revenue
            </h2>

            <p className="text-5xl text-yellow-500 mt-4">
              ₹5L
            </p>

          </div>

        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg mt-12 p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Users
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left p-4">
                  Name
                </th>

                <th className="text-left p-4">
                  Role
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-4">
                  John Doe
                </td>

                <td className="p-4">
                  Freelancer
                </td>

                <td className="p-4 text-green-600">
                  Active
                </td>

              </tr>

              <tr className="border-b">

                <td className="p-4">
                  Sarah
                </td>

                <td className="p-4">
                  Client
                </td>

                <td className="p-4 text-yellow-500">
                  Pending
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Admin;