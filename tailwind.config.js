/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rock-from': 'var(--rock-gradient-from)',
        'rock-to': 'var(--rock-gradient-to)',
        'paper-from': 'var(--paper-gradient-from)',
        'paper-to': 'var(--paper-gradient-to)',
        'scissors-from': 'var(--scissors-gradient-from)',
        'scissors-to': 'var(--scissors-gradient-to)',
        'dark-text': 'var(--dark-text)',
        'score-text': 'var(--score-text)',
        'lizard-from': 'var(--lizard-gradient)',
        'lizard-to': 'var(--lizard-gradient)',
        'spock-from': 'var(--cyan-gradient)',
        'spock-to': 'var(--cyan-gradient)'
      },
    },
  },
  plugins: [],
}