const config = {
  plugins: {
    //PostCSSのプラグインとしてTailwind CSSを使用する設定
    tailwindcss: {},
    //-webkitなどベンダープレフィックスを自動でつけてくれる（様々なブラウザ対応のため）
    autoprefixer: {}
  }
}

module.exports = config
