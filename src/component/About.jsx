import React from 'react';
import { FaLock, FaShieldAlt, FaWifi, FaUserShield, FaHandshake, FaGlobe, FaServer } from 'react-icons/fa';
import 'flowbite';

const About = () => {
  return (
    <div className="font-custom bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fgroup-young-business-people-sitting-office-having-meeting-group-young-business-people-sitting-talking-157560329.jpg&f=1&nofb=1&ipt=894d21c00e3e15b9810b2e0a7fa5ae6553b2e25b31c01b33c2c096c44bc4d421&ipo=images)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">About CVPN</h1>
          <p className="text-lg max-w-3xl">
            Your trusted partner in safeguarding online security and privacy. Our mission is to
            empower individuals and businesses worldwide with reliable and secure internet solutions.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            At CVPN, we believe in the freedom to browse the internet securely and without limits.
            Our mission is to make advanced security tools accessible to everyone, ensuring their
            online safety while promoting privacy and digital independence.
          </p>
        </div>
      </section>

      {/* Our History */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.slidemodel.com%2Fwp-content%2Fuploads%2F30050-01-company-profile-powerpoint-template-10.jpg&f=1&nofb=1&ipt=7b5141b48222379318b70cd58af4100a7f4ed7725419b55a94acc0d9069ef87b&ipo=images"
                alt="Our History"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-600">
                CVPN started as a small initiative by a group of tech enthusiasts determined to
                tackle the growing threats to online privacy and security. From humble beginnings
                as a local project in 2015, we’ve grown into a global provider of VPN services with
                millions of users worldwide.
              </p>
              <p className="text-gray-600 mt-4">
                Our growth has been fueled by our commitment to innovation, trust, and our
                unwavering dedication to protecting our users. Today, CVPN stands as a leader in
                providing secure, reliable, and accessible internet solutions for personal and
                professional use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaLock className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Security First</h3>
              <p className="text-gray-600 mt-2">
                Protecting your data and ensuring your peace of mind is our top priority.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaShieldAlt className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="text-gray-600 mt-2">
                We operate with full transparency and earn the trust of our customers.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaWifi className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Global Access</h3>
              <p className="text-gray-600 mt-2">
                Stay connected securely to any network, anytime, anywhere.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <FaUserShield className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">User-Centric</h3>
              <p className="text-gray-600 mt-2">
                Delivering services tailored to meet the diverse needs of our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We offer a comprehensive suite of tools designed to protect your online activities,
            ensure privacy, and give you unrestricted access to the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced VPN</h3>
              <p className="text-gray-600">Fast, secure, and reliable VPN services for all your devices.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaServer className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Servers</h3>
              <p className="text-gray-600">Exclusive servers for businesses and power users.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaGlobe className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Access servers across the world for unmatched connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <p className="italic text-gray-600">
                "CVPN has been a game changer for my work. I can connect to public Wi-Fi with peace
                of mind!"
              </p>
              <p className="mt-4 font-bold">- Sarah L.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <p className="italic text-gray-600">
                "The reliability and speed of CVPN's servers are unmatched. Highly recommended!"
              </p>
              <p className="mt-4 font-bold">- David K.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <p className="italic text-gray-600">
                "Their privacy policies are clear and trustworthy. I’ve never felt safer online."
              </p>
              <p className="mt-4 font-bold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Experience CVPN Today</h2>
        <p className="mb-6">
          Join thousands of users who trust CVPN for their online security and privacy.
        </p>
        <button className="bg-white text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
