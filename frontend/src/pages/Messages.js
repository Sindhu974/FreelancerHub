function Messages() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">

        <h1 className="text-3xl font-bold mb-8">
          Messages
        </h1>

        <div className="space-y-4">

          <div className="p-4 bg-blue-100 rounded-lg cursor-pointer">
            John Doe
          </div>

          <div className="p-4 bg-gray-100 rounded-lg cursor-pointer">
            Sarah
          </div>

          <div className="p-4 bg-gray-100 rounded-lg cursor-pointer">
            Alex
          </div>

        </div>

      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">

        <div className="bg-blue-600 text-white p-5 text-2xl font-bold">
          John Doe
        </div>

        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

          <div className="bg-white p-4 rounded-lg shadow max-w-md">
            Hello, I can work on your project.
          </div>

          <div className="bg-blue-600 text-white p-4 rounded-lg shadow max-w-md ml-auto">
            Great! Please send proposal.
          </div>

        </div>

        <div className="p-4 bg-white flex">

          <input
            type="text"
            placeholder="Type message..."
            className="flex-1 border p-3 rounded-l-lg outline-none"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-lg">
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Messages;