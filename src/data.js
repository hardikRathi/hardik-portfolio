// Edit this file to update the site. Empty links are hidden automatically.
export const profile = {
  name: "Hardik Kumar",
  role: "WordPress and WooCommerce developer",
  headline: "I build fast WooCommerce sites that clients can run themselves.",
  intro:
    "Nearly four years of backend WordPress work: performance and Core Web Vitals, Stripe payments, API integrations, custom plugins and ACF-driven sites. I also handle client communication and mentor junior developers, so projects stay on track.",
  location: "Jaipur, Rajasthan, India",
  email: "rathihardik4040@gmail.com",
  links: {
    linkedin: "", // TODO: paste your LinkedIn URL
    github: "", // TODO: paste your GitHub URL
    wordpress: "https://profiles.wordpress.org/hardikhuptechdev/",
  },
  resumeUrl: "", // TODO: put a contact-free resume at public/resume.pdf, then set "/resume.pdf"
};

export const services = [
  { title: "Speed optimization", text: "Faster load times and better Core Web Vitals for existing sites, so visitors stay and stores convert." },
  { title: "WooCommerce and payments", text: "Store setup and Stripe checkout flows that are smooth and secure." },
  { title: "Custom features", text: "New functionality built inside existing plugins and themes, without breaking what works." },
  { title: "Sites you can edit", text: "Flexible ACF layouts so your team updates content without calling a developer." },
  { title: "Integrations and automation", text: "REST API, GraphQL and HubSpot form integrations, plus scheduled jobs for repetitive tasks." },
];

// Add one screenshot per project in public/projects/ and match the file names below.
export const projects = [
  {
    title: "Best Cataract Surgeons",
    kind: "Surgeon directory, USA",
    url: "https://bestcataractsurgeons.com/",
    image: "/projects/best-cataract-surgeons.png",
    summary: "A nationwide directory that helps patients find a cataract surgeon near them.",
    contribution: "Built the map-based surgeon search. Visitors can look within a chosen radius, or search by ZIP code, city or state.",
    tags: ["WordPress", "Maps", "Location search"],
  },
  {
    title: "RoboMQ",
    kind: "Company website, workforce identity software",
    url: "https://www.robomq.io/",
    image: "/projects/robomq.png",
    summary: "The marketing site for RoboMQ's Hire2Retire platform, which automates employee onboarding and offboarding.",
    contribution: "Optimized site performance and helped it pass Core Web Vitals. Also connected HubSpot forms to capture more leads.",
    tags: ["WordPress", "Core Web Vitals", "HubSpot"],
  },
  {
    title: "Tappit Cards",
    kind: "Digital business cards",
    url: "https://tappitcards.com/",
    image: "/projects/tappit-cards.png",
    summary: "NFC and QR business cards that open a person's digital profile with a single tap or scan.",
    contribution: "Helped build profile creation. Users make a fully customizable profile, and their QR code opens it for anyone who scans.",
    tags: ["WordPress", "QR codes", "Custom profiles"],
  },
];

export const experience = [
  {
    company: "RoboMQ",
    role: "WordPress Developer",
    period: "Apr 2026 to present",
    place: "Jaipur",
    points: [
      "Develop and maintain WordPress solutions with clean, scalable backend code.",
      "Optimized the company website's performance and contributed to passing Core Web Vitals.",
      "Integrated HubSpot forms across the website to capture more leads and support sales growth.",
    ],
  },
  {
    company: "IceCube Digital",
    role: "WordPress Developer",
    period: "Jan 2025 to Apr 2026",
    place: "Ahmedabad",
    points: [
      "Built and extended WooCommerce stores, customizing plugins and tuning store performance.",
      "Implemented REST API integrations between WordPress and external systems.",
      "Designed scheduled cron jobs that automated repetitive tasks.",
      "Delivered ACF-driven sites with modular content that non-technical clients manage on their own.",
      "Created responsive layouts with Divi and WPBakery.",
    ],
  },
  {
    company: "Huptech Web",
    role: "WordPress Developer",
    period: "Nov 2022 to Jan 2025",
    place: "Ahmedabad",
    points: [
      "Built and maintained WooCommerce and ACF-based sites with a focus on backend architecture.",
      "Integrated and optimized Stripe payment gateways, and used GraphQL for data queries.",
      "Ran speed optimization projects that significantly improved load times on multiple client sites.",
      "Built responsive front ends with Avada and Elementor.",
      "Handled project coordination and client communication, and interviewed junior WordPress candidates.",
    ],
  },
];

export const skills = [
  { group: "Core", items: ["WordPress", "WooCommerce", "PHP", "Custom plugin development", "ACF"] },
  { group: "Backend and APIs", items: ["REST API", "GraphQL", "Stripe", "AJAX", "Cron jobs", "SQL"] },
  { group: "Frontend", items: ["JavaScript", "jQuery", "CSS", "Elementor", "Avada", "Divi", "WPBakery"] },
  { group: "Performance", items: ["Speed optimization", "Store performance tuning"] },
  { group: "Tools", items: ["Git", "Postman", "Figma"] },
  { group: "Professional", items: ["Client communication", "Demonstrations", "Team collaboration", "Mentorship"] },
];

export const education = "B.Tech in Computer Science and Engineering, Parul Institute of Engineering and Technology, Vadodara, 2018 to 2022";