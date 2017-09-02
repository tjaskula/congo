Congo = {
  init : function () {
    
    Congo.initTemplateEngine();

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