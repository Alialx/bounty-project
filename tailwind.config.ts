import type {Config} from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			poppins: ['var(--font-poppins)'],
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  daisyui: {
	themes: [
		{
		theme: {
			"primary": "#9eff00",     
			"secondary": "#1E1E1E",    
			"accent": "#9eff00",     
			"neutral": "#000000",      
			"base-100": "#000000",     
			"base-200": "#0A0A0A",     
			"base-300": "#141414",     
			"info": "#9eff00",         
			"warning": "#FFB938",      
			"error": "#FF5757",        
			
			"--rounded-box": "0.5rem",    
			"--rounded-btn": "0.5rem",   
			"--btn-text-case": "none",   
			
			"--text-base-content": "white",
			"--text-primary-content": "black",
			}
		}
	],
	darkTheme: "theme",
	base: true,
	styled: true,
	utils: true,
},
  plugins: [require('daisyui'), require("tailwindcss-animate")],
};
export default config;
