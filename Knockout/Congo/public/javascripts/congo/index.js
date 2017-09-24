global.congo = {};
$(function () {
  congo.init = function () {
    
    congo.initTemplateEngine();

    // var viewModel = {
    //   people: ko.observableArray([
    //       { name: 'Rod', age: 123 },
    //       { name: 'Jane', age: 125 },
    //   ])        
    // };

    // the App layout
    congo.appViewModel = function () {
      navViewModel = new congo.breadcrumbViewModel(),
      detailsViewModel = new congo.databasesLayoutViewModel(),
      onDatabaseClick = function(item) {
        console.log("Clicked Db : " + ko.toJSON(item));
      };
      return {
        navViewModel: navViewModel,
        detailsViewModel: detailsViewModel,
        dbSelect: onDatabaseClick
      }
    };
    
    ko.applyBindings(congo.appViewModel);
  },
  congo.start = function () {

    // initialize the app
    congo.init();
    
    // for routing purposes
    
  },
  congo.navHome = function () {
    
  },
  congo.navDatabase = function (db) {
    
  },
  congo.navCollection = function (collection) {
    
  },
  congo.navDocument = function (id) {
    
  }
  // start congo application
  congo.start();
});