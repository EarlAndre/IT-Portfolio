// App.jsx
import React, { useState } from "react";
// MUST include AnimatePresence for the Journals carousel to work
import { motion, AnimatePresence } from "framer-motion";

// --- P5 UI Components ---

const P5Background = () => (
  // Base background is dark gray/black
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-neutral-900">
    {/* The Red Halftone vibe */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ef4444_0%,_transparent_70%)] opacity-80" />
    <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_2px,transparent_2px,transparent_12px)] opacity-20" />
    
    {/* Floating Shapes for dynamism */}
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

function Navbar() {
  const links = ["Profile", "Skills", "Certificates", "Journals", "Projects", "Contact"];
  const [active, setActive] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 pointer-events-none">
        
        {/* --- Main Navigation Container (Taller & Thicker Black Block) --- */}
        <div 
            // Increased vertical padding (py-4) for much more height
            className="bg-black text-white py-4 w-full transform -skew-y-1 origin-top-left 
                       border-b-8 border-red-600 shadow-2xl flex items-center px-6 pointer-events-auto"
        >
            {/* Inner Container: Compensation for skew and alignment */}
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center transform skew-y-1 h-14">
                
                {/* Logo/Title: Aggressive Badge Style */}
                <motion.div
                    className="transform -skew-x-[10deg] bg-red-600 px-4 py-2 border-2 border-white cursor-pointer shadow-[5px_5px_0px_#fff]"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h1 className="text-4xl font-black uppercase text-white transform skew-x-[10deg] leading-none tracking-tight">
                        PHANTOM<span className="text-white">DEV</span>
                    </h1>
                </motion.div>
                
                {/* Desktop Links: Increased Font Size and Padding */}
                <div className="hidden md:flex space-x-1">
                    {links.map((l) => (
                        <motion.a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            onHoverStart={() => setActive(l)}
                            onHoverEnd={() => setActive(null)}
                            // Increased padding (px-4 py-3) and font size (text-xl)
                            className="relative px-4 py-3 font-black uppercase tracking-widest group text-xl transform skew-x-[-15deg] transition-all duration-200"
                        >
                            {/* Framer Motion for the animated Red Slice highlight */}
                            {active === l && (
                                <motion.div
                                    layoutId="nav-bg-v2"
                                    // Aggressive slice background with a clean skew
                                    className="absolute inset-0 bg-red-600 z-[-1] transform skew-x-12" 
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                                />
                            )}
                            {/* Text Container (Opposite skew to normalize text) */}
                            <span className={`block transform skew-x-[15deg] transition-colors ${active === l ? 'text-white' : 'text-white hover:text-red-300'}`}>
                                {l}
                            </span>
                        </motion.a>
                    ))}
                </div>
                
                {/* Mobile Menu Placeholder (Tucked in the corner) */}
                <div className="md:hidden text-2xl text-white font-black uppercase transform skew-x-12">
                    MENU
                </div>
            </div>
        </div>
    </nav>
  );
}

const CV_FILE_PATH = '/EarlAndre_CV.pdf';

