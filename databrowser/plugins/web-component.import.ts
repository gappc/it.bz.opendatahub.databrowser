/**
 * This plugin imports and registers the Web-Components.
 */

// Import from Web Component src to enable auto reload on changes during dev
import { DatabrowserExample } from '~/../web-components/databrowser-example/src/DatabrowserExample';

window.customElements.define('databrowser-example', DatabrowserExample);
