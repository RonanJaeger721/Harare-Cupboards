/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { 
  ChefHat, 
  Layout, 
  Monitor, 
  Cylinder as Ceiling, 
  Gem, 
  Paintbrush, 
  Hammer, 
  Home, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Clock,
  Send
} from 'lucide-react';

// --- Assets ---
const IMAGES = {
  hero: '/src/assets/images/luxury_kitchen_hero_1779181024581.png',
  wardrobe: '/src/assets/images/luxury_wardrobe_led_1779181041989.png',
  tvUnit: '/src/assets/images/tv_wall_unit_modern_1779181063511.png',
  ceiling: '/src/assets/images/suspended_ceiling_design_1779181078724.png',
  logo: '/src/assets/logo.png',
  // Placeholders for others
  granite: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  interior: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  carpentry: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
  renovation: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200'
};

const SERVICES = [
  { id: 'kitchens', title: 'Fitted Kitchens', icon: <ChefHat className="w-6 h-6" />, desc: 'Modern culinary spaces with premium finishes and ergonomic design.', img: IMAGES.hero },
  { id: 'wardrobes', title: 'Luxury Wardrobes', icon: <Layout className="w-6 h-6" />, desc: 'LED-integrated storage solutions that redefine elegance.', img: IMAGES.wardrobe },
  { id: 'tv-walls', title: 'TV Wall Units', icon: <Monitor className="w-6 h-6" />, desc: 'Bespoke entertainment features using natural textures and light.', img: IMAGES.tvUnit },
  { id: 'ceilings', title: 'Suspended Ceilings', icon: <Ceiling className="w-6 h-6" />, desc: 'Architectural ceiling solutions with ambient hidden lighting.', img: IMAGES.ceiling },
  { id: 'granite', title: 'Granite Installation', icon: <Gem className="w-6 h-6" />, desc: 'Precision-cut natural stone surfaces for kitchens and interiors.', img: IMAGES.granite },
  { id: 'finishing', title: 'Interior Finishing', icon: <Paintbrush className="w-6 h-6" />, desc: 'The final touch of luxury that brings your vision to life.', img: IMAGES.interior },
  { id: 'carpentry', title: 'Custom Carpentry', icon: <Hammer className="w-6 h-6" />, desc: 'Unique wooden creations tailored to your specific spatial needs.', img: IMAGES.carpentry },
  { id: 'renovation', title: 'Home Renovation', icon: <Home className="w-6 h-6" />, desc: 'Complete premium transformations for residential and commercial sites.', img: IMAGES.renovation },
];

const PORTFOLIO = [
  { id: 1, title: 'Minimalist Kitchen', category: 'Kitchen', img: IMAGES.hero, span: 'col-span-2 row-span-2' },
  { id: 2, title: 'LED Walk-in', category: 'Wardrobe', img: IMAGES.wardrobe, span: 'col-span-1 row-span-1' },
  { id: 3, title: 'Timber TV Wall', category: 'TV Unit', img: IMAGES.tvUnit, span: 'col-span-1 row-span-2' },
  { id: 4, title: 'Floating Ceiling', category: 'Ceiling', img: IMAGES.ceiling, span: 'col-span-1 row-span-1' },
  { id: 5, title: 'Granite Island', category: 'Finishing', img: IMAGES.granite, span: 'col-span-2 row-span-1' },
];

const REASONS = [
  'Modern Luxury Designs',
  'Custom-Made Solutions',
  'Premium Finishes',
  'Attention To Detail',
  'Professional Craftsmanship',
  'Quality Materials',
];

const STEPS = [
  { title: 'Consultation', desc: 'Understanding your vision and spatial requirements.' },
  { title: 'Design & Measurements', desc: 'Precise architectural planning and material selection.' },
  { title: 'Installation & Finishing', desc: 'Expert execution with a commitment to perfection.' },
];

