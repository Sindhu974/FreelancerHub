function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-6"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;