function Profile() {
    
    // Helper component for the Notice of Calling block (HIGHEST LAYER)
    const NoticeBlock = () => (
        <motion.div
            initial={{ rotate: 5, skewX: 5 }} 
            whileHover={{ 
                rotate: 0, 
                skewX: 0, 
                x: 30, 
                scale: 1.05, 
                filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.8))' 
            }}
            transition={{ type: "spring", stiffness: 300, duration: 0.1 }} 
            // Added drift-anim for continuous subtle motion
            className="relative z-50 cursor-[url('/path/to/p5-cursor.png'),_pointer] drift-anim" 
        >
            {/* Red Accent Layer (Perpetual pulse) */}
            <div className="absolute inset-0 bg-red-600/70 transform translate-x-6 translate-y-6 animate-pulse opacity-60" />

            <div className="bg-white text-black p-6 sm:p-8 max-w-full shadow-[20px_20px_0px_#ef4444] border-4 border-black relative overflow-hidden flicker-border"> 
                
                {/* INNER NOISE: Fast-moving dots and lines */}
                <div 
                    className="absolute inset-0 bg-black/10 transform rotate-12 animate-[spin_5s_linear_infinite]"
                    style={{ 
                        backgroundImage: 'repeating-conic-gradient(#000 0% 10%, #fff 0% 20%)',
                        backgroundSize: '10px 10px',
                        opacity: 0.1 
                    }}
                />
                <div className="absolute inset-[8px] border-2 border-black/50 transform skew-x-[-5deg] pointer-events-none" />

                {/* Star Accent: Now JITTERING */}
                <div className="absolute bottom-4 right-4 text-red-500 text-3xl transform rotate-[-20deg] animate-[ping_1.5s_ease-out_infinite] jitter-anim">&#9733;</div> 
                <div className="absolute top-[-10px] right-[-10px] w-6 h-6 bg-black transform rotate-45" /> 

                <h3 className="text-2xl sm:text-3xl font-black bg-black text-white inline-block px-3 py-1 mb-4 transform -skew-x-12 relative z-10">
                    <span className="animated-text-shadow">NOTICE OF CALLING</span>
                </h3>
                <p className="text-xl sm:text-3xl font-black leading-tight uppercase transform skew-x-3 relative z-10">
                    "I am an IT Developer passionate about building efficient, scalable, and user-friendly applications. I will steal your heart with high-performance code."
                </p>
            </div>
            <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 w-14 h-14 sm:w-16 sm:h-16 bg-black transform rotate-45 z-40" /> 
        </motion.div>
    );

    // Helper component for the Thief Stats block (LOWER LAYER)
    const StatsBlock = () => (
        <motion.div
            initial={{ rotate: -7, skewX: -10 }} 
            whileHover={{ 
                rotate: 0, 
                skewX: 0, 
                x: -30, 
                scale: 1.05, 
                filter: 'drop-shadow(0 0 30px rgba(0, 0, 0, 0.9))' 
            }}
            transition={{ type: "spring", stiffness: 300, duration: 0.1 }} 
            // Added drift-anim for continuous subtle motion
            className="relative z-40 -mt-24 md:-mt-16 lg:-mt-24 ml-10 md:ml-0 cursor-[url('/path/to/p5-cursor.png'),_pointer] drift-anim" 
        >
            <div className="bg-neutral-900 p-8 border-l-12 border-red-500 shadow-[15px_15px_0px_#000] relative overflow-hidden"> 
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ef4444_0%,_transparent_70%)] opacity-20 pointer-events-none animate-pulse" /> 
                <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-30 pointer-events-none" /> 
                
                {/* Star Accent: Now JITTERING */}
                <div className="absolute top-[-15px] right-[-15px] text-white text-4xl transform rotate-45 animate-pulse jitter-anim">&#9733;</div> 
                
                <h4 className="font-black text-3xl uppercase mb-4 transform -skew-x-2 relative z-10 text-white">
                    THIEF STATS
                </h4>
                <ul className="space-y-3 font-black relative z-10 text-white text-xl">
                    <li>— Location: Philippines, Davao City</li>
                    <li>— Expertise: High-Performance Heists (Full-Stack Development)</li>
                    <li>— Calling: Deliver clean code that surpasses expectations.</li>
                </ul>
            </div>
        </motion.div>
    );
    
    // NEW Helper Component for the CV Download Button
    const DownloadCVButton = () => (
        <a 
            href={CV_FILE_PATH} 
            download // This is the crucial attribute for downloading
            className="group inline-block relative font-black uppercase text-lg sm:text-xl transform skew-x-[-15deg] transition duration-200 hover:scale-105 mt-8 md:mt-0 z-50 ml-10 md:ml-0" // Increased margin-top for separation
        >
            {/* Chaotic Red/Black Button Styling */}
            <span className="absolute inset-0 bg-red-600 border-4 border-black transform translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200" />
            
            {/* Button Text Layer */}
            <span className="relative bg-black text-white px-8 py-3 border-4 border-red-500 block shadow-[5px_5px_0px_#ef4444] transition-colors duration-200">
                <span className="transform skew-x-15 block">
                    DOWNLOAD THE DOSSIER // CV (PDF)
                </span>
            </span>
        </a>
    );


    return (
        <Section id="profile" title="Take Your Heart">
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* --- Profile Picture Placeholder (Column 1) --- */}
                <div className="col-span-3 md:col-span-1 relative mx-auto md:mx-0 w-full max-w-xs sm:max-w-sm">
                    <div 
                        // Added drift-anim for continuous subtle motion
                        className="relative w-full aspect-square bg-white border-8 border-red-500 transform rotate-[-3deg] shadow-[15px_15px_0px_#000, 25px_25px_0px_#ef444460] flicker-shadow overflow-hidden drift-anim"
                    >
                        
                        {/* Image Container: Scanline effect here */}
                        <div className="absolute inset-0 w-full h-full scanline">
                            <img 
                            src="PROFILE.jpg"
                            alt="Phantom Thief Profile Picture" 
                            className="w-full h-full object-cover transform rotate-[3deg] scale-[0.9] opacity-100"
                            style={{ backgroundColor: '#ccc' }} 
                            />
                        </div>
                        
                        {/* Signature Red Sash Overlay */}

                        
                        <div className="absolute top-[-15px] left-[-15px] text-red-500 text-3xl transform rotate-12 animate-pulse jitter-anim">&#9733;</div>
                    </div>

                    {/* Stat Block - Code Name Label (Added JITTER) */}
                    <div className="mt-4 bg-black p-3 border-2 border-white transform skew-x-3 text-center shadow-[5px_5px_0px_#ef4444] relative overflow-hidden flicker-shadow jitter-anim">
                        <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_3px,_#fca5a5_3px,_#fca5a5_8px)] opacity-20 pointer-events-none" />

                        <p className="font-bold text-lg uppercase text-white transform -skew-x-3 relative z-10">
                            Code Name: Earl
                        </p>
                    </div>
                </div>
                
                {/* --- Text Content (Columns 2 & 3) --- */}
                <div className="col-span-3 md:col-span-2 space-y-8 relative">
                    
                    {/* Notice of Calling Block (Z-50) */}
                    <NoticeBlock />
                    
                    {/* DOWNLOAD CV BUTTON (Placed after Notice Block) */}
                    {/* Added margin to push the Stats Block down and give the button room */}
                    <div className="relative z-50 -mt-8">
                        <DownloadCVButton />
                    </div>

                    {/* Thief Stats Block (Z-40, positioned below, adjusted margin to compensate) */}
                    <StatsBlock />

                </div>
            </div>
        </Section>
    );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "Python", "Figma", "MySQL"];
  
  // Custom function to calculate the chaotic initial state for Framer Motion
  const getInitialState = (i) => {
    const rotate = (i % 3 === 0 ? 6 : i % 3 === 1 ? -8 : 3);
    const skewX = (i % 2 === 0 ? -12 : 12);
    const offsetX = (i % 2 === 0 ? 0 : 5);

    return {
      rotate: rotate,
      skewX: skewX,
      x: offsetX,
      y: 0, 
    };
  };

  return (
    <Section id="skills" title="Arsenal">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center max-w-6xl mx-auto px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={getInitialState(i)}
            whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                rotate: 0, 
                skewX: 0,  
                x: i % 2 === 0 ? 5 : -5, 
                // Stronger shadow/glow on hover
                filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 1))',
            }}
            whileTap={{ scale: 0.9, filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))' }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            
            // Added JITTER-ANIM to the whole block for constant subtle movement
            className="relative w-full max-w-[20rem] h-20 flex items-center justify-center transform-gpu messy-border cursor-pointer jitter-anim"
          >
            {/* 1. The Red/Black Offset Frames */}
            <div className="absolute inset-0 border-4 border-red-500 transform scale-105" />
            <div className="absolute inset-0 bg-black border-4 border-white transform translate-x-1.5 translate-y-1.5 shadow-lg" />

            {/* 2. The Main White Content Layer (The Focus) */}
            <div 
                // ⬅️ ADDED: Animate-pulse for constant glow/beat effect
                className="absolute inset-0 bg-white text-black font-black text-xl sm:text-3xl uppercase flex items-center justify-center p-2 sm:p-4 transform scale-[0.9] border-2 border-black overflow-hidden group animate-pulse"
            >
              
              {/* Animated Striped Background */}
              <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-50 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-1" />

              {/* Diagonal Corner Accents */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-black border-l-transparent" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-red-500 border-r-transparent" />
              

              {/* Text is skewed and centered, manages its own skew on hover */}
              <motion.span
                initial={{ skewX: -10 }} // Initialize text skew
                whileHover={{ skewX: 0 }} // Straighten text on hover
                className="block tracking-tight text-shadow-red relative z-10"
              >
                {skill}
              </motion.span>
            </div>
            
            {/* MAXIMUM CHAOS: Multi-Color Scribble Layers */}
            <div className="absolute inset-0 transform scale-[0.95] border-2 border-white/50 opacity-80 pointer-events-none" />
            <div className="absolute inset-0 transform scale-[1.08] border-2 border-cyan-400/50 opacity-80 pointer-events-none" />
            <div className="absolute inset-0 transform scale-[0.9] border-2 border-red-500/50 opacity-80 pointer-events-none" />


            {/* Decorative Stars/Accents */}
            <div 
                // ⬅️ ADDED: Animate-pulse and jitter-anim for frantic blinking star
                className="absolute top-[-25px] left-[-15px] text-red-500 text-5xl transform rotate-[-30deg] animate-pulse jitter-anim"
            >
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
    "Certificate of completion: Educational Tour ",
    "Certificate of completion: Introduction to SQL",
    "Certificate of completion: Information Management",
  ];

  return (
    <Section id="certificates" title="Confidants">
      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
        {certificates.map((certName, i) => {
            // Data to simulate image paths and issuers
            const certDetails = [
                { issuer: "World of Adventures Travels and Tours", imagePath: "cert1.jfif" },
                { issuer: "Simplilearn", imagePath: "cert2.jfif" },
                { issuer: "Codechum", imagePath: "cert3.jfif" },
            ];
            const detail = certDetails[i] || { issuer: 'Unknown', imagePath: '#' };
            
            // Determine initial chaotic rotation and offset
            const rotate = i % 2 === 0 ? 3 : -3;
            const xOffset = i % 2 === 0 ? 10 : -10;

            return (
          <motion.li
                // Using motion.li again for smooth chaotic entrance and hover effect
                key={certName} 
                initial={{ x: xOffset, opacity: 0, rotate: rotate }}
                whileInView={{ x: 0, opacity: 1, rotate: rotate }}
                whileHover={{ 
                    scale: 1.05,
                    rotate: 0, // Straighten slightly on hover
                    filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))',
                }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                // Added jitter-anim and group class for subtle movement and targeting
                className={`relative p-2 group cursor-pointer jitter-anim`}
            >
            {/* 1. Certificate Text Block (P5 Style with skew and background) */}
            <div className="flex items-center">
                {/* Number bullet */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 text-black font-black text-2xl sm:text-3xl flex items-center justify-center transform -skew-x-12 mr-4 sm:mr-6 border-2 border-white group-hover:bg-white group-hover:text-red-600 transition-colors">
                  {i + 1}
                </div>
                
                {/* Text Container */}
                <div className="bg-neutral-800 p-3 sm:p-4 flex-1 transform skew-x-6 border-r-4 border-red-600 border-b-2 border-white relative overflow-hidden">
                    {/* Chaotic Background Fill */}
                    <div className="absolute inset-0 bg-red-600/20 transform skew-y-12 translate-x-1/2" />
                    
                  <span className="block transform -skew-x-6 font-bold text-lg sm:text-xl uppercase tracking-wider text-white relative z-10">
                    {certName}
                  </span>
                    <span className="block transform -skew-x-6 text-sm italic text-red-300 relative z-10">
                        Confidant: {detail.issuer}
                    </span>
                </div>
            </div>

            {/* 2. DIRECT IMAGE SOURCE DISPLAY (Boxed and styled) */}
            <div 
                className="mt-4 ml-8 p-1 w-full max-w-[280px] h-auto bg-black border-4 border-white 
                           transform rotate-[-4deg] shadow-[5px_5px_0px_#ef4444] overflow-hidden group-hover:rotate-[-2deg] transition-transform duration-200"
            >
                {/* The required <img> tag with src property */}
                <img 
                    src={detail.imagePath} 
                    alt={`Certificate: ${certName}`} 
                    className="w-full h-full object-cover opacity-80"
                    style={{ filter: 'grayscale(50%) contrast(150%)' }} 
                />
            </div>

          </motion.li>
            );
        })}
      </ul>
    </Section>
  );
}

