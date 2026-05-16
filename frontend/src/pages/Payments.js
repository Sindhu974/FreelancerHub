function Payments() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Payments
      </h1>

      {/* Payment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold">
            Total Earnings
          </h2>

          <p className="text-5xl text-green-600 mt-4">
            ₹50K
          </p>

        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold">
            Pending Payments
          </h2>

          <p className="text-5xl text-yellow-500 mt-4">
            ₹12K
          </p>

        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold">
            Withdrawn
          </h2>

          <p className="text-5xl text-blue-600 mt-4">
            ₹38K
          </p>

        </div>

      </div>

      {/* Transaction Table */}
      <div className="bg-white rounded-xl shadow-lg mt-12 p-8">

        <h2 className="text-3xl font-bold mb-6">
          Recent Transactions
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-4">
                Client
              </th>

              <th className="text-left p-4">
                Project
              </th>

              <th className="text-left p-4">
                Amount
              </th>

              <th className="text-left p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="p-4">
                John
              </td>

              <td className="p-4">
                Ecommerce Website
              </td>

              <td className="p-4">
                ₹10K
              </td>

              <td className="p-4 text-green-600">
                Paid
              </td>

            </tr>

            <tr className="border-b">

              <td className="p-4">
                Sarah
              </td>

              <td className="p-4">
                AI Chatbot
              </td>

              <td className="p-4">
                ₹15K
              </td>

              <td className="p-4 text-yellow-500">
                Pending
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Payments;