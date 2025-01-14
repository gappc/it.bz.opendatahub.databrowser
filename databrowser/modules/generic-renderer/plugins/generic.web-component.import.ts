/**
 * This plugin imports and registers the Web-Components.
 */

// Import from Web Component src to enable auto reload on changes during dev
import { DatabrowserExample } from '~/../web-components/databrowser-example/src/DatabrowserExample';
import {
  GenericFilter,
  GenericList,
  GenericResource,
} from '~/../web-components/databrowser-generic';
import {
  OdhActivityPoiDetail,
  OdhActivityPoiFilter,
  OdhActivityPoiList,
} from '~/../web-components/databrowser-tourism';

window.customElements.define('databrowser-example', DatabrowserExample);
window.customElements.define('databrowser-generic-filter', GenericFilter);
window.customElements.define('databrowser-generic-list', GenericList);
window.customElements.define('databrowser-generic-resource', GenericResource);

window.customElements.define(
  'databrowser-odh-activity-poi-detail',
  OdhActivityPoiDetail
);
window.customElements.define(
  'databrowser-odh-activity-poi-filter',
  OdhActivityPoiFilter
);
window.customElements.define(
  'databrowser-odh-activity-poi-list',
  OdhActivityPoiList
);
