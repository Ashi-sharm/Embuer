
export default {
darkMode: ["class"],
content: [
".src/components/**/*.{js,jsx}",
"./app/**/*.{js,jsx}",
"./src/**/*.{js,jsx}",
],
prefix: "",
theme: {
container: {
center: true,
padding: '2rem',
screens: {
'2xl': '1400px'
}
},
extend: {
colors: {
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',

embuer: {
seaspray: '#83A69C',    // Muted teal-green
babyblue: '#CBDFD8',    // Very light blue-green
matcha: '#DBDDB6',      // Light yellowish-green
sunshine: '#FFF1C1',    // Pale yellow
bumblebee: '#E3B055',   // Golden yellow
linen: '#F3EFDE',       // Off-white cream
}
},
borderRadius: {
lg: 'var(--radius)',
md: 'calc(var(--radius) - 2px)',
sm: 'calc(var(--radius) - 4px)'
},
'shimmer': { '100%': { transform: 'translateX(100%)' } },
'float': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
'rotate-slow': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
'bounce-mild': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' } },

},


},
plugins: [require("tailwindcss-animate")],
}