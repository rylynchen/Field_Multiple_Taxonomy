(function ($) {

/**
 * Fills the suggestion popup with any matches received.
 */
Drupal.jsAC.prototype.found = function (data) {
  var matches = $(this.input).hasClass('multiple_taxonomy_field') ? data.matches : data;
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  if ($(this.input).hasClass('multiple_taxonomy_field') && Object.keys(matches).length == 0 && data.allowed_new == 1) {
    var div = $('<div></div>');
    $('<div>' + Drupal.t('没有找到相匹配的词汇，可以将其作为新词汇添加到：') + '</div>').appendTo(div);
    var ul = $('<ul></ul>');
    var ac = this;
    for (key in data.vocabularies) {
      $('<li></li>')
        .html($('<div></div>').html(data.vocabularies[key].name))
        .mousedown(function () { ac.select(this); })
        .mouseover(function () { ac.highlight(this); })
        .mouseout(function () { ac.unhighlight(this); })
        .data('autocompleteValue', data.prefix + data.last + '<' + data.vocabularies[key].name + '>')
        .appendTo(ul);
    }
    $(ul).appendTo(div);
    // Show popup with matches, if any.
    if (this.popup) {
      $(this.popup).empty().append(div).show();
      $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
    }
  }
  else {
    // Prepare matches.
    var ul = $('<ul></ul>');
    var ac = this;
    for (key in matches) {
      $('<li></li>')
        .html($('<div></div>').html(matches[key]))
        .mousedown(function () { ac.select(this); })
        .mouseover(function () { ac.highlight(this); })
        .mouseout(function () { ac.unhighlight(this); })
        .data('autocompleteValue', key)
        .appendTo(ul);
    }
    // Show popup with matches, if any.
    if (this.popup) {
      if (ul.children().length) {
        $(this.popup).empty().append(ul).show();
        $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
      }
      else {
        $(this.popup).css({ visibility: 'hidden' });
        this.hidePopup();
      }
    }
  }

};

})(jQuery);