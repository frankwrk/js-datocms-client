export default function localizedRead(entity, key, localized, i18n) {
  const hash = entity[key];
  if (localized && hash) {
    const fallbacks = i18n.fallbacks || {};
    const locales = [i18n.locale].concat(fallbacks[i18n.locale] || []);
    const localeWithValue = locales.find(locale => hash[locale]);
    return localeWithValue ? hash[localeWithValue] : null;
  }

  return hash;
}
