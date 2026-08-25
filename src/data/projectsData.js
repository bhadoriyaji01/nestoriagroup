// src/data/projectsData.js
// Single source of truth for all Nestoria Group real estate projects in Dholera SIR
// Updated with verified Running Projects (2026) directly from official records & Google Drive

import dholeraBhoomi from '../assets/img/project/Dholera-Bhoomi.webp';
import dholeraBhoomi2 from '../assets/img/project/Dhollera-Bhoomi2 .webp';
import dholeraBhoomi3 from '../assets/img/project/DHOLERA BHOOMI-III .webp';
import orchidLuxury from '../assets/img/project/ORCHID LUXURY-BROSER.webp';
import orchidRiverView from '../assets/img/project/ORCHID RIVER VIEW NEW - BROCHURE (2).webp';
import orchidVillaGreens from '../assets/img/project/ORCHID VILLA GREENS-BROSHER.webp';
import orchidVillaLuxuriya from '../assets/img/project/ORCHID VILLA LUXURIYA-BROSHER.webp';
import orchidVillaParadise from '../assets/img/project/ORCHID VILLA PARADISE 2 NEW 12-12-2023 POXI.webp';
import orchidVillaGold from '../assets/img/ORCHILD VILLA GOLD 2023-BROSHER.webp';
import orchidNatureRegency from '../assets/img/project/Orchid Nature Regency_1 (1).webp';
import palmVillas from '../assets/img/project/Palm Villas.webp';
import sunshineResidency from '../assets/img/SunshineResidency.webp';
import monitoResidency from '../assets/img/Monito Residency.png';
import natureNest from '../assets/img/NatureNest.webp';
import commercialProject from '../assets/img/COMMERCIAL-project.webp';
import industrialProject from '../assets/img/Industrial-project.webp';
import emeraldBanner from '../assets/img/project/emerald-banner.webp';
import emeraldLayout from '../assets/img/project/emerald-layout.webp';
import emeraldLocation from '../assets/img/project/emerald-location.webp';
import emeraldSurvey from '../assets/img/project/emerald-sarve.webp';
import greenVistaBanner from '../assets/img/project/green-vista-banner.webp';
import greenVistaLayout from '../assets/img/project/green-vista-layout.webp';
import greenVistaLocation from '../assets/img/project/green-vista-location.webp';
import greenVistaAmenities from '../assets/img/project/green-vista-amenities.webp';
import atulyamBanner from '../assets/img/project/atulyam-banner.webp';
import atulyamAmenities from '../assets/img/project/atulyam-emenities.webp';
import atulyamLayout from '../assets/img/project/atulyam-layout.webp';
import atulyamLocation from '../assets/img/project/atulyam-location.webp';
import semiconBanner from '../assets/img/project/semicon-banner.webp';
import semiconAmenities from '../assets/img/project/semicon-ameneties.webp';
import semiconLayout from '../assets/img/project/semicon-layout.webp';
import semiconLocation from '../assets/img/project/semicon-location.webp';
import nestoriaHomesBanner from '../assets/img/project/nestoria-homes-banner.webp';
import nestoriaHomesAmenities from '../assets/img/project/nestoria-homes-ameneties.webp';
import nestoriaHomesLayout from '../assets/img/project/nestoria-homes-layout.webp';
import nestoriaHomesLocation from '../assets/img/project/nestoria-homes-location.webp';

// Master Google Drive Link for Running Projects
export const MASTER_DRIVE_FOLDER_URL = "https://drive.google.com/drive/u/0/folders/1TqURE9FY3EcM_4kj1MlfBjAy4lEjvnOn";

export const masterPresentations = [
  {
    title: "Dholera SIR Master Presentation 2026 (PPT)",
    fileType: "PDF / Presentation",
    size: "Official Master Dossier",
    driveUrl: "https://drive.google.com/file/d/1WTmhw_ZrH6hWjj1kGpJAccpqy9mNZKe7/view?usp=sharing",
    description: "Comprehensive blueprint of Dholera SIR Town Planning schemes, airport, expressway, metro, and semiconductor cluster."
  },
  {
    title: "Strong Pillars of Nestoria Group (August 2026)",
    fileType: "PDF / Corporate Profile",
    size: "Official Profile",
    driveUrl: "https://drive.google.com/file/d/1okOocLZJtAilt7XcW4opZSvVKBXwMUgu/view?usp=sharing",
    description: "Company track record, legal certifications, completed handovers, and executive management profile."
  }
];

