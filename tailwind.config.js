const config = {
  // 不要なCSSを削除するためのpurge設定
  mode: 'jit',
  // 設定ファイル内でのCSSのみをbuild時に最適化
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  content: [],
  theme: {
    extend: {
      animation: {
        'hero-bg-loop-first': 'hero-bg-loop-first 11s infinite',
        'hero-bg-loop-second': 'hero-bg-loop-first 11s reverse',
        'hero-bg-loop-third': 'hero-bg-loop-first 11s infinite'
      },
      keyframes: {
        'hero-bg-loop-first': {
          '0% 100%': { transform: 'translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%)' },
          '25%': { transform: 'translateY(-50%) translateX(-50%) skew(-15deg,-15deg) rotate(80deg) translateX(30%)' },
          '50%': { transform: 'translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%)' },
          '75%': { transform: 'translateY(-50%) translateX(-50%) skew(15deg,15deg) rotate(240deg) translateX(15%)' }
        },
        'hero-bg-loop-second': {
          '0% 100%': { transform: 'translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%)' },
          '25%': { transform: 'translateY(-50%) translateX(-50%) skew(15deg,15deg) rotate(110deg) translateX(-5%)' },
          '50%': { transform: 'translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%)' },
          '75%': { transform: 'translateY(-50%) translateX(-50%) skew(-15deg,-15deg) rotate(300deg) translateX(-10%)' }
        },
        'hero-bg-loop-third': {
          '0% 100%': { transform: 'translateY(-50%) translateX(-50%) translateX(-15%) translateY(10%)' },
          '20%': { transform: 'translateY(-50%) translateX(-50%) translateX(30%) translateY(-30%)' },
          '40%': { transform: 'translateY(-50%) translateX(-50%) translateX(-35%) translateY(-15%)' },
          '60%': { transform: 'translateY(-50%) translateX(-50%) translateX(30%) translateY(20%)' },
          '80%': { transform: 'translateY(-50%) translateX(-50%) translateX(5%) translateY(35%)' }
        }
      }
    }
  },
  plugins: []
}
module.exports = config
