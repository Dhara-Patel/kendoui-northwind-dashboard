﻿$(document).ready(function () {
    var getItem = function (target) {
        var itemIndexes = target.val().split(/[.,]/),
            rootItem = panelBar.element.children("li").eq(itemIndexes[0]);

        return itemIndexes.length > 1 ?
            rootItem.find(".k-group > .k-item").eq(itemIndexes[1]) :
            rootItem;
    },
        select = function (e) {
            if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode)
                panelBar.select(getItem($("#selectIndex")));
        },
        append = function (e) {
            if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode)
                panelBar.append({
                    text: $("#appendText").val()
                }, panelBar.select());
        },
        before = function (e) {
            if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode)
                panelBar.insertBefore({
                    text: $("#beforeText").val()
                }, panelBar.select());
        },
        after = function (e) {
            if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode)
                panelBar.insertAfter({
                    text: $("#afterText").val()
                }, panelBar.select());
        };

    $(".selectItem").click(select);
    $("#selectIndex").keypress(select);

    $(".appendItem").click(append);
    $("#appendText").keypress(append);

    $(".beforeItem").click(before);
    $("#beforeText").keypress(before);

    $(".afterItem").click(after);
    $("#afterText").keypress(after);

    $(".toggleItem").click(function (e) {
        var item = panelBar.select();
        panelBar.enable(item, item.hasClass("k-state-disabled"));
    });

    $(".triggerItem").click(function (e) {
        var item = panelBar.select();

        if (item.hasClass("k-state-active")) {
            panelBar.collapse(item);
        } else {
            panelBar.expand(item);
        }
    });

    $(".removeItem").click(function (e) {
        panelBar.remove(panelBar.select());
    });

});
var panelBar = $(".panelbar").kendoPanelBar().data("kendoPanelBar");