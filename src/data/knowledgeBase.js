// src/data/knowledgeBase.js
// Exhaustive knowledge engine for the offline AI Assistant
// Contains all Dholera SIR smart city facts, Nestoria Group projects, legal procedures,
// pricing, location connectivity, site visit logistics, and FAQs.

export const websiteKnowledgeBase = {
  company: {
    name: "Nestoria Group",
    tagline: "Most Trusted and Award-Winning Real Estate Developer in Dholera SIR",
    phone: "+919213005611",
    whatsapp: "+919213005611",
    email: "info@nestoriagroup.com",
    headOffice: "3rd Floor, Sarthik Annexe, Satellite Road, Iscon Cross Road, Ahmedabad - 380015, Gujarat, India",
    siteOffice: "Near ABCD Building, Activation Area TP 2A, Dholera SIR, Gujarat - 382455",
    workingHours: "Monday to Sunday: 9:30 AM – 7:00 PM IST",
    establishedYear: "2014",
    deliveredProjects: "12+ Delivered Townships",
    happyClients: "3,500+ Satisfied Investors Across 18+ Countries",
    totalAreaDeveloped: "25+ Million Sq. Ft. of prime land in Dholera SIR"
  },

  dholeraSIR: {
    overview: "Dholera Special Investment Region (SIR) is India's FIRST greenfield smart city, covering 920 sq. km (2 times larger than Mumbai and 6 times larger than Shanghai). Developed under DMIC (Delhi-Mumbai Industrial Corridor) with central and state government backing.",
    keyFacts: [
      "Total Area: 920 sq. km across 22 villages divided into 6 Town Planning (TP) Schemes.",
      "Activation Area (TP 2A): 22.5 sq. km with 100% completed world-class infrastructure, underground utilities, SCADA ICT command center, and ready-to-move plots.",
      "Semiconductor Mega Hub: Tata Electronics ₹91,000 Crore semiconductor fabrication plant in partnership with Taiwan's PSMC, alongside Micron & CG Power supply chains.",
      "Dholera International Greenfield Airport: 4,000m runway capable of landing 4E category cargo & passenger aircraft, operational target 2025-2026.",
      "Ahmedabad-Dholera 6-Lane Expressway: 109 km access-controlled high-speed expressway reducing travel time to 45 minutes.",
      "Renewable Power: 4,400 MW Mega Solar Park, making Dholera one of the greenest smart cities in the world.",
      "Underground Sensorized Utilities: 100% potable tap water, underground drainage, smart solid waste pneumatic chutes, gas pipelines, and underground 66kV power lines with zero exposed cables."
    ],
    growthPotential: "Land values in Dholera have appreciated over 400% in the last 4 years. With the opening of the international airport and expressway, independent analysts project a further 3x to 5x capital appreciation by 2028-2030."
  },

  investmentProcess: {
    steps: [
      "1. Free Site Visit / Virtual Consultation: Schedule a personalized guided tour of Dholera Activation Zone and Nestoria project sites with our senior property consultant.",
      "2. Plot Selection & Token: Choose your desired plot number, dimensions, and road facing. Book with a nominal token advance.",
      "3. Title & Document Verification: Receive the official legal docket including NA (Non-Agricultural) order, AUDA/Dholera SIRDA layout approvals, 7/12 extract, and Title Clear Certificate from our high court advocate.",
      "4. Agreement to Sale & Payment Plan: Execute agreement to sale with flexible zero-interest installment options or upfront full payment discount.",
      "5. Government Sub-Registrar Deed Execution: Official sale deed registered in your name at the Dholera Sub-Registrar office with instant biometric registry and 7/12 land title transfer."
    ],
    legalSafety: "All Nestoria Group projects are 100% NA (Non-Agricultural), Title Clear with official search reports, free of any legal litigation, and registered with local planning authorities (AUDA & Dholera SIRDA)."
  },

  siteVisitInfo: {
    pricing: "100% FREE & Complimentarily Organized by Nestoria Group.",
    pickupPoints: [
      "Ahmedabad Airport (Sardar Vallabhbhai Patel International Airport)",
      "Ahmedabad Railway Station (Kalupur / Sabarmati Junction)",
      "Nestoria Corporate Office (Satellite Road, Iscon Cross Road, Ahmedabad)",
      "Self-Drive direct to Dholera Site Office (Near ABCD Building, TP2A)"
    ],
    schedule: "Daily slots available at 9:00 AM, 11:00 AM, and 2:00 PM (includes air-conditioned vehicle transport, guided tour of ABCD Command Hub, Tata Fab site, Airport road, and lunch/refreshments)."
  },

  qaPairs: [
    {
      keywords: ["price", "cost", "rate", "sq yd", "budget", "starting price", "how much"],
      answer: "Nestoria Group offers plots starting from ₹ 11.5 Lakhs (Sunshine Residency) up to ₹ 28.0 Lakhs for luxury estate villas (Orchid Luxury), and commercial parcels from ₹ 35 Lakhs. Rates vary from ₹ 3,900 to ₹ 6,500 per sq. yard depending on Town Planning zone, road width, and proximity to the Expressway. Would you like to see our price list or calculate your EMI?"
    },
    {
      keywords: ["site visit", "visit", "see project", "tour", "pickup", "book visit", "dholera visit", "inspect"],
      answer: "We organize 100% FREE guided site visits every day with AC vehicle pickup from Ahmedabad Airport, Railway Station, or our Satellite Corporate Office! You get a guided tour of the Dholera Activation Area, ABCD Smart Building, Tata Semiconductor Fab, and all our projects. Would you like me to book your site visit right now?"
    },
    {
      keywords: ["legal", "title", "approval", "government", "auda", "sirda", "safe", "risk", "fraud", "registry"],
      answer: "All Nestoria Group projects are 100% Clear Title, NA (Non-Agricultural) sanctioned with Dholera SIRDA / AUDA approvals. We provide full legal dockets, 30-year search reports by High Court advocates, and execute direct registered sale deeds at the Government Sub-Registrar office in Dholera with instant 7/12 title mutation in your name."
    },
    {
      keywords: ["semiconductor", "tata", "chip", "micron", "factory", "investment", "fab"],
      answer: "Dholera is India's premier semiconductor hub! Tata Electronics is establishing an ₹91,000 Crore ($11 Billion) semiconductor fabrication facility in partnership with PSMC (Taiwan) in Dholera TP2, generating over 50,000 direct and indirect high-skilled jobs. Micron, Foxconn, and CG Power are also setting up supply chain operations nearby."
    },
    {
      keywords: ["airport", "international airport", "flight", "cargo", "runway"],
      answer: "The Dholera International Greenfield Airport is being constructed on 1,426 hectares of land with a 4,000-meter runway capable of handling Boeing 777 and Airbus A380 aircraft. It will operate as a major international cargo and passenger gateway, targeted for opening in 2025-2026. Nestoria projects are situated just 10-15 minutes from the airport."
    },
    {
      keywords: ["expressway", "highway", "road", "ahmedabad to dholera", "distance", "reach"],
      answer: "The Ahmedabad-Dholera 6-Lane Access-Controlled Expressway (NH-751) connects Sarkhej/Sanand in Ahmedabad directly to Dholera in just 40-45 minutes. The expressway is opening shortly with direct interchanges near our flagship projects Dholera Bhoomi and Orchid Villa Gold."
    },
    {
      keywords: ["dholera bhoomi", "bhoomi", "bhoomi phase 1", "bhoomi 2", "bhoomi 3"],
      answer: "Dholera Bhoomi (Phases I, II, and III) is our flagship gated residential plotting township in TP2 Activation Zone. Plot sizes range from 150 sq.yd to 1,200 sq.yd starting from ₹ 14.5 Lakhs with 12m-18m internal roads, 24/7 security, underground power/water, and immediate registry."
    },
    {
      keywords: ["orchid river view", "river view", "waterfront"],
      answer: "Orchid River View is our scenic waterfront residential project situated along the scenic riverfront corridor in TP2, Dholera SIR. Plot sizes range from 200 to 800 sq.yd starting from ₹ 19.5 Lakhs, featuring riverside walkways, sunset gazebos, and serene green buffers."
    },
    {
      keywords: ["orchid villa gold", "villa gold", "gold"],
      answer: "Orchid Villa Gold is our golden-standard luxury estate plotting enclave located in TP1 directly adjacent to the expressway junction. Plots range from 250 to 1,000 sq.yd starting from ₹ 21.0 Lakhs with resort swimming pool, tennis court, and underground utility trenches."
    },
    {
      keywords: ["contact", "phone", "number", "email", "office", "address", "location"],
      answer: "You can reach Nestoria Group at +919213005611 or info@nestoriagroup.com. Our Corporate HQ is located at 3rd Floor, Sarthik Annexe, Satellite Road, Iscon Cross Road, Ahmedabad, and our Dholera Site Office is right near the ABCD Building in TP2 Activation Zone."
    },
    {
      keywords: ["roi", "return", "appreciation", "profit", "growth", "why invest"],
      answer: "Dholera SIR is one of the highest-yield real estate corridors in Asia. Investors in Nestoria projects have seen over 400% capital growth over the past 4 years. With the ₹91k Cr Tata Fab, 6-lane expressway opening, international airport, and smart city infrastructure completion, property values are projected to multiply 3x to 5x by 2028-2030."
    },
    {
      keywords: ["brochure", "download", "pdf", "catalog", "masterplan", "layout"],
      answer: "You can download our complete project brochure and master layout plan instantly! Click the 'Download Brochure' action or leave your WhatsApp number and we will send the high-definition PDF directly to your phone within 30 seconds."
    },
    {
      keywords: ["loan", "emi", "finance", "bank", "installment", "payment plan"],
      answer: "Yes! We offer flexible payment options including 20% down payment with easy 12 to 24-month installment schedules at 0% interest, as well as bank loan assistance with leading nationalized and private banks with immediate title clearances."
    }
  ]
};

