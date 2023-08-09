module.exports = {
    "cache": false,
    "testEnvironment": "jsdom",
    "collectCoverage": true,
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "modulePaths": ["./"],
    "coverageReporters": [
        "text",
        "lcov",
        "cobertura"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    "coverageDirectory": "<rootDir>/test-results/coverage",
    "coveragePathIgnorePatterns": [
        "<rootDir>/src/index.js",
        "<rootDir>/src/App.jsx",
        "<rootDir>/jest.setup.js",
        "<rootDir>/*.config.js",
        "<rootDir>/*.config.json",
        "<rootDir>/*.json",
    ],
    "collectCoverageFrom": [
        "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/**",
        "!<rootDir>/build/**",
        "!<rootDir>/dist/**",
        "!<rootDir>/test-results/**",
        "!**/vendor/**"
    ],
    "testMatch": [
        "<rootDir>/__tests__/**/*.(test).{js,jsx,ts,tsx}",
        "<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
    ],
    "setupFilesAfterEnv": [
        "@testing-library/jest-dom/extend-expect"
    ]
}