export const allProjects = [
  // ==========================================
  // RUNNING PROJECTS 2026 (From Official Drive)
  // ==========================================
  {
    id: 'nestoria-atulyam',
    slug: 'nestoria-atulyam-dhanala',
    title: 'Nestoria Atulyam',
    tagline: '3D Printed Luxury Smart Villas & Plotted Enclave in Dhanala',
    type: 'residential',
    category: '3D Luxury Villas & Plots',
    isVilla: true,
    status: 'Running Project (2026)',
    statusType: 'ready',
    isRunningProject: true,
    surveyNo: 'Survey No. 714',
    village: 'Dhanala',
    featured: true,
    location: 'Dhanala (Survey No. 714), TP 2 Corridor, Dholera SIR',
    zone: 'Town Planning 2 (TP2 High-Growth Residential)',
    price: '₹ 22.5 Lakhs onwards',
    pricePerSqYd: '₹ 5,800 / sq.yd',
    plotSizes: '175, 250, 400 & 800 Sq. Yards',
    areaRange: '1,575 - 7,200 Sq. Ft. (Villas: 2BHK & 3BHK G+1)',
    totalUnits: '112 Premium Plots & Turnkey 3D Villas',
    image: atulyamBanner,
    gallery: [atulyamBanner, atulyamLayout, atulyamLocation, atulyamAmenities],
    reraNumber: 'NA Final Order Passed / Clear Title Registered',
    possession: 'Immediate Registry & Construction Ready',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19ecf9Gp6vh2VDR8YwdNLF9vaF_3GGxzh',
    kmzFileUrl: 'https://drive.google.com/file/d/1DBPi-CFrRhwqguXf1B0menLanOtjlMKd/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/1JHtBqE1ZIOEgmidxv0C5lpmW4rUBXvFz/view?usp=sharing',
    bookingFormUrl: 'https://drive.google.com/file/d/1zJacZExecvwXWS-2AyL7YmFNfiHBQjHK/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/1LVJ57fhmydF9uLOXMs8NFNISQ7pKw-NA/view?usp=sharing',
    legalDocuments: [
      { name: 'Final NA Order (Residential Purpose)', driveId: '1ID410cq2FfhApT46q558UEYjwUdzmTOW', type: 'NA Final Order' },
      { name: 'Approved Town Planning Plan Pass', driveId: '1sp5Ia4xFvVS9w0owX0GeL-bGvdHFvAWf', type: 'Plan Pass' },
      { name: 'Govt Property Card & Land Sheet', driveId: '1afio1uZrrO4OMwR1LoKX6-urP8wBmIxH', type: 'Property Card' },
      { name: 'Registered Sale Deed No. 768 in Favor of Nestoria Buildcon', driveId: '1RGxLpap11W_mwz_PFk2_7BbuSCA4dbsR', type: 'Sale Deed' },
      { name: 'Official Legal Title Search Report (NJ-HM)', driveId: '1K0Cw2YkBvOJvtpAjFc4v3TI714PVRD0B', type: 'Title Report' },
      { name: 'Government Land Sheet Record', driveId: '1Mm4j1lhvH8N5OZMk_rnTmXARm4XrRuSK', type: 'Govt Land Record' },
      { name: 'Public Notice / Jaher Notice', driveId: '1KTqLnrdKgtbsLH3z-rSmMcdgt6cfaETb', type: 'Public Notice' }
    ],
    videoUrls: [
      { title: 'Nestoria Atulyam 3D Walkthrough & Project Showcase', driveId: '1tgKrVxwpYVeyNa-IQOwMaA1Q5ooFbX6D' },
      { title: 'Nestoria Atulyam AI Smart Villa Architecture Tour', driveId: '1S5v4gIpu-Oc4zjCVN1RpbBm7KJY0V_JK' },
      { title: 'Atulyam Ground Work & Site Progress Update', driveId: '10zusk3JEtCfocE-x6hY3iefu5VamQ7hv' }
    ],
    description: 'Nestoria Atulyam in Dhanala (Survey No. 714) is a landmark running project offering next-generation 3D printed architectural villas and premium plotted land. With 100% verified legal documentation including Final NA Order, Approved Plan Pass, and Registered Sale Deed in favor of Nestoria Buildcon Pvt. Ltd., this development guarantees immediate registry and flawless clear title.',
    overview: 'Located in the high-growth TP 2 residential belt near the Dholera Activation Zone and express highway connectors, Nestoria Atulyam features state-of-the-art G+1 villa floor plans with expansive living rooms, modern designer kitchens, master suites with private balconies, and concealed underground smart utilities.',
    highlights: [
      'Survey No. 714, Dhanala – Prime high-appreciation residential sector',
      '100% NA Final Order & Sub-Registrar Clear Title (Sale Deed No. 768)',
      'Turnkey 3D-Printed modern luxury villas with customizable floor plans',
      'Direct connectivity to Ahmedabad-Dholera Expressway & ABCD Building',
      'Underground electricity, water supply, and stormwater drainage infrastructure',
      'Downloadable Google Earth 3D KMZ layout and official legal dossier'
    ],
    amenities: [
      { name: '3D Printed Villa Architecture', desc: 'Thermally insulated, high-strength eco-friendly luxury homes', icon: 'Home' },
      { name: 'Grand Entrance Gateway', desc: 'Secure manned entry with boom barriers and 24/7 CCTV surveillance', icon: 'ShieldCheck' },
      { name: 'Internal Paved Roads', desc: '12m & 18m reinforced asphalt and concrete internal avenues', icon: 'Footprints' },
      { name: 'Designer Landscaped Gardens', desc: 'Lush green open parks, gazebos, and morning yoga pavilion', icon: 'Trees' },
      { name: 'Underground Smart Utilities', desc: 'Concealed power ducts, water mains, and high-speed optical fiber', icon: 'Zap' },
      { name: 'Rainwater Harvesting', desc: 'Eco-friendly percolation wells and storm drainage network', icon: 'Droplets' }
    ],
    connectivity: [
      { place: 'Ahmedabad-Dholera Expressway', time: '3 Mins', distance: '1.8 km' },
      { place: 'ABCD Administrative Center (TP2)', time: '5 Mins', distance: '3.6 km' },
      { place: 'Tata Semiconductor Fab Hub', time: '7 Mins', distance: '5.2 km' },
      { place: 'Dholera International Airport', time: '12 Mins', distance: '13 km' },
      { place: 'Dholera Central Town Center', time: '6 Mins', distance: '4.1 km' }
    ]
  },
  {
    id: 'nestoria-green-vista',
    slug: 'nestoria-green-vista-aakru',
    title: 'Nestoria Green Vista',
    tagline: 'Eco-Lush Residential Township in Aakru with 100% NA Clear Title',
    type: 'residential',
    category: 'Eco-Friendly Residential Plots',
    status: 'Running Project (2026)',
    statusType: 'ongoing',
    isRunningProject: true,
    surveyNo: 'Survey No. 258 / NA 258p2',
    village: 'Aakru',
    featured: true,
    location: 'Aakru (Survey No. 258), TP 2 Smart City Zone, Dholera SIR',
    zone: 'TP 2 Smart Residential Zone',
    price: '₹ 15.5 Lakhs onwards',
    pricePerSqYd: '₹ 4,700 / sq.yd',
    plotSizes: '150, 200, 300 & 500 Sq. Yards',
    areaRange: '1,350 - 4,500 Sq. Ft.',
    totalUnits: '136 NA Plotted Units',
    image: greenVistaBanner,
    gallery: [greenVistaBanner, greenVistaLayout, greenVistaLocation, greenVistaAmenities],
    reraNumber: 'Government NA Order & Plan Pass Approved',
    possession: 'Immediate Registry & Demarcated Plots',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1HEEHcV6P76Ylw6C-u4z5IpJFKQIRYwAW',
    kmzFileUrl: 'https://drive.google.com/file/d/1MEdGPVka9ZJpiY-siN9vKFvA6Trv16so/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/1zAJNdZg2iTgn9fOazARo9dSnlq99EeBv/view?usp=sharing',
    bookingFormUrl: 'https://drive.google.com/file/d/1e3ybZr0VnqKOocZfB-fZOHwmFZbnMNDT/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/1g_agPO6pCzDfP6OSBGemyMZhPatfFEhG/view?usp=sharing',
    legalDocuments: [
      { name: 'Official NA Order (Residential Purpose)', driveId: '1QF9r7M828QL6KhrNfudsSw8zmIq2klAd', type: 'NA Order' },
      { name: 'Nestoria Green Vista Approved Plan Pass', driveId: '1-dEZrGKWLGExygVnatDGeAjNH02O2hyY', type: 'Plan Pass' },
      { name: 'Government Property Card (Aakru NA 258p2)', driveId: '1UJxFczk93BpWgM8N8YFvS12AKxKZUCaV', type: 'Property Card' },
      { name: 'Plot Registry Documentation Dossier', driveId: '18c8IQStNWraMPyukTmAQm_JDy5STyhVa', type: 'Plot Registry' },
      { name: 'Verified Legal Title Report (NJ-HM)', driveId: '1NMpkXRA4dMKGkVt-o1BDCEWnM8Rhz8TD', type: 'Title Report' },
      { name: 'Official Area Table & Dimension Schedule', driveId: '1tX72-PxtUpWTaKf6ljb06VU6lnaLAj4q', type: 'Area Table' }
    ],
    videoUrls: [
      { title: 'Green Vista Residential Township Walkthrough', driveId: '1tDFuzKdrsjU7AjLeZulOvMQ915Jvbg_n' },
      { title: 'Aakru 258 Site Development & Ground Video', driveId: '1YEsqZfuhdObe-aXVN7OZWcyI_SLus-YD' }
    ],
    description: 'Nestoria Green Vista in Aakru (Survey No. 258 / NA 258p2) is an eco-centric residential plotted development designed around tranquility, clean air, and green living in Dholera SIR. Every plot features clearly defined corner post boundaries, individual water/power hookups, and direct access to tree-lined wide avenues.',
    overview: 'Backed by complete legal security with government NA order, approved plan pass, property card, and comprehensive title search report, Green Vista is prime for immediate registry and superior long-term capital appreciation.',
    highlights: [
      'Survey No. 258, Aakru – Rapidly developing TP 2 expansion corridor',
      '100% NA Clear Title with full government sanction and approved Plan Pass',
      'Over 40% dedicated green open spaces, organic orchard zones, and parks',
      'Easy installment options and instant registry at Dholera sub-registrar',
      'Full 3D Google Earth KMZ map available for remote satellite inspection'
    ],
    amenities: [
      { name: 'Gated Security & Compound', desc: 'Full perimeter wall with manned security booth & CCTV', icon: 'ShieldCheck' },
      { name: 'Avenue Tree Plantation', desc: 'Over 400+ flowering & shade trees along all internal roads', icon: 'Trees' },
      { name: 'Tar & Paver Roads', desc: 'Heavy-duty smooth asphalt internal road grid with gutters', icon: 'Footprints' },
      { name: 'Water Distribution Network', desc: 'Central overhead reservoir with dedicated supply valves', icon: 'Droplets' },
      { name: 'Solar Street Lights', desc: 'Automated energy-efficient illumination for all streets', icon: 'Sun' }
    ],
    connectivity: [
      { place: 'Ahmedabad-Dholera Expressway', time: '4 Mins', distance: '2.5 km' },
      { place: 'Tata Semiconductor Fab ($11B Cluster)', time: '8 Mins', distance: '6.4 km' },
      { place: 'Dholera International Airport', time: '13 Mins', distance: '14 km' },
      { place: 'ABCD Building (TP2)', time: '6 Mins', distance: '4.8 km' }
    ]
  },
  {
    id: 'nestoria-semicon-residency',
    slug: 'nestoria-semicon-residency-kanatalav',
    title: 'Semicon Residency',
    tagline: 'High-Yield Residential Township Adjacent to ₹91,000 Cr Tata Semiconductor Fab',
    type: 'residential',
    category: 'High-Growth Tech Corridor Plots',
    status: 'Running Project (2026)',
    statusType: 'ready',
    isRunningProject: true,
    surveyNo: 'Survey No. 120/P1',
    village: 'Kanatalav',
    featured: true,
    location: 'Kanatalav (Survey No. 120/P1), Near Tata Fab & Activation Zone, Dholera SIR',
    zone: 'TP 2 Tech & Semiconductor Corridor',
    price: '₹ 17.8 Lakhs onwards',
    pricePerSqYd: '₹ 5,100 / sq.yd',
    plotSizes: '175, 250, 350 & 600 Sq. Yards',
    areaRange: '1,575 - 5,400 Sq. Ft.',
    totalUnits: '128 High-Demand Plots',
    image: semiconBanner,
    gallery: [semiconBanner, semiconLayout, semiconLocation, semiconAmenities],
    reraNumber: 'NA Final Order for Residential Purpose / Title Clear',
    possession: 'Immediate Registry & Fast Possession',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1goorOoH6SbsgrFM1xJZop5qIx-YvHuY9',
    kmzFileUrl: 'https://drive.google.com/file/d/1TbPSklz35YOjeCGKioMpuR7eQccXjbCj/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/1NomNpIuU_8PTHteOIIFpPmlQ0FQgzt5-/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/1UfYOHPoZndLJqK6ufTzjWw-sHVb7_jM8/view?usp=sharing',
    legalDocuments: [
      { name: 'NA Final Order (Residential Purpose)', driveId: '1ftrkonWDxli0Sdp7qy4eyalaoYq7q_Jo', type: 'NA Order' },
      { name: 'Approved Layout Plan Pass', driveId: '1XM4YgYUDgS__HjMvNKuAzXTKsRNEbwzu', type: 'Plan Pass' },
      { name: 'Plot Registry Documentation Dossier', driveId: '1yHAQPDC-BuOb1KIsA76HTrp8HZG7fY55', type: 'Plot Registry' },
      { name: 'Comprehensive Legal Title Report (JB)', driveId: '1HncD9ZCiQ244yqtSeKrE2xp0g26DMBVE', type: 'Title Report' },
      { name: 'Official Area Table & Plot Schedule', driveId: '1016SZX1lgAVUtgDqb2RpgtYArfnYxtDI', type: 'Area Table' }
    ],
    videoUrls: [
      { title: 'Semicon Residency Short Video & Site Status', driveId: '1sA6CnxJJwzDBCqM2yJHpFjTtW_Ot_4tT' },
      { title: 'Semicon Residency Complete Walkthrough & Fab Proximity', driveId: '1QwbX4zBrE5hWuNIjGls8DI_LEQLnRfAP' },
      { title: 'Semicon Residency 22 Ground Inspection', driveId: '1-BfWNnvGL7oFMtU19314c-HNbx-8fpZZ' }
    ],
    description: 'Semicon Residency in Kanatalav (Survey No. 120/P1) is tailor-made to capitalize on the massive workforce and executive housing demand generated by the ₹91,000 Crore Tata Semiconductor Fabrication facility in Dholera SIR. Strategically situated within minutes of the fab and ancillary tech parks.',
    overview: 'Featuring full NA residential clearance, plan pass approval, clear title reports, and wide internal roadways, Semicon Residency provides unmatched rental yield potential and rapid capital appreciation for forward-thinking investors.',
    highlights: [
      'Survey No. 120/P1, Kanatalav – Closest residential township to Tata Chip Fab',
      'Massive rental yield potential from semiconductor engineers & management',
      '100% Clear Title NA with Plan Pass & sub-registrar ready registry',
      'Direct connectivity to main arterial roads and express transport corridors',
      '3D Google Earth KML/KMZ layout available for virtual survey'
    ],
    amenities: [
      { name: 'Smart Gated Township', desc: 'Secure entrance with RFID scanning & surveillance', icon: 'ShieldCheck' },
      { name: 'Asphalt Roadways', desc: '12m & 18m internal roads built to industrial durability specs', icon: 'Footprints' },
      { name: 'High-Capacity Power', desc: 'Underground cabling with dedicated feeder connections', icon: 'Zap' },
      { name: 'Central Community Park', desc: 'Landscaped recreational greens with sports court', icon: 'Trees' },
      { name: 'Fresh Water Grid', desc: 'Individual plot water connections with pressurization', icon: 'Droplets' }
    ],
    connectivity: [
      { place: 'Tata Semiconductor Fab ($11B Mega Plant)', time: '3 Mins', distance: '1.9 km' },
      { place: 'Ahmedabad-Dholera Expressway', time: '4 Mins', distance: '2.8 km' },
      { place: 'ABCD Administrative Center (TP2)', time: '5 Mins', distance: '3.4 km' },
      { place: 'Dholera International Airport', time: '11 Mins', distance: '12.5 km' }
    ]
  },
  {
    id: 'nestoria-emerald-commercial',
    slug: 'nestoria-emerald-commercial-hub-bhangadh',
    title: 'Emerald Commercial Hub',
    tagline: 'Premier Multi-Purpose Commercial & Retail Enclave in Bhangadh',
    type: 'commercial',
    category: 'Commercial Plots & Showrooms',
    status: 'Running Project (2026)',
    statusType: 'ready',
    isRunningProject: true,
    surveyNo: 'Survey No. 400 / 400p1',
    village: 'Bhangadh',
    featured: true,
    location: 'Bhangadh (Survey No. 400), Main Commercial Arterial Road, Dholera SIR',
    zone: 'High-Density Commercial & Mixed-Use Corridor',
    price: '₹ 38.0 Lakhs onwards',
    pricePerSqYd: '₹ 9,200 / sq.yd',
    plotSizes: '300, 500, 1,000 & 2,500 Sq. Yards',
    areaRange: '2,700 - 22,500 Sq. Ft.',
    totalUnits: '42 Premium Commercial Parcels',
    image: emeraldBanner,
    gallery: [emeraldBanner, emeraldLayout, emeraldLocation, emeraldSurvey],
    reraNumber: 'NA Multi-Purpose Commercial Approved / Registered Sale Deed 4438',
    possession: 'Immediate Registry & Construction Ready',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1YPjd_OklZyGxNtdCgc37kngT_vF_VJeV',
    kmzFileUrl: 'https://drive.google.com/file/d/1rRODe1_iMcOQFTg1thTLypYPqQPpGa7Y/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/1nSerJAUNHZlinwAWS-JzyN9z2zqsaoDU/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/1SO4ApSstWH0cMK8EyFKZGvfG3TXzfnUf/view?usp=sharing',
    legalDocuments: [
      { name: 'NA Final Order (Multi-Purpose Commercial)', driveId: '1dVeJjTbZu48C9Bf0_qFml81oW5RZVuxF', type: 'NA Order' },
      { name: 'Bhangadh 400 Official Approved Layout Plan', driveId: '1GftjK9tRwk-UnJV0t_UzOfwxxe5A4rmI', type: 'Layout Plan' },
      { name: 'Government Zoning Certificate (Commercial High Street)', driveId: '1vtQT8ZVeLnttCRykrQgNahPuUIOLTlx1', type: 'Zoning Certificate' },
      { name: 'Registered Sale Deed No. 4438 in Favor of Nestoria Buildcon', driveId: '1PKtmRWau5Yq6QWgvTVTSKfw_hliLJyaU', type: 'Sale Deed' },
      { name: 'Verified Legal Title Search Report (NJ-HM)', driveId: '1jGvGkJJaYHzMIJIHZlgYlxPpzp829awf', type: 'Title Report' },
      { name: 'Official Paper Notice for Title Clearance', driveId: '1XEkrBvAde5kzJRvPxPXyKb4b_Xox7oB0', type: 'Paper Note' }
    ],
    videoUrls: [
      { title: 'Emerald Commercial Hub Location & Master Frontage', driveId: '1nSerJAUNHZlinwAWS-JzyN9z2zqsaoDU' }
    ],
    description: 'Emerald Commercial Hub in Bhangadh (Survey No. 400 / 400p1) is an elite multi-purpose commercial plotted development specifically approved for retail showrooms, corporate offices, banks, multi-specialty healthcare, and hospitality ventures.',
    overview: 'Boasting expansive frontage along major 45m and 55m TP arterial roads with high FSI permissions, Registered Sale Deed No. 4438, and Multi-Purpose NA approvals, Emerald Commercial Hub provides unmatched commercial returns and corporate lease appeal.',
    highlights: [
      'Survey No. 400, Bhangadh – High-density commercial and retail highway corridor',
      '100% Multi-Purpose NA Commercial Sanction & Registered Sale Deed No. 4438',
      'High FSI permission for multi-storey commercial complexes and hotels',
      'Heavy 3-phase commercial electrical grid & high-capacity water drainage',
      'Ready for immediate sub-registrar registry and corporate deed execution'
    ],
    amenities: [
      { name: 'High Floor Space Index (FSI)', desc: 'Approved for multi-storey corporate towers & retail malls', icon: 'Home' },
      { name: 'Dedicated Customer Parking', desc: 'Spacious surface and multi-level parking allocations', icon: 'Footprints' },
      { name: 'Heavy Commercial Power', desc: 'Direct 3-phase industrial/commercial transformer access', icon: 'Zap' },
      { name: 'High-Speed Telecom Ducting', desc: 'Fiber-optic conduit infrastructure for uninterrupted IT operations', icon: 'Sun' }
    ],
    connectivity: [
      { place: 'ABCD Administrative Center (TP2)', time: '2 Mins', distance: '1.4 km' },
      { place: 'Ahmedabad-Dholera Expressway Toll Junction', time: '3 Mins', distance: '2.0 km' },
      { place: 'Tata Semiconductor Fab', time: '6 Mins', distance: '4.5 km' },
      { place: 'Dholera International Cargo Airport', time: '9 Mins', distance: '10.5 km' }
    ]
  },
  {
    id: 'nestoria-homes',
    slug: 'nestoria-homes-adhelai',
    title: 'Nestoria Homes',
    tagline: 'Master-Planned Gated Residential Plotted Township in Adhelai',
    type: 'residential',
    category: 'Gated Residential Township',
    status: 'Running Project (2026)',
    statusType: 'ongoing',
    isRunningProject: true,
    surveyNo: 'Survey No. 74/P1',
    village: 'Adhelai',
    featured: true,
    location: 'Adhelai (Survey No. 74/P1), Near Knowledge & IT Corridor, Dholera SIR',
    zone: 'TP 1 / TP 2 Residential Smart Enclave',
    price: '₹ 16.0 Lakhs onwards',
    pricePerSqYd: '₹ 4,800 / sq.yd',
    plotSizes: '160, 225, 350 & 700 Sq. Yards',
    areaRange: '1,440 - 6,300 Sq. Ft.',
    totalUnits: '140 Residential Plots',
    image: nestoriaHomesBanner,
    gallery: [nestoriaHomesBanner, nestoriaHomesLayout, nestoriaHomesLocation, nestoriaHomesAmenities],
    reraNumber: 'NA Approved Clear Title / Plan Pass Sanctioned',
    possession: 'Immediate Registry',
    driveFolderUrl: 'https://drive.google.com/drive/folders/19pmXfmc0fry9a7DEolX9dX6KRm3bOLsW',
    kmzFileUrl: 'https://drive.google.com/file/d/1HxubjQ4bKbWqhdn9tJejqNQiwlBXQqWN/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/1uCSm37IjeYo3j7RzgDGNICILooAncIve/view?usp=sharing',
    bookingFormUrl: 'https://drive.google.com/file/d/1T8IPJYaNVPDcEqxnuhhWlKMoQDTJoFpt/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/1nyLQFxJftwPPxvTFLPVkodCF2LqlQ0-b/view?usp=sharing',
    legalDocuments: [
      { name: 'Official NA Order (Residential Purpose)', driveId: '1lQVvolVTAkOSDIiwcQS0p09a1nBgNzpn', type: 'NA Order' },
      { name: 'Nestoria Homes Approved Plan Pass', driveId: '1Lvibysh687e8aL4UABZ-g9dWxwuGgsGR', type: 'Plan Pass' },
      { name: 'Sub-Registrar Registry Documentation', driveId: '1E-Xj7jZuvx742Sd4Xz2iyxS53ibfXETF', type: 'Registry Document' },
      { name: 'Legal Title Verification Report', driveId: '1EjV6EKOvjTuZLNWCfdVoRD2UjXcyPh5S', type: 'Title Report' },
      { name: 'Public Paper Note for Clear Title', driveId: '1QEm15GSys_7-PtCdQS9Sys6QRFMgQEDV', type: 'Paper Note' }
    ],
    videoUrls: [
      { title: 'Nestoria Homes Future Master Plan Video', driveId: '1GiFO82gVJiB4NJLgltPT868GfMvM2a1a' },
      { title: 'Nestoria Homes Ground Work & Construction Video', driveId: '1WJdv7Gegklpd1Vdjwn7guBS3Sq1Svt9T' },
      { title: 'Nestoria Homes Complete Walkthrough', driveId: '1BZE22Afg_ev1H6XlAoYyb_eJ8YZPeIfU' }
    ],
    description: 'Nestoria Homes in Adhelai (Survey No. 74/P1) offers meticulously engineered plotted land with fully built internal road networks, perimeter fencing, security cabins, and water drainage systems ready for immediate residential construction.',
    overview: 'Located close to the educational and knowledge hub of Dholera SIR, this running project offers an outstanding combination of affordability, robust appreciation, and transparent legal documentation.',
    highlights: [
      'Survey No. 74/P1, Adhelai – Strategic residential location near knowledge cluster',
      '100% Clear Title NA with Plan Pass and official government sub-registrar registry',
      'Affordable entry pricing with flexible 12-month installment schedules',
      'Fully demarcated individual plot stones and wide paved internal roads',
      'Complete Google Earth KMZ map and documentation dossier available'
    ],
    amenities: [
      { name: 'Gated Security Cabin', desc: '24/7 security guard post with boom barriers', icon: 'ShieldCheck' },
      { name: 'Tree-Lined Internal Avenues', desc: 'Wide paved streets with landscaped sidewalks', icon: 'Trees' },
      { name: 'Water & Electricity Hookups', desc: 'Ready-to-connect utility points at each plot corner', icon: 'Zap' },
      { name: 'Children Play Area', desc: 'Dedicated outdoor playground and family sitting areas', icon: 'Home' }
    ],
    connectivity: [
      { place: 'Expressway Connector', time: '4 Mins', distance: '2.6 km' },
      { place: 'Dholera International Airport', time: '13 Mins', distance: '14.2 km' },
      { place: 'Knowledge Hub & University Zone', time: '5 Mins', distance: '3.8 km' },
      { place: 'ABCD Administrative Complex', time: '7 Mins', distance: '5.5 km' }
    ]
  },
  {
    id: 'nestoria-skyline-imperia',
    slug: 'nestoria-skyline-imperia-sodhi',
    title: 'Skyline Imperia',
    tagline: 'Master-Planned Residential & High-Street Plotted Township in Sodhi',
    type: 'residential',
    category: 'Premium Residential & Commercial Plots',
    status: 'Running Project (2026)',
    statusType: 'ready',
    isRunningProject: true,
    surveyNo: 'Survey No. 96 / 96p1',
    village: 'Sodhi',
    featured: true,
    location: 'Sodhi (Survey No. 96), TP 2 Main Access Highway, Dholera SIR',
    zone: 'TP 2 Smart City High-Value Corridor',
    price: '₹ 20.0 Lakhs onwards',
    pricePerSqYd: '₹ 5,400 / sq.yd',
    plotSizes: '200, 300, 500 & 1,000 Sq. Yards',
    areaRange: '1,800 - 9,000 Sq. Ft.',
    totalUnits: '98 Premium Residential & Retail Plots',
    image: orchidVillaLuxuriya,
    gallery: [orchidVillaLuxuriya, orchidRiverView, orchidLuxury, commercialProject],
    reraNumber: 'Final NA Order (Residential & Commercial) / Registered Sale Deed 4467',
    possession: 'Immediate Registry & Ready for Possession',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1f7sepHdIKoDBoZlCfprPVDt3nB1EU5R3',
    kmzFileUrl: 'https://drive.google.com/file/d/1eC8MWlIWj3klofj4S-PucZ3ixGaR_ep8/view?usp=sharing',
    brochureUrl: 'https://drive.google.com/file/d/17IQq8Y8wyQTH41bvgRe2qeYLZOfGQWSA/view?usp=sharing',
    paymentPlanUrl: 'https://drive.google.com/file/d/12H6QLjD6sLA0E4c-6BFwbPQzaFmdO9W_/view?usp=sharing',
    legalDocuments: [
      { name: 'Final NA Order (Residential & Commercial Purpose)', driveId: '1QwMZr9PhrjW9B0gad-Hm4-1wKIk8bTnT', type: 'NA Order' },
      { name: 'Government Zoning Certificate (TP Master Plan)', driveId: '1kGcT67kVf4F13fAszc5LsqtBONQh3hcF', type: 'Zoning Certificate' },
      { name: 'Registered Sale Deed No. 4467 in Favor of Nestoria Buildcon', driveId: '1x8-YlYz_XNiTEyXgvCeSpcuvCWTXahKI', type: 'Sale Deed' },
      { name: 'Verified Legal Title Report (NJ-HM)', driveId: '1aKwzS2BmTrWuvaQ1A5n0ZFxoSzaULD27', type: 'Title Report' },
      { name: 'Official TP Map (Sodhi 96 Residential TP Map)', driveId: '12xs1G1jbPWk5PT0GFNRRmzNYqUJ4TZQ3', type: 'TP Map' },
      { name: 'Approved Skyline Imperia Sodhi 96 Layout Plan', driveId: '1u0GSd1f7e5raD8fiVWp0zKXUWhSRof7x', type: 'Layout Plan' },
      { name: 'Area Table & Plot Metric Schedule', driveId: '1dnGLuHmmTgS4-BtSpevwd-pBXD8L6nBR', type: 'Area Table' }
    ],
    videoUrls: [
      { title: 'Skyline Imperia Sodhi 96 Master Tour', driveId: '17IQq8Y8wyQTH41bvgRe2qeYLZOfGQWSA' }
    ],
    description: 'Skyline Imperia in Sodhi (Survey No. 96 / 96p1) is an elite master-planned plotted enclave providing both prime residential and high-street commercial land. Located along the 55-meter Town Planning highway corridor, it ensures high visibility and immediate highway accessibility.',
    overview: 'With Final NA Order, Government Zoning Certificate, Registered Sale Deed No. 4467, and official TP maps, Skyline Imperia provides the highest standard of legal security and capital appreciation.',
    highlights: [
      'Survey No. 96, Sodhi – Direct access on 55m TP master arterial highway',
      '100% Final NA Order for both Residential and Commercial development',
      'Registered Sale Deed No. 4467 in favor of Nestoria Buildcon Pvt. Ltd.',
      'Comprehensive TP Map and sanctioned layout plan available in Google Earth KMZ',
      'Immediate sub-registrar registry with complete legal paperwork provided'
    ],
    amenities: [
      { name: 'Grand Entrance Gateway', desc: 'Ornamental archway with security cabins and CCTV', icon: 'ShieldCheck' },
      { name: 'Dual Commercial & Residential Zones', desc: 'Dedicated sectors for quiet living and commercial convenience', icon: 'Home' },
      { name: 'Heavy Paved Roads', desc: '12m, 18m, and 24m wide concrete roads with drainage', icon: 'Footprints' },
      { name: 'Landscaped Central Park', desc: 'Lush green recreational lawns with gazebos & jogging tracks', icon: 'Trees' },
      { name: 'Underground Infrastructure', desc: 'Concealed power, water supply, and stormwater conduits', icon: 'Zap' }
    ],
    connectivity: [
      { place: 'Ahmedabad-Dholera Expressway', time: '3 Mins', distance: '1.9 km' },
      { place: 'Tata Semiconductor Fab', time: '6 Mins', distance: '4.8 km' },
      { place: 'ABCD Building (TP2)', time: '5 Mins', distance: '3.7 km' },
      { place: 'Dholera International Cargo Airport', time: '10 Mins', distance: '11.5 km' }
    ]
  },

  // ==========================================
  // ESTABLISHED TOWNSHIPS & MASTER DEVELOPMENTS
  // ==========================================
  {
    id: 'dholera-bhoomi-1',
    slug: 'dholera-bhoomi',
    title: 'Dholera Bhoomi',
    tagline: 'Flagship Gated Residential Community in Prime Activation Zone',
    type: 'residential',
    category: 'Residential Plots & Villas',
    status: 'Ready for Registry',
    statusType: 'ready',
    featured: true,
    location: 'TP 2 - Activation Area Zone, Dholera SIR',
    zone: 'Town Planning 2 (TP2A High-Priority)',
    price: '₹ 14.5 Lakhs onwards',
    pricePerSqYd: '₹ 4,500 / sq.yd',
    plotSizes: '150, 200, 300, 500 & 1,000 Sq. Yards',
    areaRange: '1,350 - 9,000 Sq. Ft.',
    totalUnits: '148 Premium Plots',
    image: dholeraBhoomi,
    gallery: [dholeraBhoomi, natureNest, sunshineResidency],
    reraNumber: 'AUDA & Dholera SIRDA Approved / Clear Title',
    possession: 'Immediate Registry & Possession',
    description: 'Dholera Bhoomi is Nestoria Group’s landmark residential plotting project located in the heart of Town Planning 2. Designed for visionary investors and homeowners, it provides 100% legally clear title, NA (Non-Agricultural) plotted land with underground smart utilities and immediate registry.',
    overview: 'Positioned close to the upcoming ABCD building and express highway junction, Dholera Bhoomi represents the pinnacle of smart-city urban living with zero pollution, green boulevards, and rapid capital appreciation potential.',
    highlights: [
      'Immediate Registry & Sub-Registrar Clear Title',
      'Direct connectivity to Ahmedabad-Dholera 6-Lane Expressway',
      'Located within 5 minutes of Dholera Activation Zone (TP2A)',
      '100% NA Plotted Project with AUDA / Dholera SIRDA clearance',
      'Equipped with 12m & 18m internal wide concrete roads'
    ],
    amenities: [
      { name: 'Gated Community', desc: 'Secured grand entry gate with 24/7 security & CCTV coverage', icon: 'ShieldCheck' },
      { name: 'Wide Internal Roads', desc: '12m & 18m paved concrete roads with roadside curbstones', icon: 'Footprints' },
      { name: 'Underground Utilities', desc: 'Concealed power lines, optical fiber, and fresh water supply', icon: 'Zap' },
      { name: 'Landscaped Green Parks', desc: 'Lush community gardens with gazebos and jogging tracks', icon: 'Trees' },
      { name: 'Water Drainage & Harvesting', desc: 'Rainwater harvesting system with storm-water drainage', icon: 'Droplets' },
      { name: 'Solar Street Lights', desc: 'Energy-efficient automated LED solar street lamps', icon: 'Sun' },
      { name: 'Children Play Arena', desc: 'Safe, rubberized playground with premium swings & slides', icon: 'Smile' },
      { name: 'Clubhouse & Gazebo', desc: 'Community leisure pavilion for weekend family gatherings', icon: 'Home' }
    ],
    connectivity: [
      { place: 'Ahmedabad-Dholera Expressway', time: '3 Mins', distance: '1.8 km' },
      { place: 'Dholera International Airport', time: '12 Mins', distance: '14 km' },
      { place: 'ABCD Administrative Hub (TP2)', time: '5 Mins', distance: '3.5 km' },
      { place: 'Tata Semiconductor Fab ($11B Hub)', time: '8 Mins', distance: '6.2 km' },
      { place: 'Dholera Metro Station (Proposed)', time: '4 Mins', distance: '2.5 km' },
      { place: '4,400 MW Solar Park', time: '15 Mins', distance: '18 km' }
    ]
  },
  {
    id: 'dholera-bhoomi-2',
    slug: 'dholera-bhoomi-phase-2',
    title: 'Dholera Bhoomi Phase II',
    tagline: 'High-Growth Smart Residential Plotted Township',
    type: 'residential',
    category: 'Residential Plots',
    status: 'Fast Selling',
    statusType: 'ongoing',
    featured: true,
    location: 'TP 2 - Knowledge & IT Corridor, Dholera SIR',
    zone: 'TP 2 Smart City Zone',
    price: '₹ 16.2 Lakhs onwards',
    pricePerSqYd: '₹ 4,800 / sq.yd',
    plotSizes: '175, 250, 400 & 800 Sq. Yards',
    areaRange: '1,575 - 7,200 Sq. Ft.',
    totalUnits: '120 Plots',
    image: dholeraBhoomi2,
    gallery: [dholeraBhoomi2, dholeraBhoomi3, orchidVillaGreens],
    reraNumber: 'Dholera SIRDA Compliant / NA NOC Clear',
    possession: 'Immediate Registry',
    description: 'Following the immense success of Phase I, Dholera Bhoomi Phase II delivers upgraded civic infrastructure, wider tree-lined avenues, integrated compound walls, and close proximity to the proposed IT & Knowledge Park.',
    overview: 'Strategically located within the rapid development zone, this project offers flexible installment options and high appreciation backed by government investments in expressway connectivity and water treatment facilities.',
    highlights: [
      'Adjoining 30-meter Development Plan (DP) road',
      'High appreciation corridor adjacent to Knowledge City',
      'Secured gated boundary with individual plot demarcations',
      'Bank loan and easy installment support available'
    ],
    amenities: [
      { name: '24/7 Security Cabin', desc: 'Manned entrance with boom barriers and surveillance', icon: 'ShieldCheck' },
      { name: 'Internal Asphalt Roads', desc: 'Heavy-duty asphalt roads with stormwater gutters', icon: 'Footprints' },
      { name: 'Dedicated Water Line', desc: 'Central overhead water tank with direct plot connections', icon: 'Droplets' },
      { name: 'Lush Avenue Plantation', desc: 'Over 500+ shade-bearing and flowering trees planted', icon: 'Trees' },
      { name: 'Meditation Zone', desc: 'Peaceful open-air yoga and meditation deck', icon: 'Heart' }
    ],
    connectivity: [
      { place: 'Expressway Interchange', time: '4 Mins', distance: '2.2 km' },
      { place: 'Dholera Cargo Airport', time: '14 Mins', distance: '15 km' },
      { place: 'Dholera City Center (TP1)', time: '7 Mins', distance: '5 km' },
      { place: 'Semiconductor Fabrication Park', time: '9 Mins', distance: '7 km' }
    ]
  },
  {
    id: 'orchid-river-view',
    slug: 'orchid-river-view',
    title: 'Orchid River View',
    tagline: 'Waterfront Living with Scenic Riverfront Promenade',
    type: 'residential',
    category: 'Scenic Waterfront Plots',
    status: 'Ready for Registry',
    statusType: 'ready',
    featured: true,
    location: 'Riverfront Corridor, TP 2, Dholera SIR',
    zone: 'Riverfront High-Value Zone',
    price: '₹ 19.5 Lakhs onwards',
    pricePerSqYd: '₹ 5,500 / sq.yd',
    plotSizes: '200, 350, 500 & 800 Sq. Yards',
    areaRange: '1,800 - 7,200 Sq. Ft.',
    totalUnits: '88 Exclusive Plots',
    image: orchidRiverView,
    gallery: [orchidRiverView, orchidVillaGold, palmVillas],
    reraNumber: '100% NA NOC Title Clear',
    possession: 'Immediate Registry',
    description: 'Orchid River View offers a serene waterfront living experience with landscaped riverside walkways, luxury gazebos, and unhindered green views while retaining swift access to Dholera Expressway.',
    overview: 'One of the most aesthetically pleasing projects in the entire SIR region, Orchid River View is ideal for luxury holiday homes, farmhouses, and long-term capital wealth creation.',
    highlights: [
      'Direct access to natural riverfront greens and walkway',
      'Ultra-exclusive low-density community layout',
      'Underground drainage with STP treated water recycling',
      'Immediate sub-registrar registry with official documentation'
    ],
    amenities: [
      { name: 'River Walkway', desc: 'Scenic paved walkway along the green buffer zone', icon: 'Trees' },
      { name: 'Sunset Gazebo', desc: 'Elevated sit-outs with riverfront views', icon: 'Sun' },
      { name: 'Club House', desc: 'Community center with library and event lawn', icon: 'Home' },
      { name: '24/7 CCTV & Guards', desc: 'Continuous round-the-clock patrol & monitoring', icon: 'ShieldCheck' }
    ],
    connectivity: [
      { place: 'Dholera Expressway', time: '5 Mins', distance: '2.8 km' },
      { place: 'International Airport', time: '13 Mins', distance: '14.5 km' },
      { place: 'Semiconductor Hub', time: '7 Mins', distance: '5.5 km' }
    ]
  },
  {
    id: 'commercial-hub-plots',
    slug: 'commercial-city-center',
    title: 'Nestoria Commercial City Center',
    tagline: 'High-Footfall Commercial Land Parcels & Retail Hubs',
    type: 'commercial',
    category: 'Commercial Plots & Showrooms',
    status: 'Ready for Registry',
    statusType: 'ready',
    featured: true,
    location: 'Central High Street, TP 2 Activation Area, Dholera SIR',
    zone: 'High Density Commercial Zone',
    price: '₹ 35.0 Lakhs onwards',
    pricePerSqYd: '₹ 9,500 / sq.yd',
    plotSizes: '300, 500, 1,000 & 2,500 Sq. Yards',
    areaRange: '2,700 - 22,500 Sq. Ft.',
    totalUnits: '36 Commercial Parcels',
    image: commercialProject,
    gallery: [commercialProject, industrialProject, orchidVillaGold],
    reraNumber: 'Commercial NA Approved Title Clear',
    possession: 'Immediate Registry',
    description: 'Positioned on the main 45-meter and 55-meter arterial DP roads of Dholera Activation Zone. Ideal for retail malls, corporate office headquarters, hotels, hospitals, and bank branches.',
    overview: 'With tens of thousands of engineers, consultants, and technicians migrating to Dholera for semiconductor and aerospace construction, commercial real estate demand is soaring.',
    highlights: [
      'Prime frontage on 55m major commercial highway corridor',
      'High Floor Space Index (FSI) approval for multi-storey development',
      'Immediate electricity substations & high-capacity water lines',
      'Unprecedented capital appreciation and rental yield potential'
    ],
    amenities: [
      { name: 'High FSI Permission', desc: 'Approved for multi-storey retail, hotel & office towers', icon: 'Home' },
      { name: 'Multi-Level Parking Area', desc: 'Ample customer and staff parking provisions', icon: 'Activity' },
      { name: 'Heavy Power Grid', desc: 'Dedicated 3-phase industrial/commercial electricity load', icon: 'Zap' },
      { name: 'Broadband Fiber Hub', desc: 'Dual-redundant high speed telecom connectivity', icon: 'Sun' }
    ],
    connectivity: [
      { place: 'ABCD Administrative Center', time: '1 Min', distance: '600 meters' },
      { place: 'Expressway Interchange', time: '2 Mins', distance: '1.2 km' },
      { place: 'Airport Cargo Terminal', time: '8 Mins', distance: '9 km' }
    ]
  },
  {
    id: 'industrial-logistics-park',
    slug: 'industrial-logistics-park',
    title: 'Nestoria Industrial & Logistics Park',
    tagline: 'Heavy & Light Manufacturing / Warehousing Plots',
    type: 'industrial',
    category: 'Industrial Land Parcels',
    status: 'Ready for Registry',
    statusType: 'ready',
    featured: true,
    location: 'Heavy Industrial Zone, TP 4 / TP 5, Dholera SIR',
    zone: 'Industrial & Logistics Corridor',
    price: '₹ 55.0 Lakhs onwards',
    pricePerSqYd: '₹ 4,200 / sq.yd',
    plotSizes: '1,000, 2,500, 5,000 & 10,000 Sq. Yards',
    areaRange: '9,000 - 90,000 Sq. Ft.',
    totalUnits: '24 Large Parcels',
    image: industrialProject,
    gallery: [industrialProject, commercialProject, dholeraBhoomi],
    reraNumber: 'Industrial NA NOC Approved',
    possession: 'Immediate Registry',
    description: 'Tailored for tier-1 suppliers, semiconductor ancillary units, cold storage facilities, electronics assembly, and logistics hubs. Direct access to Dholera Heavy Haul Freight Corridor and expressway.',
    overview: 'Benefit from Gujarat Government Industrial Subsidies, plug-and-play gas pipelines, high-tension power, and proximity to Tata Fab, Foxconn, and Micron ecosystem partners.',
    highlights: [
      'Direct connectivity to Dedicated Freight Corridor (DFC) rail spur',
      'Heavy vehicle 30m-wide reinforced asphalt truck avenues',
      'Industrial Effluent Treatment (CETP) network access',
      'Single-window government clearance and GST / capital subsidies'
    ],
    amenities: [
      { name: 'Heavy Vehicle Roads', desc: 'Reinforced 30m wide roads for 40-ton container trucks', icon: 'Footprints' },
      { name: 'High-Tension Power', desc: 'Direct 66kV substation feeder lines available', icon: 'Zap' },
      { name: 'Gas Pipeline Connection', desc: 'PNG industrial gas supply line along site boundary', icon: 'Droplets' },
      { name: 'Fire Safety Hydrants', desc: 'Integrated high-pressure industrial fire hydrants', icon: 'ShieldCheck' }
    ],
    connectivity: [
      { place: 'Ahmedabad-Dholera Expressway', time: '3 Mins', distance: '2.0 km' },
      { place: 'Dholera Dedicated Rail Freight', time: '5 Mins', distance: '3.5 km' },
      { place: 'Dholera International Cargo Airport', time: '9 Mins', distance: '10 km' }
    ]
  }
];

export const getProjectBySlug = (slug) => {
  return allProjects.find(p => p.slug === slug || p.id === slug);
};
