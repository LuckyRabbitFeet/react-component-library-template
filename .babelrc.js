module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '>0.2%, not dead, not op_mini all'
      }
    ],
    '@babel/typescript',
    [
      '@babel/react',
      {
        runtime: 'automatic'
      }
    ]
  ],
  plugins: [
    'macros',
    ['@babel/plugin-transform-runtime', { corejs: 3 }]
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
    },
  },
}
