import React from 'react';

const ServiceCard = ({ title, description, icon, details }) => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex justify-center mb-6">
        {/* Icon */}
        <img src={icon} alt={title} className="w-20 h-20 filter-red" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-500 text-sm">{details}</p>
      <button className="mt-6 px-6 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Secure VPN Connection',
      description: 'Experience fast and secure connections with our VPN service, which ensures your privacy while browsing.',
      details: 'Our VPN uses AES-256 encryption to safeguard your data from any potential intruders, providing a secure tunnel for all your online activities. Whether you are at home or on the go, your connection is always protected.',
      icon: 'https://cdn-icons-png.flaticon.com/512/139/139830.png', // Replace with red-themed icons if available
    },
    {
      title: 'Data Encryption',
      description: 'Your personal data is encrypted, making sure that no one can access or steal it from malicious third parties.',
      details: 'We employ state-of-the-art encryption algorithms that ensure your sensitive information, whether passwords, banking details, or personal data, stays private and secure from hackers and surveillance agencies.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3887/3887503.png',
    },
    {
      title: 'No Logs Policy',
      description: 'We believe in complete user privacy. Our no-logs policy ensures that we do not track your online activity.',
      details: 'Unlike other VPN providers, we do not collect or store any of your browsing data. We believe that privacy is a fundamental right, and we adhere strictly to our no-logs policy to protect you from unnecessary surveillance.',
      icon: 'https://cdn2.iconfinder.com/data/icons/web-technology-outline/100/outline_no_log_logs_register_file_wrong_fail-512.png',
    },
    {
      title: '24/7 Support',
      description: 'Our customer support is available round-the-clock to assist you with any issues you may encounter.',
      details: 'Whether you have a technical question or need help setting up your VPN, our support team is here to provide you with timely and efficient assistance via chat, email, or phone, 24/7.',
      icon: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
    },
    {
      title: 'Global Server Network',
      description: 'Access content from around the world with our extensive global server network.',
      details: 'Our VPN offers servers in over 50 countries, allowing you to unlock geo-restricted content, bypass censorship, and enjoy the internet as it was meant to be, free from regional limitations.',
      icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F437%2F771%2Foriginal%2Fvector-globe-icon.jpg&f=1&nofb=1&ipt=e3b988f4421f6d5d382f9e3bc7b54cfc05e65a7b91146794197db6d782095d6c&ipo=images',
    },
    {
      title: 'Fast Connection Speeds',
      description: 'Enjoy fast and reliable internet speeds with our optimized VPN servers.',
      details: 'Unlike many other VPN services, our servers are fine-tuned for speed, ensuring that your online experience remains smooth and uninterrupted. Streaming, gaming, and browsing are just as fast as without a VPN.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2142/2142215.png',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">Our Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-600 mb-8">
            We are committed to providing you with a secure, private, and high-performance VPN service. Our platform is designed for users who care about their online security, privacy, and performance. Whether you're browsing the web, streaming content, or engaging in online gaming, CVPN is here to ensure that your experience is safe, fast, and reliable.
          </p>
          <div className="flex justify-center gap-12">
            <button className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300 ease-in-out">
              Get Started Now
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
