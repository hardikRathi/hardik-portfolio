// Edit this file to update the site. Empty links are hidden automatically.
export const profile = {
  name: "Hardik Kumar",
  role: "WordPress and WooCommerce developer",
  headline: "I build fast WooCommerce sites that clients can run themselves.",
  intro:
    "Three years of backend WordPress work: speed optimization, Stripe payments, custom plugin features and ACF-driven sites. I also handle client calls and demos, so projects stay on track.",
  location: "Gujarat, India",
  email: "rathihardik4040@gmail.com",
  links: {
    linkedin: "", // TODO: paste your LinkedIn URL
    github: "", // TODO: paste your GitHub URL
    wordpress: "https://profiles.wordpress.org/hardikhuptechdev/",
  },
  resumeUrl: "", // TODO: put a contact-free resume at public/resume.pdf, then set "/resume.pdf"
};

export const services = [
  { title: "Speed optimization", text: "Faster load times for existing sites, so visitors stay and stores convert." },
  { title: "WooCommerce and payments", text: "Store setup and Stripe checkout flows that are smooth and secure." },
  { title: "Custom features", text: "New functionality built inside existing plugins and themes, without breaking what works." },
  { title: "Sites you can edit", text: "Flexible ACF layouts so your team updates content without calling a developer." },
  { title: "Integrations and automation", text: "REST API and GraphQL connections to other systems, plus scheduled jobs for repetitive tasks." },
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
    company: "IceCube Digital",
    role: "WordPress Developer",
    period: "2025 to present",
    place: "Ahmedabad",
    points: [
      "Improve back-end code and store performance on WooCommerce websites.",
      "Build custom features inside existing plugins.",
      "Connect WordPress to external systems with REST APIs and automate recurring work with cron jobs.",
      "Deliver ACF-driven sites with modular content that non-technical clients can manage.",
    ],
  },
  {
    company: "Huptech Web",
    role: "WordPress Developer",
    period: "2022 to 2024",
    place: "Ahmedabad",
    points: [
      "Built and maintained WooCommerce and ACF sites with a focus on backend architecture.",
      "Integrated and optimized Stripe payment gateways, and used GraphQL for data queries.",
      "Ran speed optimization projects that cut load times on client sites.",
      "Coordinated projects, spoke directly with clients, and interviewed junior WordPress candidates.",
    ],
  },
];

export const skills = [
  { group: "Backend", items: ["WordPress", "WooCommerce", "PHP", "SQL", "REST API", "GraphQL"] },
  { group: "Frontend", items: ["JavaScript", "jQuery", "AJAX", "CSS", "Avada", "Elementor", "Divi", "WPBakery"] },
  { group: "Tools", items: ["Git", "Postman", "Figma"] },
  { group: "Working style", items: ["Client demos", "Team collaboration", "Mentoring"] },
];

export const education = "B.Tech in Computer Science and Engineering, Parul Institute of Engineering and Technology, 2018 to 2022";
