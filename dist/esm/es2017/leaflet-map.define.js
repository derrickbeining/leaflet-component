
// LeafletMap: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './leaflet-map.core.js';
import { COMPONENTS } from './leaflet-map.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
