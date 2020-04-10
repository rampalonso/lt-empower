const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      "./src/components/**/*.js", 
      "./src/pages/**/*.js", 
      "./src/components/**/*.jsx", 
      "./src/pages/**/*.jsx"
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-preset-env',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}