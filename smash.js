function smash(words) {
    let n = words.length;
    let s = '';
    if (n === 0) {
      return '';
    } else {
      for (let i = 0; i < n; i++) {
        s += words[i];
        if (i !== n - 1) {
          s += ' '; // Add space after each word except the last one
        }
      }
    }
    return s;
  };