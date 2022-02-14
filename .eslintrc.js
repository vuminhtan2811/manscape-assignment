module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-react',
    '@typescript-eslint',
    'react-hooks',
    'unused-imports',
    // 'jsx-a11y',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['hrefLeft', 'hrefRight'],
    //     aspects: ['noHref', 'invalidHref', 'preferButton'],
    //   },
    // ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'eslint-disable-next-line react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    // '@typescript-eslint/semi': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'smart'],
    'no-console': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    radix: 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    'object-shorthand': ['warn', 'always'],
    'no-extra-bind': 'warn',
    '@typescript-eslint/member-delimiter-style': 'off',
  },
};
