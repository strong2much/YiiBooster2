var bootstrapButton, bootstrapTooltip;

(function ($) {
    bootstrapButton = $.fn.button;
    bootstrapTooltip = $.fn.tooltip;
    $.fn.bootstrapButton = bootstrapButton;
    $.fn.bootstrapTooltip = bootstrapTooltip;
})(jQuery);