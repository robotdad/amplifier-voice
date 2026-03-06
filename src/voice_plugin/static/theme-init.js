/**
 * theme-init.js — early theme initialisation stub for standalone voice plugin.
 *
 * The full version is served by amplifier-distro and handles system dark/light
 * preference sync, localStorage persistence, and cross-tab theme events.
 * This stub is a no-op: the voice plugin ships its own dark-theme tokens in
 * amplifier-theme.css so no runtime switching is needed when running standalone.
 */
(function () {
  'use strict';
  // Nothing to initialise in standalone mode — CSS variables in
  // amplifier-theme.css provide the complete dark-theme token set.
})();