function Journals() {
    
    // =======================================================
    // 1. DATA
    // =======================================================
    const allPhotos = [
        { src: "worldtech.jpg", caption: "Log 01: WORLDTECH INFORMATION SOLUTIONS, INC.", date: "11/19/2025", isSpotlight: true },
        { src: "codechum.jpeg", caption: "Log 02: CODECHUM", date: "11/20/2025", isSpotlight: true },
        { src: "rivan.JPG", caption: "Log 03: RIVAN IT CEBU", date: "11/20/2025", isSpotlight: true },
        { src: "mata.jfif", caption: "Log 04: MATA TECHNOLOGIES, INC.", date: "11/21/2025", isSpotlight: true },
        { src: "tarsier.jpg", caption: "Log 05: T.A.R.S.I.E.R 117", date: "11/22/2025", isSpotlight: true },
        
        { src: "1.jfif", caption: "Fragment 01", date: "11/19/2025" },
        { src: "2.jfif", caption: "Fragment 02", date: "11/20/2025" },
        { src: "3.jfif", caption: "Fragment 03", date: "11/20/2025" },
        { src: "4.jfif", caption: "Fragment 04", date: "11/22/2025" },
        { src: "5.jfif", caption: "Fragment 05", date: "11/22/2025" },
        { src: "6.jfif", caption: "Fragment 06", date: "11/21/2025" }, 
        { src: "7.jfif", caption: "Fragment 07", date: "11/19/2025" }, 
    ];

    const spotlightPhotos = allPhotos.slice(0, 5);
    const minorPhotos = allPhotos.slice(5);

    // =======================================================
    // 2. CAROUSEL LOGIC (Smoother, less chaotic)
    // =======================================================
    const loopPhotos = [...minorPhotos, ...minorPhotos]; 
    const itemWidth = 200; 
    const scrollDistance = minorPhotos.length * (itemWidth + 16); 

    const [isHovered, setIsHovered] = React.useState(false);

    const minorBaseProps = { 
        rotate: 0, 
        skewY: 0,  
        scale: 1,
    };

    const scrollTransition = {
        x: {
            duration: 15, // Significantly slower
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop"
        }
    };

    // Minor Item Hover Variant (Smooth scale and shadow)
    const minorHoverVariants = {
        initial: minorBaseProps,
        hover: { 
            scale: 1.05, 
            filter: 'drop-shadow(0 0 5px rgba(255, 100, 100, 0.5))',
            transition: { duration: 0.2 } 
        }
    }


    // =======================================================
    // 3. SPOTLIGHT ANIMATION VARIANTS (Floating, smooth)
    // =======================================================
    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, damping: 10 } }, 
        hover: { 
            scale: 1.05, 
            y: -5, 
            zIndex: 30,
            boxShadow: '0 0 40px rgba(255, 30, 30, 0.5), 0 5px 15px rgba(0, 0, 0, 0.5)',
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
    };

    // =======================================================
    // 4. RENDER
    // =======================================================
 return (
    <div id="journals" className="min-h-screen py-24 overflow-hidden font-sans relative"> 
        
        {/* --- GLOBAL ATMOSPHERIC GLOW (Subtle background radial light) --- */}
        <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
                background: 'radial-gradient(circle at 50% 10%, rgba(255, 50, 50, 0.1) 0%, transparent 40%)'
            }}
        />

        {/* --- SECTION TITLE (Clean, Bold) --- */}
        <h2 className="text-5xl font-extrabold uppercase text-white text-center mb-16 tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] relative z-20">
            — <span className="text-red-400">ACCESS</span> LOGS —
        </h2>

        {/* ======================================================= */}
        {/* A. 5-PHOTO SPOTLIGHT SECTION (ELEVATED CARDS) */}
        {/* ======================================================= */}
        <div 
            className="max-w-7xl mx-auto bg-neutral-900/50 p-10 shadow-2xl shadow-neutral-900/70 relative z-10 rounded-lg"
        >
            
            {/* Structural Title placed above the panel */}
            <h3 className="text-xl font-mono text-red-400 border-b-2 border-red-400/50 pb-1 px-8 mb-8 inline-block mx-auto block text-center">
                // CRITICAL DATA RETRIEVAL
            </h3>

            {/* Inner subtle glow line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500/50 shadow-md shadow-red-500/50" />

            <motion.div
                className="grid grid-cols-5 gap-8 relative z-20" 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                {spotlightPhotos.map((photo, index) => (
                    <motion.div 
                        key={`spotlight-${index}`}
                        variants={itemVariants}
                        whileHover="hover"
                        className="relative aspect-[3/4] bg-neutral-900/90 border border-red-700/50 rounded-lg 
                                       shadow-xl shadow-neutral-900/50 
                                       [box-shadow:inset_0_0_10px_rgba(0,0,0,0.8),_0_0_10px_rgba(255,50,50,0.2)] 
                                       transition-all duration-300 overflow-hidden cursor-pointer group"
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            // FIX: Removed all custom filters to use the image's original appearance.
                            style={{ }} 
                        />
                        
                        {/* Clean Caption Overlay - Kept for structure */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-neutral-900/90 border-t border-red-500/50 text-white font-mono leading-tight">
                            <p className="text-[10px] text-red-300 uppercase leading-none">{photo.caption}</p> 
                            <p className="italic text-white/70 text-[8px] mt-1">{photo.date}</p> 
                        </div>

                        {/* Clean Corner Tag Element */}
                        <div className="absolute top-0 right-0 bg-red-600/80 p-1 px-3 text-white text-xs font-black [clip-path:polygon(100%_0,100%_100%,0%_100%)] z-40 shadow-lg">
                            {index + 1}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        {/* ======================================================= */}
        {/* B. MINOR MEMORY CAROUSEL (SMOOTH DATA FEED) */}
        <div 
            className="max-w-full mx-auto overflow-hidden relative py-12 mt-24 border-y border-red-900/50 shadow-inner shadow-red-900/50 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top Scanning Line Animation (Full Width, Smooth) - DEFINITIVE FIX APPLIED */}
            <div className="absolute top-0 h-0.5 bg-red-500/20 overflow-hidden w-screen -ml-[50vw] left-[50%]">
                 <motion.div
                    // DEFINITIVE FIX: Use vw units for reliable full-screen looping.
                    animate={{ x: ['-25vw', '125vw'] }} 
                    transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                    className="w-1/4 h-full bg-white/70 shadow-[0_0_10px_#fff] blur-sm"
                />
            </div>

            {/* Left and Right Fades */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-900/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-900/90 to-transparent z-10 pointer-events-none" />


            {/* The Main Motion Flex Container for the Loop */}
            <motion.div 
                className="flex w-fit px-12 gap-4" 
                style={{ width: `${loopPhotos.length * itemWidth + loopPhotos.length * 16}px` }} 
                animate={{ x: [`0px`, `-${scrollDistance}px`] }}
                transition={isHovered ? { x: { duration: 0, ease: "linear" } } : scrollTransition}
            >
                {loopPhotos.map((photo, index) => (
                    <motion.div 
                        key={`minor-${index}`} 
                        variants={minorHoverVariants}
                        initial="initial"
                        whileHover="hover"
                        className="flex-shrink-0 w-[200px] cursor-pointer relative p-1 border border-neutral-700/50 bg-neutral-900/80 overflow-hidden rounded-md" 
                    >
                        {/* Data packet visual texture */}
                           <div className="absolute inset-0 bg-white/5 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_3px,_#fff_3px,_#fff_4px)] opacity-5 pointer-events-none" />
                            <div className="h-28 relative overflow-hidden border border-black/50">
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transform scale-[1.05]"
                                    // FIX: Removed all custom filters to use the image's original appearance.
                                    style={{ }} 
                                />
                            </div>
                            <div className="mt-2 bg-black/80 text-white p-2 font-mono uppercase text-center">
                                <p className="text-xs text-red-500 truncate">{photo.caption.split(':')[0]}</p>
                                <p className="text-[10px] text-white/40">{photo.date}</p>
                            </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {/* Thematically Adjusted Text Block (Pulsing) */}
        <motion.div 
            className="bg-neutral-900/90 p-8 border-2 border-red-500/50 max-w-4xl mx-auto mt-20 shadow-xl relative z-10 rounded-md"
            animate={{ boxShadow: ['0 0 10px rgba(255, 0, 0, 0.3)', '0 0 5px rgba(255, 0, 0, 0.1)', '0 0 10px rgba(255, 0, 0, 0.3)'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <p className="text-xl font-bold text-white leading-relaxed text-center font-mono">
            <span className="text-red-400 text-3xl"> </span>
            ARCHIVE ACCESS: All essential logs retrieved and verified. System running smoothly.
            <span className="text-red-400 text-3xl"> </span>
          </p>
        </motion.div>
    </div>
 );
}

function Projects() {
    
    // =======================================================
    // 1. UPDATED PROJECT DATA (6 Projects)
    // =======================================================
    const projects = [
        {
            title: "TETRIS GAME",
            desc: "A simple yet addictive puzzle game where players arrange falling blocks to clear horizontal lines.",
            tag: "Code / Game",
            tech: "Java",
            status: "COMPLETED",
            imgSrc: "tetris.jpg"
        },
        {
            title: "PETPAL APP",
            desc: "A cross-platform mobile application for pet adoption, management, and integrated chat.",
            tag: "Mobile / Full Stack",
            tech: "React Native / Swift",
            status: "IN PROGRESS",
            imgSrc: "petpal.png"
        },
        {
            title: "APEX PREDATORS UNLEASHED",
            desc: "a simple yet informative web application that curates and presents detailed data on the world's most formidable hunters, highlighting key traits like speed, habitat, and conservation status.",
            tag: "Web / Design",
            tech: "HTML / CSS",
            status: "COMPLETED",
            imgSrc: "predator.jpg"
        },
        {
            title: "VPAA SYSTEM",
            desc: "A simple yet effective administrative tool that automates the scheduling and management of online webinars",
            tag: "Embedded / Hardware",
            tech: "Python / Django / SQLite",
            status: "COMPLETED",
            imgSrc: "vpaa.png"
        },
        {
            title: "CRUD - LONE KNIGHT",
            desc: "a simple yet functional database management tool, styled as a role-playing game interface, demonstrating core Create, Read, Update, and Delete operations.",
            tag: "Game Dev / Database",
            tech: "HTML / CSS / JavaScript",
            status: "COMPLETED",
            imgSrc: "lone.jfif"
        },
        {
            title: "JANAS BOUTIQUE",
            desc: "a simple yet comprehensive e-commerce platform that handles product cataloging, user registration, and secure online transaction processing.",
            tag: "E-Commerce / Web",
            tech: "Next.js",
            status: "COMPLETED",
            imgSrc: "janas.jfif" // Placeholder image source
        },
    ];

    // Utility function for chaotic positioning
    const getProjectInitialState = (i) => {
        // Six distinct chaotic states for the six items
        const chaos = [
            { rotate: 4, skewX: -10, x: -10 },  // Item 1
            { rotate: -6, skewX: 15, x: 10 },   // Item 2
            { rotate: 2, skewX: -5, x: 5 },    // Item 3
            { rotate: -8, skewX: 12, x: -15 },  // Item 4
            { rotate: 5, skewX: -8, x: 10 },    // Item 5
            { rotate: -3, skewX: 7, x: -5 },    // Item 6 (New)
        ];
        return chaos[i % chaos.length];
    };

    return (
        <Section id="projects" title="Heists">
            <div className="grid md:grid-cols-2 gap-16 sm:gap-12 max-w-5xl mx-auto">
                {projects.map((p, i) => (
                    <motion.div 
                        key={p.title} 
                        initial={getProjectInitialState(i)}
                        whileHover={{ 
                            rotate: 0, 
                            skewX: 0, 
                            x: 0, 
                            scale: 1.05,
                            // Stronger drop shadow for emphasis
                            filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.8))',
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
                            
                            {/* --- Image Display Area --- */}
                            <div className="h-32 sm:h-48 bg-neutral-800 relative overflow-hidden mb-4 border-b-4 border-red-600">
                                
                                {/* 🖼️ ACTUAL PROJECT IMAGE INTEGRATED HERE */}
                                <img
                                    src={p.imgSrc}
                                    alt={`Screenshot of ${p.title}`}
                                    className="w-full h-full object-cover object-center filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                                />

                                {/* Diagonal Red Slash (Stays on top of image for stylistic overlay) */}
                                <div className="absolute inset-0 bg-red-600/50 transform skew-y-[-10deg] scale-150 origin-top-left opacity-30 pointer-events-none" />
                                
                                {/* Scribble Borders */}
                                <div className="absolute inset-0 border-4 border-white/30 transform scale-[1.05] pointer-events-none" />
                                <div className="absolute inset-0 border-2 border-cyan-400/50 transform scale-[0.95] pointer-events-none" />
                                
                                {/* Loud Star Accents on Image Area */}
                                <div className="absolute top-2 left-2 text-red-500 text-3xl transform rotate-12">&#9733;</div>
                                <div className="absolute bottom-2 right-2 text-white/50 text-xl transform rotate-[-40deg]">&#9733;</div>

                            </div>
                            {/* --- End Image Display Area --- */}


                            <div className="p-2 sm:p-4 relative z-10">
                                
                                {/* ⬅️ Project Title Block (The loudest element) */}
                                <div className="absolute -top-12 left-0 right-0 bg-black p-2 sm:p-3 transform skew-x-[-15deg] shadow-[5px_5px_0px_#ef4444] border-l-4 border-white">
                                    <h3 className="font-black text-3xl sm:text-4xl text-white italic uppercase transform skew-x-15 text-shadow-red">
                                        // {p.title}
                                    </h3>
                                </div>

                                {/* Status Tag - Clipped/Skewed Appearance (Moves down slightly) */}
                                <div className={`
                                    absolute top-[-10px] right-0 
                                    ${p.status === 'COMPLETED' ? 'bg-black text-green-400' : 'bg-red-600 text-white'}
                                    px-3 py-1 font-black text-xs sm:text-sm uppercase transform skew-x-[-20deg] 
                                    shadow-[3px_3px_0px_#000] border-2 border-white
                                    `}
                                >
                                    <span className="transform skew-x-20">{p.status}</span>
                                </div>

                                {/* Project Description */}
                                <p className="mt-8 text-lg italic text-neutral-800 leading-relaxed">
                                    {p.desc}
                                </p>
                                
                                {/* Project Tag */}
                                <div className="mt-4 text-right">
                                    {/* MODIFIED: Removed "// Tech Stack" text */}
                                    <span className="inline-block bg-black text-red-500 font-bold px-3 py-1 transform skew-x-[-10deg] border-b-2 border-red-500">
                                        <span className="uppercase text-sm">
                                            {p.tech}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Thematically Adjusted Text Block for Projects */}
            <div className="bg-neutral-800/90 backdrop-blur-sm p-6 sm:p-8 border-4 border-red-600 transform rotate-[-2deg] max-w-4xl mx-auto mt-12 shadow-2xl">
                <p className="text-lg sm:text-xl font-bold text-white leading-relaxed italic drop-shadow-md">
                    <span className="text-red-500 text-2xl sm:text-3xl">"</span>
                    Every successful Heist is built on meticulous planning, the right team, and flawless execution. These projects are my Palaces, showcasing my technical victories.
                    <span className="text-red-500 text-2xl sm:text-3xl">"</span>
                </p>
            </div>
        </Section>
    );
}


function Contact() {
    // Contact form styled as a P5 confession/warning screen
    return (
        <Section id="contact" title="Send Your Calling">
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 border-8 border-red-600 shadow-[10px_10px_0px_#000] relative overflow-hidden">
                
                {/* Diagonal Warning Stripes */}
                <div className="absolute inset-0 bg-red-100/50 bg-[repeating-linear-gradient(-45deg,_transparent_0px,_transparent_5px,_#fca5a5_5px,_#fca5a5_10px)] opacity-60 pointer-events-none" />

                <div className="relative z-10 text-black">
                    
                    {/* Header: The Confession */}
                    <div className="bg-red-600 text-white p-3 mb-6 border-b-4 border-black transform skew-x-[-10deg]">
                        <h3 className="text-2xl sm:text-4xl font-black uppercase transform skew-x-10">
                            The Confession
                        </h3>
                    </div>

                    <p className="font-bold text-xl mb-6 italic">
                        If you require my expertise for your Palace, send your message now before the shadows descend.
                    </p>

                    {/* Contact Form */}
                    <form className="space-y-4 font-bold uppercase">
                        <div>
                            <label htmlFor="name" className="block text-red-600 text-sm mb-1 transform -skew-x-6">Name (Code Name)</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-2 bg-neutral-200 border-4 border-black focus:border-red-600 focus:outline-none transform skew-x-3" 
                                placeholder="Joker / Skull / Mona..."
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-red-600 text-sm mb-1 transform -skew-x-6">Email (The Escape Route)</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-2 bg-neutral-200 border-4 border-black focus:border-red-600 focus:outline-none transform skew-x-3" 
                                placeholder="phantom@thieves.com"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-red-600 text-sm mb-1 transform -skew-x-6">Message (The Calling)</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="w-full p-2 bg-neutral-200 border-4 border-black focus:border-red-600 focus:outline-none transform skew-x-3"
                                placeholder="I believe you are the one who can change my distorted desires..."
                            ></textarea>
                        </div>
                        
                        {/* Send Button: Aggressive and Interactive */}
                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-black text-white p-3 mt-6 text-xl font-black uppercase transform skew-x-10 border-4 border-red-600 shadow-[5px_5px_0px_#ef4444] transition-colors hover:bg-red-600 hover:text-black"
                        >
                            <span className="transform -skew-x-10">
                                Send Calling Card
                            </span>
                        </motion.button>
                    </form>

                    <p className="mt-8 text-center text-xs text-neutral-600 italic">
                        Warning: Once sent, the process cannot be reversed.
                    </p>
                </div>
            </div>
        </Section>
    );
}


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
        <Contact /> {/* FINAL SECTION ADDED */}
      </main>
    </div>
  );
}