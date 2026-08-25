import React, { useState } from 'react';

// Import icons
import overviewIcon from '../assets/img/icon/overview-icon.svg';
import infrastructureIcon from '../assets/img/icon/infrastructure-icon.svg';
import connectivityIcon from '../assets/img/icon/connectivity-icon.svg';
import investmentIcon from '../assets/img/icon/investment-icon.svg';

// Import images
import dholeraLogo from '../assets/img/aboutdholera.webp';
import semiconductorImg from '../assets/img/semiconductor.webp';
import connectivityImg from '../assets/img/connectivity.webp';
import investmentImg from '../assets/img/growth.webp';
import investment2Img from '../assets/img/national.webp';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          onClick={() => handleTabClick('overview')}
          className={`flex items-center px-6 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
        >
          <img src={overviewIcon} alt="Overview" className="w-6 h-6 mr-2" />
          Overview
        </button>
        <button
          onClick={() => handleTabClick('infrastructure')}
          className={`flex items-center px-6 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'infrastructure' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
        >
          <img src={infrastructureIcon} alt="Infrastructure" className="w-6 h-6 mr-2" />
          Infrastructure
        </button>
        <button
          onClick={() => handleTabClick('connectivity')}
          className={`flex items-center px-6 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'connectivity' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
        >
          <img src={connectivityIcon} alt="Connectivity" className="w-6 h-6 mr-2" />
          Connectivity
        </button>
        <button
          onClick={() => handleTabClick('investment')}
          className={`flex items-center px-6 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'investment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
        >
          <img src={investmentIcon} alt="Investment" className="w-6 h-6 mr-2" />
          Investment/Opportunities
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={dholeraLogo} alt="Dholera SIR Logo" className="h-40 md:h-48 rounded-md " />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Dholera Special Investment Region (SIR)</h2>
                <p className="mb-4">
                  Dholera SIR is India's first greenfield industrial smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). Located in the Gulf of Khambhat in Gujarat, it spans approximately 920 sq km and is positioned as a global manufacturing and trading hub.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Vision</h3>
                <p>
                  To develop Dholera as a global manufacturing and trading hub supported by world-class infrastructure, providing a high quality of life, sustainable development, and investment opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Development Plan</h3>
                <p>
                  The development is planned in phases, with Phase 1 covering 22.5 sq km. The city is designed to accommodate a population of 2 million people by 2040 with a focus on sustainable urban planning.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Key Facts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Part of the Delhi-Mumbai Industrial Corridor (DMIC)</li>
                <li>Located approximately 100 km southwest of Ahmedabad</li>
                <li>Total area: 920 sq km (22.5 sq km in Phase 1)</li>
                <li>Managed by Dholera Industrial City Development Limited (DICDL) and Dholera Special Investment Regional Development Authority (DSIRDA)</li>
                <li>Designated as a National Investment and Manufacturing Zone (NIMZ)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Infrastructure Tab */}
        {activeTab === 'infrastructure' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">World-Class Infrastructure</h2>
            <p className="mb-6">
              Dholera SIR is being developed with state-of-the-art infrastructure to support industrial growth and provide a high quality of life for residents and businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Utilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Power:</span> 24x7 power supply with dedicated power plants and renewable energy sources</li>
                  <li><span className="font-medium">Water:</span> Integrated water management system with water treatment plants and recycling facilities</li>
                  <li><span className="font-medium">Waste Management:</span> Advanced solid waste management and recycling systems</li>
                  <li><span className="font-medium">ICT Network:</span> High-speed fiber optic network and smart city infrastructure</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Industrial Infrastructure</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Industrial Zones:</span> Dedicated areas for various sectors including manufacturing, IT, electronics, and more</li>
                  <li><span className="font-medium">Plug-and-Play Facilities:</span> Ready-to-use infrastructure for quick business setup</li>
                  <li><span className="font-medium">Logistics Parks:</span> Integrated facilities for efficient movement of goods</li>
                  <li><span className="font-medium">R&D Centers:</span> Facilities for research and development activities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6 shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <img src={semiconductorImg} alt="Semiconductor Chip" className="w-full max-w-xs rounded-md" />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Semiconductor Fabrication Plant</h3>
                  <p className="mb-2">
                    Tata Electronics is establishing a $10.9 billion semiconductor fabrication plant in Dholera SIR, one of the largest investments in the region. The plant will manufacture chips for automotive, computing, telecom, and other sectors.
                  </p>
                  <p>
                    This project is expected to create thousands of direct and indirect jobs and position Dholera as a key player in the global semiconductor industry.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Social Infrastructure</h3>
              <p className="mb-2">
                The city plan includes comprehensive social infrastructure to ensure a high quality of life:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Educational institutions including schools, colleges, and skill development centers</li>
                <li>Healthcare facilities with hospitals and clinics</li>
                <li>Recreational areas with parks, sports facilities, and entertainment zones</li>
                <li>Commercial centers with retail spaces, hotels, and business parks</li>
                <li>Residential areas with various housing options</li>
              </ul>
            </div>
          </div>
        )}

        {/* Connectivity Tab */}
        {activeTab === 'connectivity' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Multi-Modal Connectivity</h2>
            <p className="mb-6">
              Dholera SIR is strategically located and designed with excellent connectivity to major cities, ports, and industrial centers through various transportation modes.
            </p>
            
            <div className="flex flex-col md:flex-row items-center mb-8 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src={connectivityImg} alt="Dholera SIR Connectivity" className="w-full max-w-md rounded-md" />
              </div>
              <div className="md:w-1/2 md:pl-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Comprehensive Transportation Network</h3>
                <p className="mb-4">
                  Dholera SIR is strategically positioned within India's ambitious infrastructure network, offering businesses unparalleled access to domestic and international markets through multiple transportation modes.
                </p>
                <p>
                  The city's integration with the Delhi-Mumbai Industrial Corridor (DMIC) and proximity to major ports, airports, and rail networks creates a seamless logistics ecosystem for efficient movement of goods and people.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Road Connectivity</h3>
                <p className="mb-2">
                  The Ahmedabad-Dholera Expressway is a key infrastructure project enhancing road connectivity:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>109-km, four-lane, access-controlled expressway</li>
                  <li>Expected to be operational by June 2025</li>
                  <li>Reduces travel time between Ahmedabad and Dholera to 40-45 minutes</li>
                  <li>Part of the Delhi-Mumbai Industrial Corridor (DMIC)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Air Connectivity</h3>
                <p className="mb-2">
                  The Dholera International Airport is being developed to provide global connectivity:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Located near Navagam village, approximately 80 km from Ahmedabad</li>
                  <li>Phase 1 expected to be completed by March 2026</li>
                  <li>Initial capacity of 1.5 million passengers per year</li>
                  <li>Future expansion planned to handle 5 million passengers annually</li>
                  <li>Will include cargo facilities for efficient goods movement</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Rail Connectivity</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Metro Rail:</span> Planned metro rail connection to Ahmedabad</li>
                  <li><span className="font-medium">Dedicated Freight Corridor (DFC):</span> Access to the Western DFC for efficient goods transportation</li>
                  <li><span className="font-medium">High-Speed Rail:</span> Proximity to the Mumbai-Ahmedabad High-Speed Rail Corridor</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Sea Connectivity</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Proximity to Ports:</span> Close to major ports including Kandla, Mundra, and Pipavav</li>
                  <li><span className="font-medium">Planned Port:</span> Development of a port in the Gulf of Khambhat for direct sea access</li>
                  <li><span className="font-medium">Maritime Trade:</span> Strategic location for international maritime trade</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Strategic Location Advantages</h3>
              <p className="mb-2">
                Dholera SIR's strategic location offers excellent connectivity to major urban and industrial centers:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>100 km from Ahmedabad</li>
                <li>130 km from Vadodara</li>
                <li>350 km from Mumbai</li>
                <li>Proximity to major industrial clusters in Gujarat</li>
                <li>Part of the Delhi-Mumbai Industrial Corridor (DMIC)</li>
                <li>Access to a large consumer market in Western India</li>
              </ul>
            </div>
          </div>
        )}

        {/* Investment Tab */}
        {activeTab === 'investment' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>
            <p className="mb-6">
              Dholera SIR offers lucrative investment opportunities across various sectors with strong government support and incentives.
            </p>
            
            <div className="flex flex-col md:flex-row items-center mb-8 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/2 md:pr-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Growing Investment Landscape</h3>
                <p className="mb-4">
                  Dholera SIR is witnessing unprecedented investment growth across multiple sectors, with semiconductor manufacturing leading the way following Tata Electronics' $10.9 billion commitment.
                </p>
                <p>
                  Early investors are positioned to benefit from the region's rapid development, appreciating land values, and the government's comprehensive support package designed to foster business success.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img src={investmentImg} alt="Dholera SIR Investment Growth" className="w-full max-w-md rounded-md" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-8 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img src={investment2Img} alt="Dholera SIR Investment Growth" className="w-full max-w-md rounded-md" />
              </div>
              <div className="md:w-1/2 md:pr-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Advantage of Dholera</h3>
                <p className="mb-4">
                 Dholera SIR is set to become one Of India’s most developed regions wherein all aspects Of life, work and play seamlessly converge to create a world-class city. We have carefully planned and gone the extra mile to make Dholera SIR the destination Of choice for you.
                </p>
                <p>
                  Located in the prime Minister’s home State Of Gujarat and a part Of his visionary plan, Dholera is extremely well-connected to the rest Of India and the world. It will be home to non‘polluting industries, as We aim to create a clean, green and sustainable urban development. It will be the perfect place to set up large manufacturing units due to the availability of large land parcels.
                </p>
                <p>We have been tirelessly working and have progressed rapidly to lay the platform for the city to become a future hub Of innovation and progress. With all this and more, there really is no better place in the world for your business to grow and flourish.</p>
              </div>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Key Investment Sectors</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Semiconductors & Electronics:</span> Manufacturing of chips, electronic components, and devices</li>
                  <li><span className="font-medium">Heavy Engineering:</span> Automotive, machinery, and equipment manufacturing</li>
                  <li><span className="font-medium">Renewable Energy:</span> Solar panel manufacturing, wind energy equipment</li>
                  <li><span className="font-medium">IT & ITES:</span> Software development, BPO, data centers</li>
                  <li><span className="font-medium">Pharmaceuticals & Biotechnology:</span> Drug manufacturing, research facilities</li>
                  <li><span className="font-medium">Aerospace & Defense:</span> Component manufacturing, MRO facilities</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Government Incentives</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Tax Benefits:</span> GST reimbursements, income tax incentives</li>
                  <li><span className="font-medium">Capital Subsidies:</span> For setting up manufacturing units</li>
                  <li><span className="font-medium">Land Allocation:</span> Transparent and efficient land allocation process</li>
                  <li><span className="font-medium">Single Window Clearance:</span> Streamlined approval process</li>
                  <li><span className="font-medium">R&D Support:</span> Incentives for research and development activities</li>
                  <li><span className="font-medium">Skill Development:</span> Support for training and workforce development</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Major Investments</h3>
              <p className="mb-2">
                Dholera SIR has already attracted significant investments from major companies:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Tata Electronics:</span> $10.9 billion semiconductor fabrication plant</li>
                <li><span className="font-medium">Semiconductor Ecosystem:</span> Involvement of companies like Foxconn and Vedanta</li>
                <li><span className="font-medium">Renewable Energy:</span> Solar park development with 5000 MW capacity</li>
                <li><span className="font-medium">Infrastructure Development:</span> Investments in roads, utilities, and other infrastructure</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Investment Process</h3>
              <p className="mb-2">
                The investment process in Dholera SIR is designed to be investor-friendly with clear steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><span className="font-medium">Initial Consultation:</span> Discuss project requirements and feasibility</li>
                <li><span className="font-medium">Land Identification:</span> Selection of suitable land parcel based on project needs</li>
                <li><span className="font-medium">Application Submission:</span> Submit investment proposal with required documents</li>
                <li><span className="font-medium">Approval Process:</span> Fast-track clearances through single window system</li>
                <li><span className="font-medium">Land Allotment:</span> Transparent allocation of land for the project</li>
                <li><span className="font-medium">Project Implementation:</span> Support during construction and operation phases</li>
              </ol>
              <p className="mt-4">
                For investment inquiries, contact the Dholera SIR Investment Promotion Cell or visit the official website.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;