(function(){
  $.fn.tabify = function(){
    this.replaceWith(this.tabifyGenerate())
  };
  $.fn.tabifyGenerate = function () {
    uid = Date.now();
    setTimeout(function () { $('#' + uid).find('label').eq(0).trigger('click') })
    return $('<div>').addClass('tabify').attr('id', uid).append(
      this.find('ul').children().map(function (index, val) {
        return [
          $('<input>').attr({ type: 'radio', name: 'tabifyTabs', id: uid.toString() + index }),
          $('<label>').attr({ for: uid.toString() + index }).html($(val).text())
        ];
      }).toArray().reduce(function (a, b) {
        return $(a).toArray().concat($(b).toArray())
      })
    ).append($('<div>').addClass('tabifyTabs').append(this.children('div')));
  };
})($);
