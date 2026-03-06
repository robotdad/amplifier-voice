/**
 * feedback-widget.js — AmplifierFeedback stub for standalone voice plugin.
 *
 * The full widget is provided by amplifier-distro and renders an inline
 * feedback button that posts ratings to the Amplifier backend. This stub
 * exposes the same public API (window.AmplifierFeedback.init) as a no-op
 * so the voice app's useEffect mount call succeeds silently when running
 * outside the full distro shell.
 */
(function () {
  'use strict';

  window.AmplifierFeedback = {
    /**
     * No-op init — voice app calls this to mount the feedback widget.
     * @param {{ mode: string, container: Element, label: string, context: object }} _options
     */
    init: function (_options) {
      // Stub: feedback widget not available in standalone mode.
    },
  };
})();
