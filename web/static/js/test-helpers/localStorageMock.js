var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function(key) {
      store[key] = null;
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
