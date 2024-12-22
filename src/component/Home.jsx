import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaLock, FaShieldAlt, FaWifi, FaUserShield, FaServer, FaLeaf, FaBox } from 'react-icons/fa';
import "./css/Home.css";

const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const plansRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Secure Your Online Presence'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: false,
    };
    const typedHeading = new Typed(headingRef.current, options);

    const subOptions = {
      strings: [
        'Experience seamless browsing with advanced security and privacy. Our VPN ensures your data is protected everywhere.',
      ],
      typeSpeed: 40,
      backSpeed: 20,
      startDelay: 500,
      loop: false,
      showCursor: false,
    };
    const typedSubheading = new Typed(subheadingRef.current, subOptions);

    return () => {
      typedHeading.destroy();
      typedSubheading.destroy();
    };
  }, []);

  const scrollToPlans = () => {
    plansRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-custom">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[80vh] text-white" style={{ backgroundImage: 'url(https://www.racksolutions.com/news//app/uploads/AdobeStock_87909563.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto p-8 flex flex-col items-center justify-center text-center space-y-6">
          <h1 ref={headingRef} className="text-5xl font-bold mt-16"></h1>
          <p ref={subheadingRef} className="text-lg mt-4"></p>
          <div className="flex space-x-4 mt-4">
          <a href="tel:+1234567890" className="text-red-700 hover:underline">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg">Get Started</button>
           </a>
            <button
              className="bg-white hover:bg-gray-100 text-red-600 font-medium py-2 px-4 rounded-lg border border-red-600"
              onClick={scrollToPlans}
            >
              See Plans →
            </button>
          </div>
        </div>
      </div>

      {/* Core Security Features */}
      <h2 className="text-3xl font-bold text-center mt-12 mb-6">Core Security Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-screen-xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaLock className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Data Encryption</h3>
          <p className="text-gray-600">Ensure your data remains secure with end-to-end encryption, keeping your information safe from prying eyes.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaShieldAlt className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Secure Browsing</h3>
          <p className="text-gray-600">Browse safely with built-in protections that block malicious websites and potential threats.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaWifi className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Wi-Fi Security</h3>
          <p className="text-gray-600">Connect confidently to public Wi-Fi networks with the assurance that your connection is protected.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaUserShield className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">User Privacy</h3>
          <p className="text-gray-600">Keep your identity and online activity private, protecting yourself from surveillance and data collection.</p>
        </div>
      </div>

      {/* Additional Benefits */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">Additional Benefits</h2>
      <div className="py-12 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-screen-xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaServer className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Server Reliability</h3>
            <p className="text-gray-600">Enjoy fast and stable connections with our reliable servers that ensure uninterrupted browsing.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaLeaf className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Tech</h3>
            <p className="text-gray-600">Our services use energy-efficient technology to minimize environmental impact.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <FaBox className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Comprehensive Solutions</h3>
            <p className="text-gray-600">Benefit from a wide range of features packaged to meet your security and privacy needs.</p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <h2 ref={plansRef} className="text-3xl font-bold text-center mt-16 mb-6">Choose Your Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-screen-xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-red-600">
          <FaShieldAlt className="text-red-600 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-gray-600 mb-4">Essential protection for casual users.</p>
          <ul className="text-gray-600 text-left mb-6">
            <li className="mb-2"><span className='text-green-600'>✔</span> Secure browsing</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Wi-Fi protection</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Basic data encryption</li>
          </ul>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg">Choose Basic</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-green-600">
          <FaUserShield className="text-green-600 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-gray-600 mb-4">Advanced features for power users.</p>
          <ul className="text-gray-600 text-left mb-6">
            <li className="mb-2"><span className='text-green-600'>✔</span> All Basic plan features</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Multi-device support</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Enhanced privacy controls</li>
          </ul>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg">Choose Pro</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-blue-600">
          <FaServer className="text-blue-600 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
          <p className="text-gray-600 mb-4">Comprehensive security and performance.</p>
          <ul className="text-gray-600 text-left mb-6">
            <li className="mb-2"><span className='text-green-600'>✔</span> All Pro plan features</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Dedicated servers</li>
            <li className="mb-2"><span className='text-green-600'>✔</span> Priority support</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">Choose Ultimate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
