(function($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.buttonOne = {

    /**
     * Drupal attach behavior.
     */
    attach: function(context, settings) {
      $('.btn-one').once('btn-one-click').click(function() {
        $("<div>You clicked on button one!</div>").dialog();
      });
    }
  };

}(jQuery, Drupal, drupalSettings));