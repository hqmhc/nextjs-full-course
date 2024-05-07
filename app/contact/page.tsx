import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src="your_image_url_here" alt="Contact" className="md:max-w-lg" />
      </div>
      <div className="md:w-1/2 bg-blue-900 p-8 shadow-md rounded-md flex items-center justify-center text-white bg-blue-900">
        <form className="w-full text-white">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactPage;
