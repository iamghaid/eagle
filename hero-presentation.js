(function (root) {
  function heroSource(info, language, theme) {
    info = info || {};
    var suffix = theme === 'light' ? 'Light' : 'Dark';
    var key = 'heroImg' + (language === 'ar' ? 'Ar' : 'En') + suffix;
    // Each language/theme owns its composition. Old shared images remain archived.
    return info[key] ||
      'assets/hero-' + (language === 'ar' ? 'ar' : 'en') + '-' + (theme === 'light' ? 'light' : 'dark') + (language === 'ar' ? '.png' : '.jpg');
  }
  root.EaglePresentation = { heroSource: heroSource };
  if (typeof module !== 'undefined') module.exports = root.EaglePresentation;
})(typeof window !== 'undefined' ? window : globalThis);
