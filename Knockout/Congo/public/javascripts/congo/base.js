(function (congo) {
    congo.View = function(templateName, data, isReady) {
        // this.templateName = ko.observable(templateName);
        // this.data = ko.observable(data); 
        // this.isReady = ko.observable(isReady);
        this.templateName = templateName;
        this.data = data; 
        this.isReady = isReady;
    };

    congo.initTemplateEngine = function() {
        // taken from http://jsfiddle.net/x36r0t3L/
        /* ---- Begin integration of Underscore template engine with Knockout. Could go in a separate file of course. ---- */
        ko.underscoreTemplateEngine = function () { }
        ko.underscoreTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
            renderTemplateSource: function (templateSource, bindingContext, options) {
                // Precompile and cache the templates for efficiency
                var precompiled = templateSource['data']('precompiled');
                if (!precompiled) {
                    precompiled = _.template("<% with($data) { %> " + templateSource.text() + " <% } %>");
                    templateSource['data']('precompiled', precompiled);
                }
                // Run the template and parse its output into an array of DOM elements
                var renderedMarkup = precompiled(bindingContext).replace(/\s+/g, " ");
                return ko.utils.parseHtmlFragment(renderedMarkup);
            },
            createJavaScriptEvaluatorBlock: function(script) {
                return "<%= " + script + " %>";
            }
        });
        ko.setTemplateEngine(new ko.underscoreTemplateEngine());
        /* ---- End integration of Underscore template engine with Knockout ---- */
    };

    congo.ajaxService = (function () {
        var ajaxGetJson = function (getUrl, jsonIn, callback) {
            $.ajax({
                url: getUrl,
                type: "GET",
                data: ko.toJSON(jsonIn),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    callback(json);
                }
            });
        },
            ajaxPostJson = function (postUrl, jsonIn, callback) {
                $.ajax({
                    url: postUrl,
                    type: "POST",
                    data: ko.toJSON(jsonIn),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        callback(json);
                    }
                });
            };
        return {
            ajaxGetJson: ajaxGetJson,
            ajaxPostJson: ajaxPostJson
        };
    })();

}(congo));