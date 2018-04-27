"use strict";

export default function makeJQueryElements() {
    $(".btn").button();

    $(".dialog-window").dialog({
        autoOpen: false,
        width: 470,
        open : function() {
            $(this).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").remove();
        }
    });
}
