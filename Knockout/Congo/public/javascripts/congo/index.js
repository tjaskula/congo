Congo = {
  init: function () {
    
    Congo.initTemplateEngine();

    // var viewModel = {
    //   people: ko.observableArray([
    //       { name: 'Rod', age: 123 },
    //       { name: 'Jane', age: 125 },
    //   ])        
    // };

    // the App layout
    Congo.appViewModel = {
      navViewModel: new Congo.breadcrumbViewModel(),
      detailsViewModel: new Congo.databasesViewModel()
    };
    
    ko.applyBindings(Congo.appViewModel);
  },
  start: function () {

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