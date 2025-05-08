import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-8">
        Have a question or want to work together? Send me a message!
      </p>
      <form
        action="https://formsubmit.co/Venkateshwar.uf222@gmail.com"
        method="POST"
        className="max-w-xl mx-auto text-left space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;