// Natural language query processor matching user questions to knowledge
export const queryKnowledgeEngine = (userQuery) => {
  const query = userQuery.toLowerCase().trim();
  
  if (!query) {
    return "Hello! I am Nestoria AI, your dedicated smart property consultant for Dholera SIR. How may I assist you today? You can ask about our projects, pricing, site visits, or legal approvals.";
  }

  // Exact greetings
  if (query.match(/^(hi|hello|hey|namaste|good morning|good afternoon|good evening|ola)/i)) {
    return "Hello! Welcome to Nestoria Group. I am your 24/7 AI Property Assistant for Dholera SIR. I can help you with:\n\n• 📍 Booking a FREE VIP Site Visit\n• 🏡 Exploring residential, commercial & villa projects\n• 💰 Checking pricing, plot sizes & EMI plans\n• 📑 Downloading brochures & legal approval docs\n• 🚀 Understanding Dholera SIR smart city & Tata Fab updates\n\nWhat would you like to explore today?";
  }

  // Check matching QA pairs by token scoring
  const queryTokens = query.split(/\W+/).filter(Boolean);
  let bestMatch = null;
  let highestScore = 0;

  for (const pair of websiteKnowledgeBase.qaPairs) {
    let score = 0;
    for (const keyword of pair.keywords) {
      if (query.includes(keyword)) {
        score += keyword.split(' ').length * 3; // multi-word keyword bonus
      } else {
        const kwTokens = keyword.split(' ');
        for (const token of queryTokens) {
          if (kwTokens.includes(token)) {
            score += 1;
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = pair;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return bestMatch.answer;
  }

  // Fallback intelligent summary with action prompts
  return `Thank you for asking about "${userQuery}".\n\nNestoria Group is Dholera SIR's premier real estate developer offering 100% Clear Title, AUDA/Dholera SIRDA approved NA residential and commercial plots starting from ₹11.5 Lakhs.\n\nKey highlights:\n• Proximity to 6-lane Expressway & International Airport\n• Next to Tata Electronics ₹91,000 Cr Semiconductor Fab\n• Immediate Sub-Registrar registry & 7/12 mutation\n\nWould you like to:\n1. 📍 Book a Free Guided Site Visit?\n2. 📑 Download our complete Project Brochure?\n3. 📞 Request an instant callback from our Senior Consultant?`;
};
