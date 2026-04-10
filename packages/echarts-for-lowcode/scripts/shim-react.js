// Shim file to inject global variables
// This runs before any other code

// Get React from global scope
var React = (typeof window !== 'undefined' && window.React) || (typeof globalThis !== 'undefined' && globalThis.React);

// Provide a require function that returns global React
var require = function(mod) {
  if (mod === 'react' || mod === 'react-dom') {
    return React;
  }
  throw new Error('Unknown module: ' + mod);
};

// Export for esbuild inject
export { React, require };
