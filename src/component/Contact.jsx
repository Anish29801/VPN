import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
        <p className="text-lg mb-12 text-gray-600">We'd love to hear from you! Reach out to us through any of the following ways.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Office</h3>
            <p className="text-gray-600 mb-4">
              1234 VPN Street, Suite 567<br />
              Privacy City, PC 12345
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:support@cvpn.com" className="text-red-700 hover:underline">support@cvpn.com</a><br />
                <a href="mailto:info@cvpn.com" className="text-red-700 hover:underline">info@cvpn.com</a>
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="text-red-700 hover:underline">+1 (234) 567-890</a>
              </p>
            </div>
          </div>

          {/* Google Maps Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg col-span-1 sm:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Visit Us</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              {/* Google Maps iframe */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092194!2d144.95373531550486!3d-37.81627974248239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5666d5cfedd!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1643189343310!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-8 text-gray-900">Drop Us a Message</h3>
          <form action="#" method="POST" className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
