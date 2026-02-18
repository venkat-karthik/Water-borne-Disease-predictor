"use client";
import { useState } from 'react';

const EMERGENCY_NUMBERS = [
  { name: 'National Emergency Number', number: '112' },
  { name: 'Police', number: '100' },
  { name: 'Ambulance', number: '102' },
  { name: 'Disaster Management', number: '108' },
  { name: 'Mental Health Helpline', number: '1800-599-0019' },
  { name: 'COVID-19 Helpline', number: '1075' },
  { name: 'Women Helpline', number: '181' },
  { name: 'Child Helpline', number: '1098' },
  { name: 'Senior Citizen Helpline', number: '14567' },
  { name: 'Ayush COVID-19 Helpline', number: '14443' },
];

export default function SyntheticV0PageForDeployment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueType: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.issueType) {
      newErrors.issueType = 'Please select an issue type';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Example number
    const message = encodeURIComponent("Hello, I need assistance from the Government Health Helpline.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your report has been submitted successfully.</p>
          <p className="text-gray-500 text-sm">We'll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbfdfe' }}>
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0f1724' }}>Government Health Contact</h1>
          <p className="text-lg" style={{ color: '#0f1724' }}>Report health issues and get assistance from government health services</p>
        </div>
        
        <div className="bg-white shadow-lg overflow-hidden rounded-xl mb-12 border border-gray-100">
          <div className="px-6 py-5" style={{ backgroundColor: '#000080' }}>
            <h2 className="text-xl font-semibold text-white">Health Issue Report Form</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-[#000080] focus:ring-[#000080] sm:text-sm p-3 border-2 ${errors.name ? 'border-red-500' : ''}`}
                style={{ backgroundColor: '#e7eef3' }}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-[#000080] focus:ring-[#000080] sm:text-sm p-3 border-2 ${errors.email ? 'border-red-500' : ''}`}
                style={{ backgroundColor: '#e7eef3' }}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-[#000080] focus:ring-[#000080] sm:text-sm p-3 border-2 ${errors.phone ? 'border-red-500' : ''}`}
                style={{ backgroundColor: '#e7eef3' }}
                placeholder="1234567890"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">Issue Type</label>
              <select
                id="issueType"
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-[#000080] focus:ring-[#000080] sm:text-sm p-3 border-2 ${errors.issueType ? 'border-red-500' : ''}`}
                style={{ backgroundColor: '#e7eef3' }}
              >
                <option value="">Select an issue type</option>
                <option value="medical">Medical Emergency</option>
                <option value="appointment">Appointment Booking</option>
                <option value="information">Health Information</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
              {errors.issueType && <p className="mt-1 text-sm text-red-600">{errors.issueType}</p>}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-[#000080] focus:ring-[#000080] sm:text-sm p-3 border-2 ${errors.description ? 'border-red-500' : ''}`}
                style={{ backgroundColor: '#e7eef3' }}
                placeholder="Please describe your issue in detail..."
              />
              {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
                style={{ backgroundColor: '#25D366' }}
              >
                Chat on WhatsApp
              </button>
              
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
                style={{ backgroundColor: '#000080' }}
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>

        {/* Emergency Numbers Section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="px-6 py-5" style={{ backgroundColor: '#000080' }}>
            <h2 className="text-xl font-semibold text-white">Emergency Helpline Numbers</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EMERGENCY_NUMBERS.map((item, index) => (
                <div key={index} className="bg-[#e7eef3] p-4 rounded-lg border border-[#add8e6] hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-medium text-[#0f1724]">{item.name}</h3>
                  <a 
                    href={`tel:${item.number}`} 
                    className="text-[#000080] hover:text-[#0000cc] font-semibold text-lg mt-1 inline-block"
                  >
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#f0f8ff] rounded-lg border border-[#add8e6]">
              <p className="text-sm text-[#0f1724] text-center">
                <strong>Note:</strong> For emergencies, please call the appropriate number. These helplines are operational 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}