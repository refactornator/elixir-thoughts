const LocalStorage = {
  getItem: key => {
    return localStorage.getItem(key);
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // In Private Browsing mode on Safari an exception is thrown when writing to localStorage
      // Swallow all errors because browsers can't differentiate, ugh
      // http://chrisberkhout.com/blog/localstorage-errors/
    }
  },
  removeItem: key => {
    localStorage.removeItem(key);
  }
};

module.exports = LocalStorage;