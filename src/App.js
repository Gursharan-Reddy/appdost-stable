import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Smartphone, 
  Layout, 
  Database, 
  Shield, 
  Cloud, 
  Search, 
  Check, 
  Star, 
  Users,
  TrendingUp,
  Target,
  PenTool,
  Code,
  Rocket,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight
} from 'lucide-react';

// --- Main App Component ---
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // We need to install lucide-react first!
    // npm install lucide-react
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen font-inter antialiased transition-colors duration-300">
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              AppDost
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollTo('#contact')}
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-transform transform hover:scale-105"
            >
              Get Consultation
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* --- Mobile Menu --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-lg border-t border-gray-200 dark:border-gray-800 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('#contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium w-full"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- Main Content --- */}
      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                AppDost
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Transforming Ideas Into Digital Reality</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">© {new Date().getFullYear()} AppDost. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <p className="text-gray-600 dark:text-gray-400 mb-3">Contact: hr@appdost.in</p>
             <div className="flex space-x-6">
               <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-500" aria-label="GitHub">
                 <Github size={24} />
               </a>
               <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-500" aria-label="LinkedIn">
                 <Linkedin size={24} />
               </a>
               <a href="mailto:hr@appdost.in" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-500" aria-label="Email">
                 <Mail size={24} />
               </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Hero Section ---
function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-6 py-24 md:py-32 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          <span className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
            Transform Your Ideas
          </span>
          <br />
          Into Digital Reality
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105 flex items-center gap-2"
          >
            Explore Our Services <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// --- Stats Section ---
function StatsSection() {
  const stats = [
    { value: '10+', label: 'Web Projects' },
    { value: '4+', label: 'Android Apps' },
    { value: '15+', label: 'Total Projects' },
    { value: '2025', label: 'Founded Year' },
  ];

  return (
    <section id="stats" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">{stat.value}</p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- About Section ---
function AboutSection() {
  const features = [
    { icon: <Target size={24} />, title: "User-Centric Design", desc: "Intuitive UI/UX that guarantees user satisfaction and engagement." },
    { icon: <Code size={24} />, title: "Cutting-Edge Technology", desc: "Latest frameworks and tools for scalable, robust solutions." },
    { icon: <Users size={24} />, title: "Client-Focused Approach", desc: "Your success is our priority, every step of the way." },
  ];

  return (
    <section id="about" className="container mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-500 mb-2">About AppDost</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6">
            Your Trusted Partner for Digital Transformation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Founded in 2025, AppDost is a full-service IT solutions provider specializing in turning innovative ideas into powerful, market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust, scalable software development.
          </p>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
          <InfoCard title="100%" subtitle="Client Satisfaction" />
          <InfoCard title="15+" subtitle="Projects Delivered" />
          <InfoCard title="24/7" subtitle="Support Available" />
          <InfoCard title="Fast" subtitle="Turnaround Time" />
        </div>
      </div>
    </section>
  );
}

const InfoCard = ({ title, subtitle }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transform transition-transform hover:scale-105">
    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500 mb-1">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
  </div>
);

// --- Services Section ---
function ServicesSection() {
  const services = [
    { icon: <Smartphone size={28} />, title: "Android App Development", desc: "Native & Hybrid apps built with the latest tech.", points: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"] },
    { icon: <Layout size={28} />, title: "Web Development", desc: "Responsive and scalable web applications.", points: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"] },
    { icon: <PenTool size={28} />, title: "UI/UX Development", desc: "Beautiful, intuitive user interfaces.", points: ["User Research", "Wireframing & Prototyping", "Brand Identity"] },
    { icon: <Database size={28} />, title: "CRM Software", desc: "Manage customer relationships and boost productivity.", points: ["Custom Development", "Integration Services", "Training & Support"] },
    { icon: <Cloud size={28} />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure (AWS, Azure, GCP).", points: ["Cloud Migration", "DevOps Services", "Performance Tuning"] },
    { icon: <Shield size={28} />, title: "Cybersecurity", desc: "Robust security solutions to protect your business.", points: ["Security Audits", "Penetration Testing", "Compliance"] },
  ];

  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-500 mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
            What We Do Best
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a complete suite of IT services to bring your vision from concept to reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.desc}</p>
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Process Section ---
function ProcessSection() {
  const steps = [
    { icon: <Search size={24} />, title: "1. Discovery & Planning", desc: "We deep dive into your requirements, analyze competitors, and create a comprehensive project roadmap." },
    { icon: <PenTool size={24} />, title: "2. Design & Prototype", desc: "Our team creates intuitive wireframes, stunning UI mockups, and interactive prototypes." },
    { icon: <Code size={24} />, title: "3. Development & Testing", desc: "Expert developers write clean, scalable code while our QA team performs rigorous testing." },
    { icon: <Rocket size={24} />, title: "4. Deployment & Support", desc: "We handle the complete deployment and provide ongoing 24/7 technical support." },
  ];

  return (
    <section id="process" className="container mx-auto px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-500 mb-2">Our Process</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
          A Proven Methodology
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our development process ensures quality, efficiency, and client satisfaction at every stage.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 w-full" style={{ top: '3.25rem' }}></div>
        
        <div className="grid md:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-white dark:bg-gray-950 z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6 ring-8 ring-white dark:ring-gray-950">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Projects Section ---
function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredProjects = [
    { title: "BEU Mate", desc: "An AI-powered study companion for B.Tech students offering personalized learning and career guidance.", tags: ["React Native", "Node.js", "AI/ML"] },
    { title: "Devskillquest", desc: "Interactive learning platform for developers to master coding skills through hands-on projects.", tags: ["Next.js", "TypeScript", "PostgreSQL"] },
    { title: "The Weddings Chapter", desc: "A premium wedding planning platform connecting couples with top vendors, venues, and services.", tags: ["PHP", "Laravel", "MySQL"] },
  ];

  const openSourceProjects = [
    { title: "DeepFake Detection", desc: "Advanced deep learning model for detecting manipulated media using neural networks.", tags: ["Python", "Jupyter", "AI/ML"] },
    { title: "NooBot", desc: "Smart automation bot for task scheduling, data processing, and intelligent workflow automation.", tags: ["Python", "Automation"] },
    { title: "DialogFlow Chatbot", desc: "Intelligent chatbot using Google's DialogFlow for natural language processing.", tags: ["DialogFlow", "NLP", "Chatbot"] },
  ];

  const projects = activeTab === 'featured' ? featuredProjects : openSourceProjects;

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-500 mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6">
            Our Featured Projects
          </h3>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2 rounded-md font-medium ${activeTab === 'featured' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-600 dark:text-gray-400'}`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('openSource')}
              className={`px-6 py-2 rounded-md font-medium ${activeTab === 'openSource' ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-600 dark:text-gray-400'}`}
            >
              Open Source
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-transform transform hover:-translate-y-2">
    <div className="p-8 flex-grow">
      <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800/50 p-6">
      <a 
        href="#" 
        className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        View Project <ArrowRight size={18} />
      </a>
    </div>
  </div>
);

// --- Contact Section ---
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server or email service
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase text-blue-600 dark:text-blue-500 mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
            Get a Free Consultation
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have an idea? Let's talk about it. Fill out the form and we'll get back to you as soon as possible to discuss your project.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-blue-600 dark:text-blue-500" />
              <span className="text-lg">hr@appdost.in</span>
            </div>
            <div className="flex items-center gap-4">
              <Users size={20} className="text-blue-600 dark:text-blue-500" />
              <span className="text-lg">Connect with us on social media</span>
            </div>
          </div>
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl"
        >
          {isSubmitted ? (
            <div className="text-center p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg">
              <Check size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Thank You!</h4>
              <p>Your message has been sent. We'll be in touch soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
