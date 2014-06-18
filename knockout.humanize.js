/* global ko, humanize */

ko.bindingHandlers.number = {
    update: function(element, valueAccessor, allBindingsAccessor)
    {
        var bindings = allBindingsAccessor();
        var decimals = bindings.decimals || 0;
        var decimalPoint = bindings.decimalPoint || '.';
        var separator = bindings.separator || ',';

        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.numberFormat(value,
                        decimals,
                        decimalPoint,
                        separator);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
        //ko.bindingHandlers.html.update(element, getval);
    }
};

ko.bindingHandlers.ordinal = {
    update: function(element, valueAccessor)
    {
        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.ordinal(value);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
    }
};

ko.bindingHandlers.naturalday = {
    update: function(element, valueAccessor, allBindingsAccessor)
    {
        var bindings = allBindingsAccessor();
        var format = bindings.format || 'Y-m-d';

        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.naturalDay(value, format);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
        //ko.bindingHandlers.html.update(element, getval);
    }
};

ko.bindingHandlers.filesize = {
    update: function(element, valueAccessor, allBindingsAccessor)
    {
        var bindings = allBindingsAccessor();
        var kilo = bindings.kilo || 1024;
        var decimals = bindings.decimals || 2;

        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.filesize(value, kilo, decimals);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
        //ko.bindingHandlers.html.update(element, getval);
    }
};

ko.bindingHandlers.linebreaks = {
    update: function(element, valueAccessor)
    {
        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.linebreaks(value);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
    }
};

ko.bindingHandlers.nl2br = {
    update: function(element, valueAccessor)
    {
        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.nl2br(value);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
    }
};

ko.bindingHandlers.truncate = {
    update: function(element, valueAccessor, allBindingsAccessor)
    {
        var bindings = allBindingsAccessor();
        var length = bindings.length || 100;

        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.truncatechars(value, length);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
    }
};

ko.bindingHandlers.truncatewords = {
    update: function(element, valueAccessor, allBindingsAccessor)
    {
        var bindings = allBindingsAccessor();
        var length = bindings.length || 100;

        var getval = function()
        {
            var value = ko.utils.unwrapObservable(valueAccessor());
            return humanize.truncatewords(value, length);
        };

        ko.bindingHandlers.text.update(element, getval);
        ko.bindingHandlers.value.update(element, getval);
    }
};
