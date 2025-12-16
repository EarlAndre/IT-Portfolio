/** @type {import('tailwindcss').Config} */

// REMOVED: import clipPath from 'tailwindcss-clip-path'; 
// (Removing the import that caused the initial crash)

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Keeps your custom font
                sans: ["Bebas Neue", "sans-serif"], 
            },
            lineHeight: {
                "extra-tight": "0.9",
            },
            
            // >>> REQUIRED FOR CLIP-PATH UTILITIES <<<
            // These custom shapes are correctly configured here and will generate classes like 'clip-diag-bottom-right'
            clipPath: {
                'diag-bottom-right': 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                'diag-top-left': 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)',
                'slice-left': 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)',
                'slice-right': 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
            },
            // >>> END OF CONFIG <<<
        },
    },
    // REMOVED: plugins: [clipPath], 
    // (Removing the problematic plugin loading)
};