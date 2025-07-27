module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'], // Changed from '<rootDir>/jest.setup.js'
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
};