const TESTIMONIALS = [
  { name: 'Tendai M.', role: 'Homeowner, Borrowdale', text: 'Harare Cupboards transformed my kitchen into a masterpiece. The attention to detail is world-class.' },
  { name: 'Sarah J.', role: 'Interior Designer', text: 'Professional, timely, and their finishes are absolutely premium. I always recommend them to my high-end clients.' },
  { name: 'Property Dev Co.', role: 'Developer', text: 'The suspended ceilings and TV walls in our latest luxury complex units were handled perfectly by the team.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* --- Sticky Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-stone-900 py-6 border-b border-white/5`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl transition-transform group-hover:scale-105 overflow-hidden">
              <img 
                src={IMAGES.logo} 
                alt="Harare Cupboards" 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-display font-bold text-xl text-stone-900">H</span>';
                }}
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              HARARE <span className="font-light text-white/60">CUPBOARDS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer text-white/70 hover:text-white transition-colors"
                id={`nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-lg bg-white text-stone-900 hover:bg-stone-100 rounded-full"
              id="nav-quote-btn"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white bg-white/10 rounded-full backdrop-blur-md" onClick={() => setIsMenuOpen(!isMenuOpen)} id="mobile-menu-toggle">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-display font-bold uppercase tracking-widest text-stone-900 hover:text-stone-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-stone-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Section 1: Hero --- */}
      <header id="hero" ref={heroRef} className="relative min-h-[110vh] flex items-stretch bg-white overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale, y }}
          className="grid lg:grid-cols-2 w-full h-screen sticky top-0"
        >
          {/* Left Column: Text Content */}
          <div className="flex items-center justify-center px-6 py-24 md:py-32 lg:px-12 xl:px-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-10 overflow-hidden">
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-[1px] bg-stone-900 opacity-30"
                ></motion.span>
                <span className="text-stone-900 text-[11px] uppercase tracking-[0.6em] font-bold opacity-80">
                  Bespoke Interior Excellence
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-medium text-stone-900 leading-[0.95] mb-12 tracking-tighter">
                Luxury <br/>
                <span className="italic font-light text-stone-500">Interior</span> <br/>
                Finishing.
              </h1>
              
              <p className="text-stone-600 text-lg md:text-xl mb-14 leading-relaxed font-light">
                Crafting premium fitted kitchens, designer wardrobes, and masterful architectural finishing to elevate modern Zimbabwean homes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto bg-stone-900 text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-800 transition-all shadow-2xl flex items-center justify-center gap-4 group rounded-full"
                  id="hero-cta-btn"
                >
                  Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="https://wa.me/263772584004"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-stone-900 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 border-b-2 border-stone-100 pb-2 hover:border-stone-900 transition-all"
                >
                  Consult on WhatsApp <MessageSquare size={14} className="text-green-600" />
                </a>
              </div>

              {/* Fractional indicators for luxury feel */}
              <div className="mt-20 flex gap-16 pt-10 border-t border-stone-100">
                <div className="space-y-1">
                  <p className="text-stone-400 text-[9px] uppercase tracking-[0.3em] font-bold">Materials</p>
                  <p className="text-stone-900 font-display text-xl">Imported</p>
                </div>
                <div className="space-y-1">
                  <p className="text-stone-400 text-[9px] uppercase tracking-[0.3em] font-bold">Precision</p>
                  <p className="text-stone-900 font-display text-xl">0.1mm</p>
                </div>
                <div className="space-y-1">
                  <p className="text-stone-400 text-[9px] uppercase tracking-[0.3em] font-bold">Support</p>
                  <p className="text-stone-900 font-display text-xl">24/7</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image Content */}
          <div className="relative h-[500px] lg:h-auto overflow-hidden lg:m-6 lg:rounded-[3rem] shadow-2xl border border-stone-100">
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src={IMAGES.hero} 
                alt="Luxury Kitchen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-stone-900/10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 lg:to-white/5"></div>
            
            {/* Floating Label on Image */}
            <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-md p-8 shadow-2xl hidden md:block rounded-3xl border border-white/20">
              <span className="text-stone-400 text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">Current Project</span>
              <p className="text-stone-900 font-display font-medium text-xl">Borrowdale Estate</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- Section 2: About --- */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-auto h-[500px] lg:h-[700px] overflow-hidden group rounded-[3rem] shadow-2xl"
            >
              <img 
                src={IMAGES.interior} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Luxury Interior" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 -right-10 bg-stone-900 text-white p-12 hidden xl:block shadow-2xl rounded-[2rem]">
                <span className="text-6xl font-display font-bold block mb-2">15+</span>
                <span className="text-[10px] uppercase tracking-widest font-medium opacity-70">Years of Luxury<br/>Excellence</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">About Harare Cupboards</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 mb-8 leading-tight">
                Crafting Exceptional Spaces for Modern Living
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
                <p>
                  Harare Cupboards specializes in premium interior finishing solutions. Our expertise spans from high-end fitted kitchens and wardrobes to architectural suspended ceilings and precision granite installations.
                </p>
                <p>
                  We believe that every detail matters. Our professional craftsmanship combined with modern luxury designs ensures that every residential or commercial project we undertake is a tailor-made masterpiece of interior solution.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                  <h4 className="text-stone-900 font-display font-bold text-2xl mb-1">Professional</h4>
                  <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Craftsmanship</p>
                </div>
                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                  <h4 className="text-stone-900 font-display font-bold text-2xl mb-1">Tailor-made</h4>
                  <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Services --- */}
      <section id="services" className="py-24 md:py-32 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-stone-900">
                Premium Finishing Services
              </h2>
            </div>
            <p className="text-stone-500 max-w-sm mb-4 font-light italic">
              From conception to installation, we provide end-to-end luxury solutions for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 group hover:bg-stone-900 transition-all duration-500 flex flex-col justify-between h-[480px] rounded-[2.5rem] shadow-sm hover:shadow-2xl border border-stone-100"
              >
                <div>
                  <div className="mb-8 p-5 bg-stone-50 rounded-2xl group-hover:bg-white/10 inline-block text-stone-900 group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 group-hover:text-white/60 transition-colors duration-500 leading-relaxed font-light text-sm">
                    {service.desc}
                  </p>
                </div>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full mt-10 py-5 text-[10px] uppercase tracking-widest font-bold border border-stone-200 text-stone-400 group-hover:border-white/20 group-hover:text-white hover:bg-white hover:text-stone-900 transition-all rounded-full"
                >
                  Request Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Portfolio --- */}
      <section id="portfolio" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Showcase</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-stone-900 mb-6">Explore Our Gallery</h2>
            <p className="text-stone-500 max-w-2xl mx-auto font-light">
              A curated collection of our finest works across Zimbabwe, showcasing the intersection of architecture and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8">
            {PORTFOLIO.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`${item.span} relative overflow-hidden group cursor-pointer shadow-sm rounded-[2.5rem] hover:shadow-2xl transition-all duration-700`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-2">{item.category}</span>
                  <h4 className="text-white text-2xl font-display font-medium">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="bg-transparent border border-stone-900 text-stone-900 px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all rounded-full" id="view-all-projects-btn">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 5: Why Choose Us --- */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden lg:rounded-[5rem] lg:mx-6 mb-24">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">The Advantage</span>
              <h2 className="text-4xl font-display font-medium mb-8 leading-tight">
                Why Work With <br/><span className="text-stone-400">Harare Cupboards?</span>
              </h2>
              <div className="space-y-4">
                {REASONS.map((reason, i) => (
                  <motion.div 
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-light text-stone-300 group-hover:text-white transition-colors">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 relative grid grid-cols-2 gap-6">
               <div className="grid gap-6 mt-12">
                  <div className="h-64 bg-stone-800 overflow-hidden rounded-[2rem]">
                    <img src={IMAGES.interior} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Detail" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-96 bg-stone-800 overflow-hidden rounded-[2rem]">
                    <img src={IMAGES.granite} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Detail" referrerPolicy="no-referrer" />
                  </div>
               </div>
               <div className="grid gap-6">
                  <div className="h-96 bg-stone-800 overflow-hidden rounded-[2rem]">
                    <img src={IMAGES.wardrobe} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Detail" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-64 bg-stone-800 overflow-hidden rounded-[2rem]">
                    <img src={IMAGES.tvUnit} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Detail" referrerPolicy="no-referrer" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 6: Process --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Proven Flow</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-stone-900 mb-6 italic">Our Masterful Process</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Architectural Timeline Line - hidden on mobile */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-100 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {STEPS.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 shadow-sm border border-stone-50 text-center flex flex-col items-center rounded-[2.5rem] hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-full bg-stone-900 text-white flex items-center justify-center font-display font-bold text-2xl mb-8 relative">
                    {index + 1}
                    <div className="absolute -inset-3 border border-stone-900/10 rounded-full animate-ping-slow"></div>
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4">{step.title}</h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7: Testimonials --- */}
      <section className="py-24 bg-stone-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-medium mb-6">Client <br/>Words</h2>
              <p className="text-stone-500 font-light leading-relaxed">Hear from those who transformed their homes with us.</p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 border border-stone-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-stone-200" />
                  </div>
                  <p className="text-stone-700 font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h5 className="font-bold text-stone-900">{t.name}</h5>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 8: CTA --- */}
      <section className="relative py-32 bg-stone-900 overflow-hidden lg:m-6 lg:rounded-[5rem]">
        <div className="absolute inset-0 opacity-20 grayscale mix-blend-overlay">
          <img src={IMAGES.hero} className="w-full h-full object-cover" alt="Overlay" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Transform Your Space Into Something Exceptional
            </h2>
            <p className="text-stone-400 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto">
              From luxury kitchens to custom wardrobes and ceilings, Harare Cupboards brings modern interior visions to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-white text-stone-900 px-12 py-6 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-all shadow-2xl rounded-full"
                id="cta-section-btn"
              >
                Request a Quote
              </button>
              <a 
                href="https://wa.me/263772584004"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/30 text-white px-12 py-6 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 rounded-full"
              >
                Chat on WhatsApp <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 9: Contact --- */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-stone-900 mb-8 leading-tight italic">Let's Build Your Vision</h2>
              
              <div className="space-y-10 mt-16">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-2">Our Location</h5>
                    <p className="text-stone-500 font-light">Harare, Zimbabwe</p>
                    <p className="text-stone-400 text-xs mt-1">Serving clients nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-2">Call & WhatsApp</h5>
                    <p className="text-stone-500 font-bold text-lg">0772 584 004</p>
                    <p className="text-stone-500 font-bold text-lg">0777 200 354</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-2">Email Address</h5>
                    <p className="text-stone-500 font-light">hararecupboardszw@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-2">Business Hours</h5>
                    <p className="text-stone-500 font-light">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-stone-500 font-light">Sat: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-stone-50 p-8 md:p-14 rounded-[3.5rem] border border-stone-100 shadow-2xl relative"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 pl-2">Full Name</label>
                    <input type="text" className="w-full bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-stone-900 transition-colors rounded-2xl" placeholder="John Doe" id="contact-name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 pl-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-stone-900 transition-colors rounded-2xl" placeholder="+263..." id="contact-phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 pl-2">Email Address</label>
                  <input type="email" className="w-full bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-stone-900 transition-colors rounded-2xl" placeholder="john@example.com" id="contact-email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 pl-2">Service Required</label>
                  <select className="w-full bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-stone-900 transition-colors rounded-2xl" id="contact-service">
                    <option>Fitted Kitchens</option>
                    <option>Luxury Wardrobes</option>
                    <option>TV Wall Units</option>
                    <option>Suspended Ceilings</option>
                    <option>Other Finishing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 pl-2">Your Message</label>
                  <textarea rows={4} className="w-full bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-stone-900 transition-colors resize-none rounded-2xl" placeholder="Tell us about your project..." id="contact-message"></textarea>
                </div>
                <button className="w-full bg-stone-900 text-white py-6 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-3 rounded-full shadow-xl" id="submit-request-btn">
                  Submit Request <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-stone-900 text-white pt-24 pb-12 rounded-t-[5rem]">
        <div className="container mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-stone-900 overflow-hidden p-2">
                  <img 
                    src={IMAGES.logo} 
                    alt="Harare Cupboards" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-display font-bold text-2xl text-stone-900">H</span>';
                    }}
                  />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">HARARE <span className="font-light text-white/50">CUPBOARDS</span></span>
              </div>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Elevating homes across Zimbabwe with premium interior finishing and custom cabinetry. Founded on the principles of luxury, quality, and timeless design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Services</h5>
              <ul className="space-y-4 text-stone-500 text-sm font-light">
                {SERVICES.slice(0, 5).map(s => (
                  <li key={s.id}><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">{s.title}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h5>
              <ul className="space-y-4 text-stone-500 text-sm font-light">
                <li><button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors">Our Portfolio</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-8">Contact</h5>
              <ul className="space-y-4 text-stone-500 text-sm font-light">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> 0772 584 004</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hararecupboardszw@gmail.com</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Harare, Zimbabwe</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-600 text-[10px] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Harare Cupboards. All Rights Reserved.
            </p>
            <div className="text-stone-600 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
              Modern Interior Excellence <div className="w-1 h-1 bg-stone-600 rounded-full"></div> Crafted In Zimbabwe
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/263772584004"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
          Chat With Us
        </span>
      </motion.a>
    </div>
  );
}
