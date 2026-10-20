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

export const projects = [
  // Placeholders: replace with real work. Only add results you can back up.
  {
    placeholder: true,
    title: "WooCommerce store speed-up",
    problem: "What was slow or broken for the client?",
    solution: "What you changed, in plain language.",
    result: "The measurable outcome, for example load time before and after.",
    tech: ["WordPress", "WooCommerce", "PHP"],
    link: "",
  },
  {
    placeholder: true,
    title: "Stripe checkout integration",
    problem: "What did the client need from payments?",
    solution: "How you built and tested it.",
    result: "What improved for the client's customers.",
    tech: ["Stripe", "WooCommerce", "AJAX"],
    link: "",
  },
  {
    placeholder: true,
    title: "Client-managed marketing site",
    problem: "What did the client need to change themselves?",
    solution: "The editing structure you set up.",
    result: "How their workflow got easier.",
    tech: ["ACF", "Divi", "CSS"],
    link: "",
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
