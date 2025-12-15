// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// --- P5 UI Components ---

const P5Background = () => (
  // Base background is dark gray/black
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-neutral-900">
    {/* The Red Halftone vibe */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ef4444_0%,_transparent_70%)] opacity-80" />
    <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_2px,transparent_2px,transparent_12px)] opacity-20" />
    
    {/* Floating Stars/Shapes for dynamism */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white/10 opacity-50 transform -skew-x-12 hidden lg:block"
    />
     <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 right-1/4 w-96 h-96 border-t-4 border-r-4 border-red-500/20 opacity-50 transform skew-y-6 hidden lg:block"
    />
  </div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
      {/* Title Card: Always skewed and shadowed */}
      <motion.div
        initial={{ x: -300, opacity: 0, skewX: 20 }}
        whileInView={{ x: 0, opacity: 1, skewX: -10 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-16 inline-block bg-black p-4 border-l-8 border-white shadow-[8px_8px_0px_#ef4444] transform skew-x-[-10deg]"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter transform skew-x-10 leading-extra-tight">
          {title}
        </h2>
      </motion.div>
      
      {/* Content Wrapper */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default function App() {
  return (
    // font-sans is now Bebas Neue via tailwind.config
    <div className="text-neutral-100 min-h-screen selection:bg-black selection:text-red-500">
      <P5Background />
      <Navbar />
      <main className="relative">
        <Profile />
        <Skills />
        <Certificates />
        <Journals />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function Navbar() {
  const links = ["Profile", "Skills", "Certificates", "Journals", "Projects", "Contact"];
  const [active, setActive] = useState(null);

  // A responsive, fixed, and skewed navigation bar
  return (
    <nav className="fixed top-0 w-full z-50 pointer-events-none">
      <div className="bg-black text-white h-16 w-full transform -skew-y-1 origin-top-left border-b-4 border-red-600 shadow-lg flex items-center px-6 pointer-events-auto">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center transform skew-y-1">
          <motion.span 
            className="font-black text-2xl sm:text-3xl tracking-tighter italic text-white"
            whileHover={{ scale: 1.1, rotate: -2 }}
          >
            PHANTOM<span className="text-red-500">DEV</span>
          </motion.span>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-1">
            {links.map((l) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onHoverStart={() => setActive(l)}
                onHoverEnd={() => setActive(null)}
                className="relative px-3 py-2 font-bold uppercase italic tracking-wide group text-sm"
              >
                {/* Framer Motion for the animated highlight */}
                {active === l && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-red-600 skew-x-12 z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
                <span className={`block transform -skew-x-12 transition-colors ${active === l ? 'text-black' : 'text-white'}`}>
                  {l}
                </span>
              </motion.a>
            ))}
          </div>
          
          {/* TODO: Implement Mobile Menu for production */}
          <div className="md:hidden text-lg text-white font-bold transform -skew-x-12">
            MENU
          </div>
        </div>
      </div>
    </nav>
  );
}

function Profile() {
  return (
    <Section id="profile" title="Take Your Heart">
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* --- Profile Picture Placeholder (Column 1) --- */}
        <div className="col-span-3 md:col-span-1 relative mx-auto md:mx-0 w-full max-w-xs sm:max-w-sm">
          <div className="relative w-full aspect-square bg-white border-8 border-red-500 transform rotate-[-3deg] shadow-[15px_15px_0px_#000, 25px_25px_0px_#ef444460]">
            
            <img 
              src="/path/to/your/image.jpg"
              alt="Phantom Thief Profile Picture" 
              className="absolute inset-0 w-full h-full object-cover transform rotate-[3deg] scale-[0.9] opacity-80"
              style={{ backgroundColor: '#ccc' }} 
            />
            
            {/* Signature Red Sash Overlay */}
            <div className="absolute inset-0 bg-red-600 opacity-20 transform skew-x-12 pointer-events-none mix-blend-multiply" />
            
            {/* ⬅️ BLUE REDUCTION: Replaced Cyan star with a Red one */}
            <div className="absolute top-[-15px] left-[-15px] text-red-500 text-3xl transform rotate-12">&#9733;</div>
          </div>

          {/* Stat Block - Code Name Label */}
          <div className="mt-4 bg-black p-3 border-2 border-white transform skew-x-3 text-center shadow-[5px_5px_0px_#ef4444] relative overflow-hidden">
             {/* Textural Stripes */}
             <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-10 pointer-events-none" />

            <p className="font-bold text-lg uppercase text-white transform -skew-x-3 relative z-10">
              Code Name: Earl
            </p>
          </div>
        </div>
        
        {/* --- Text Content (Columns 2 & 3) --- */}
        <div className="col-span-3 md:col-span-2 space-y-8 relative">
          
          {/* 1. Original Notice of Calling (OVERLAPPING LAYER) */}
          <motion.div
            initial={{ rotate: 3, skewX: 5 }} 
            whileHover={{ 
                rotate: 0, 
                skewX: 0, 
                x: -5, 
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.4))' 
            }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            className="relative z-20 cursor-pointer" 
          >
            {/* Red Accent Layer (Highest Offset) */}
            <div className="absolute inset-0 bg-red-600/50 transform translate-x-6 translate-y-6" />

            <div className="bg-white text-black p-6 sm:p-8 max-w-full shadow-[15px_15px_0px_#ef4444] border-2 border-black relative overflow-visible flicker-border">
              
              {/* ⬅️ BLUE REDUCTION: Replaced Cyan Inner Accent with Black */}
              <div className="absolute inset-[8px] border-2 border-black/50 transform skew-x-[-5deg] pointer-events-none" />

              {/* ACCENTS: Single Red Star & Black Corner Square */}
              {/* ⬅️ BLUE REDUCTION: Replaced Cyan star with Red one */}
              <div className="absolute bottom-4 right-4 text-red-500 text-2xl transform rotate-[-20deg]">&#9733;</div>
              <div className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-black transform rotate-45" />

              <h3 className="text-xl sm:text-2xl font-bold bg-black text-white inline-block px-2 mb-4 transform -skew-x-12 relative z-10">
                <span className="animated-text-shadow">NOTICE OF CALLING</span>
              </h3>
              <p className="text-lg sm:text-2xl font-bold leading-tight uppercase transform skew-x-3 relative z-10">
                "I am an IT Developer passionate about building efficient, scalable, and user-friendly applications. I will steal your heart with high-performance code."
              </p>
            </div>
            {/* Decorative Corner Square */}
            <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-10 h-10 sm:w-12 sm:h-12 bg-black transform rotate-45" />
          </motion.div>
          
          {/* 2. Quick Facts/Stat Section (BACKGROUND LAYER) */}
          <motion.div
            initial={{ rotate: -4, skewX: -7 }} 
            whileHover={{ 
                rotate: 0, 
                skewX: 0, 
                x: 5, 
                filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.4))' 
            }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            className="relative z-10 -mt-16 md:-mt-12 lg:-mt-16 ml-6 md:ml-0 cursor-pointer"
          >
            <div className="bg-neutral-800 p-6 sm:p-8 border-l-8 border-red-500 shadow-[8px_8px_0px_#000] relative overflow-hidden">
              
              {/* Background Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ef4444_0%,_transparent_70%)] opacity-10 pointer-events-none" />
              {/* CHAOS: Red Striped Background Texture */}
              <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-10 pointer-events-none" />
              
              {/* ACCENT: Single White Star */}
              <div className="absolute top-[-10px] right-[-10px] text-white text-3xl transform rotate-45">&#9733;</div>
              
              <h4 className="font-black text-2xl uppercase mb-3 transform -skew-x-2 relative z-10">
                THIEF STATS
              </h4>
              <ul className="space-y-2 font-medium relative z-10">
                <li>— Location: Philippines, Davao City</li>
                <li>— Expertise: High-Performance Heists (Full-Stack Development)</li>
                <li>— Calling: Deliver clean code that surpasses expectations.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "TailwindCSS", "Git", "Figma", "MongoDB"];
  
  // Custom function to calculate the chaotic initial state for Framer Motion
  const getInitialState = (i) => {
    const rotate = (i % 3 === 0 ? 6 : i % 3 === 1 ? -8 : 3);
    const skewX = (i % 2 === 0 ? -12 : 12);
    const offsetX = (i % 2 === 0 ? 0 : 5);

    return {
      // ⬅️ FIX: Define initial chaotic state using Framer Motion props (in degrees/pixels)
      rotate: rotate,
      skewX: skewX,
      x: offsetX,
      y: 0, // Base Y position
    };
  };

  return (
    <Section id="skills" title="Arsenal">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center max-w-6xl mx-auto px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            // ⬅️ FIX: Use Framer Motion for all transformations
            initial={getInitialState(i)}
            whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                rotate: 0, // Straighten on hover
                skewX: 0,   // Remove skew on hover
                x: i % 2 === 0 ? 5 : -5, // Quick horizontal snap
                filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))',
            }}
            whileTap={{ scale: 0.95, filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))' }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            
            // Apply static classes here
            className="relative w-full max-w-[20rem] h-20 flex items-center justify-center transform-gpu messy-border cursor-pointer"
          >
            {/* 1. The Red/Black Offset Frames */}
            <div className="absolute inset-0 border-4 border-red-500 transform scale-105" />
            <div className="absolute inset-0 bg-black border-4 border-white transform translate-x-1.5 translate-y-1.5 shadow-lg" />

            {/* 2. The Main White Content Layer (The Focus) */}
            <div className="absolute inset-0 bg-white text-black font-black text-xl sm:text-3xl uppercase flex items-center justify-center p-2 sm:p-4 transform scale-[0.9] border-2 border-black overflow-hidden group">
              
              {/* ⬅️ ENHANCEMENT: Animated Striped Background */}
              <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-50 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-1" />

              {/* ⬅️ ENHANCEMENT: Diagonal Corner Accents */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-black border-l-transparent" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-red-500 border-r-transparent" />
              

              {/* Black Horizontal Slice/Separator */}
              <div className="absolute top-1/2 w-full h-[5px] bg-black transform -translate-y-1/2 skew-x-[-10deg] opacity-80" />

              {/* Text is skewed and centered, manages its own skew on hover */}
              <motion.span
                initial={{ skewX: -10 }} // Initialize text skew
                whileHover={{ skewX: 0 }} // Straighten text on hover
                className="block tracking-tight text-shadow-red relative z-10"
              >
                {skill}
              </motion.span>
            </div>
            
            {/* ⬅️ MAXIMUM CHAOS: Multi-Color Scribble Layers */}
            <div className="absolute inset-0 transform scale-[0.95] border-2 border-white/50 opacity-80 pointer-events-none" />
            <div className="absolute inset-0 transform scale-[1.08] border-2 border-cyan-400/50 opacity-80 pointer-events-none" />
            <div className="absolute inset-0 transform scale-[0.9] border-2 border-red-500/50 opacity-80 pointer-events-none" />


            {/* Decorative Stars/Accents */}
            <div className="absolute top-[-10px] left-[-15px] text-red-500 text-2xl transform rotate-[-30deg]">
                &#9733; 
            </div>
            <div className="absolute bottom-[-10px] right-[-15px] w-4 h-4 bg-black border-2 border-white transform rotate-45" />

          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Certificates() {
  const certificates = [
    "Web Development Fundamentals",
    "ReactJS Essentials",
    "Networking Basics",
  ];
  return (
    <Section id="certificates" title="Confidants">
      <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.li 
            key={cert}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center group"
          >
            {/* Number bullet (Responsive) */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 text-black font-black text-2xl sm:text-3xl flex items-center justify-center transform -skew-x-12 mr-4 sm:mr-6 border-2 border-white group-hover:bg-white group-hover:text-red-600 transition-colors">
              {i + 1}
            </div>
            {/* Certificate Text Container */}
            <div className="bg-neutral-800 p-3 sm:p-4 flex-1 transform skew-x-6 border-r-4 border-red-600">
              <span className="block transform -skew-x-6 font-bold text-lg sm:text-xl uppercase tracking-wider">
                {cert}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}

function Journals() {
  return (
    <Section id="journals" title="Requests">
      <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 border-4 border-black transform rotate-1 max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl font-bold text-white leading-relaxed italic drop-shadow-md">
          <span className="text-red-500 text-2xl sm:text-3xl">"</span>
          A collection of my learning experiences, daily progress, challenges, and reflections throughout my IT journey.
          <span className="text-red-500 text-2xl sm:text-3xl">"</span>
        </p>
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and TailwindCSS. High-fidelity Persona 5 UI replica.",
      tag: "Code",
      status: "COMPLETED"
    },
    {
      title: "PetPal App",
      desc: "A React Native application for pet adoption and management with integrated chat.",
      tag: "Mobile",
      status: "IN PROGRESS"
    },
  ];

  // Utility function for chaotic positioning
  const getProjectInitialState = (i) => {
    const rotate = (i % 2 === 0 ? 4 : -6);
    const skewX = (i % 2 === 0 ? -10 : 15);
    return {
      rotate: rotate,
      skewX: skewX,
      x: i % 2 === 0 ? -10 : 10,
    };
  };

  return (
    <Section id="projects" title="Heists">
      <div className="grid md:grid-cols-2 gap-16 sm:gap-12 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div 
            key={p.title} 
            // KINETIC EFFECT: Snaps straight on hover
            initial={getProjectInitialState(i)}
            whileHover={{ 
                rotate: 0, 
                skewX: 0, 
                x: 0, 
                scale: 1.05,
                filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.6))',
                zIndex: 10
            }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            
            // Outer container uses the messy border for the drawn look
            className="group relative w-full messy-border cursor-pointer transform-gpu"
          >
            {/* 1. Background Black Layer (The Shadow/Depth) */}
            <div className="absolute inset-0 bg-black border-4 border-red-500 transform translate-x-3 translate-y-3" />
            
            {/* 2. Middle Red Border Layer (The Main Frame) */}
            <div className="absolute inset-0 border-4 border-red-600 transform scale-105" />

            {/* 3. Top Content White Card */}
            <div className="relative bg-white border-4 border-black p-2 transform scale-[0.95] text-black">
                
                {/* --- Image Placeholder Chaos --- */}
                <div className="h-32 sm:h-48 bg-neutral-800 relative overflow-hidden mb-4 border-b-4 border-red-600">
                   
                   {/* Diagonal Red Slash (Stronger) */}
                   <div className="absolute inset-0 bg-red-600/50 transform skew-y-[-10deg] scale-150 origin-top-left" />
                   
                   {/* Scribble Borders */}
                   <div className="absolute inset-0 border-4 border-white/30 transform scale-[1.05] pointer-events-none" />
                   <div className="absolute inset-0 border-2 border-cyan-400/50 transform scale-[0.95] pointer-events-none" />
                   
                   {/* Loud Star Accents on Image Area */}
                   <div className="absolute top-2 left-2 text-red-500 text-3xl transform rotate-12">&#9733;</div>
                   <div className="absolute bottom-2 right-2 text-white/50 text-xl transform rotate-[-40deg]">&#9733;</div>

                   <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-black text-4xl sm:text-6xl opacity-20 transform -rotate-12">
                     IMG
                   </div>
                </div>
                {/* --- End Image Placeholder --- */}


                <div className="p-2 sm:p-4 relative z-10">
                    
                    {/* ⬅️ ENHANCEMENT: Project Title Block (The loudest element) */}
                    <div className="absolute -top-12 left-0 right-0 bg-black p-2 sm:p-3 transform skew-x-[-15deg] shadow-[5px_5px_0px_#ef4444] border-l-4 border-white">
                        <h3 className="font-black text-3xl sm:text-4xl text-white italic uppercase transform skew-x-15 text-shadow-red">
                            {p.title}
                        </h3>
                    </div>

                    {/* Status Tag - Clipped/Skewed Appearance (Moves down slightly) */}
                    <div className={`
                        absolute top-[-10px] right-0 py-1 px-4 font-black uppercase tracking-widest text-sm sm:text-base
                        transform skew-x-[-15deg] shadow-[4px_4px_0px_black]
                        ${p.status === 'COMPLETED' ? 'bg-cyan-400 text-black' : 'bg-red-600 text-white'}
                    `}>
                        <span className="block transform skew-x-[15deg]">{p.status}</span>
                    </div>

                    <p className="text-gray-700 font-medium leading-relaxed border-l-4 border-black pl-3 text-sm sm:text-base pt-10">
                        {p.desc}
                    </p>
                    
                    {/* ⬅️ LOUD ELEMENTS: Extra Star Accents on description area */}
                    <div className="absolute bottom-[-10px] right-2 text-red-500 text-2xl transform rotate-[-30deg]">
                        &#9733; 
                    </div>
                    <div className="absolute bottom-[-15px] left-[-10px] text-cyan-400 text-lg transform rotate-[20deg]">&#9733;</div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Send a Calling Card">
      <form className="max-w-md mx-auto space-y-6 sm:space-y-8 relative">
        {/* Background Slash */}
        <div className="absolute inset-0 bg-white transform -skew-x-12 scale-110 z-0 opacity-5" />

        <div className="relative z-10 group">
            <label className="block text-red-500 font-black text-lg sm:text-xl mb-1 uppercase transform skew-x-6">Codename</label>
            <input
            type="text"
            className="w-full bg-black border-b-4 border-white text-white p-3 sm:p-4 text-lg sm:text-xl font-bold focus:border-red-500 focus:outline-none focus:bg-neutral-900 transition-colors placeholder-neutral-600 transform -skew-x-6"
            placeholder="YOUR NAME"
            />
        </div>
        
        <div className="relative z-10 group">
            <label className="block text-red-500 font-black text-lg sm:text-xl mb-1 uppercase transform skew-x-6">Contact Info</label>
            <input
            type="email"
            className="w-full bg-black border-b-4 border-white text-white p-3 sm:p-4 text-lg sm:text-xl font-bold focus:border-red-500 focus:outline-none focus:bg-neutral-900 transition-colors placeholder-neutral-600 transform -skew-x-6"
            placeholder="YOUR EMAIL"
            />
        </div>

        <div className="relative z-10 group">
             <label className="block text-red-500 font-black text-lg sm:text-xl mb-1 uppercase transform skew-x-6">The Target</label>
            <textarea
            className="w-full bg-black border-b-4 border-white text-white p-3 sm:p-4 text-lg sm:text-xl font-bold focus:border-red-500 focus:outline-none focus:bg-neutral-900 transition-colors placeholder-neutral-600 transform -skew-x-6 resize-none"
            rows={4}
            placeholder="YOUR MESSAGE"
            />
        </div>

        <motion.button 
            whileHover={{ scale: 1.05, skewX: -15 }}
            whileTap={{ scale: 0.95 }}
            className="w-full relative py-4 sm:py-6 bg-red-600 text-white text-xl sm:text-3xl font-black uppercase italic tracking-widest hover:bg-red-500 transition-colors shadow-[8px_8px_0px_#000] border-2 border-black"
        >
          <span className="relative z-10">Take Action</span>
        </motion.button>
      </form>
    </Section>
  );
}