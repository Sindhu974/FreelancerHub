function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Notifications
      </h1>

      <div className="space-y-6">

        {/* Notification Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              New Project Posted
            </h2>

            <p className="text-gray-600 mt-2">
              A new MERN stack project has been posted.
            </p>

          </div>

          <span className="text-sm text-gray-500">
            2 min ago
          </span>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Payment Received
            </h2>

            <p className="text-gray-600 mt-2">
              ₹10K payment received from John.
            </p>

          </div>

          <span className="text-sm text-gray-500">
            1 hour ago
          </span>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              New Message
            </h2>

            <p className="text-gray-600 mt-2">
              Sarah sent you a message.
            </p>

          </div>

          <span className="text-sm text-gray-500">
            Yesterday
          </span>

        </div>

      </div>

    </div>
  );
}

export default Notifications;