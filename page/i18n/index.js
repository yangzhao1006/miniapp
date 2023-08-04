import i18next from 'i18next';
import strings from './strings';

// change your language here
const defaultLng = 'en-US';

const config = {
  lng: defaultLng,
  keySeparator: false,
  resources: Object.keys(strings).reduce((l, v) => ({ ...l, [v]: { translation: strings[v] } }), {})
};

i18next.init(config);
