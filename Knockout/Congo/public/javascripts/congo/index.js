Congo = {
  init : function () {
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

    var viewModel = {
      people: ko.observableArray([
          { name: 'Rod', age: 123 },
          { name: 'Jane', age: 125 },
      ])        
    };
            
    ko.applyBindings(viewModel);

    // router

    // data

    // views

    // the App layout
    
  },
  start : function () {

    // initialize the app
    Congo.init();
    
    // for routing purposes
    
  },
  navHome: function () {
    
  },
  navDatabase: function (db) {
    
  },
  navCollection: function (collection) {
    
  },
  navDocument: function (id) {
    
  }
}