function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-3xl">

        <h1 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            placeholder="Write Your Message"
            className="w-full border p-4 rounded-lg h-40"
          ></textarea>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;