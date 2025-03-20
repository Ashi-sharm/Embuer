
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
}
},
plugins: [require("tailwindcss-animate")],
}