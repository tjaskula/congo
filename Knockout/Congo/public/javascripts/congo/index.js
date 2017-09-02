Congo = {
  init : function () {
    
    Congo.initTemplateEngine();

    // var viewModel = {
    //   people: ko.observableArray([
    //       { name: 'Rod', age: 123 },
    //       { name: 'Jane', age: 125 },
    //   ])        
    // };

    // the App layout
    var appViewModel = {
      navViewModel: new Congo.breadcrumbViewModel()
    };
    
    ko.applyBindings(appViewModel);
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