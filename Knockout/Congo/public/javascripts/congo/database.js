(function (congo) {
  congo.Database = function () {
    var self = this;
    self.name = ko.observable();
  };
  // congo.databaseViewModel = function(db) {
  //   var view = new congo.View("database-list-template", db)
  //   return {
  //     view : view
  //   }
    // events : {
    //   "click button" : "remove",
    //   "click a" : "showDb"
    // },
    // showDb : function(ev) {
    //   ev.preventDefault();
    //   var db = $(ev.currentTarget).data("db");
    //   congo.router.navigate(db, true);
    // }
  //};

  congo.databaseListViewModel = function(databaseList) {
    var viewDetails = new congo.View("database-list-template", databaseList),
        viewOptions = new congo.View("new-db-template")
    return {
      viewDetails : viewDetails,
      viewOptions : viewOptions
    }
  };

  congo.databasesLayoutViewModel = function() {
    var databases = ko.observableArray([]),
        loadDatabasesCallback = function (json) {
          _.each(json, function(db) {
            databases.push(new congo.Database().name(db.name));
          });
        },
        loadDatabases = function () {
          congo.ajaxService.ajaxGetJson("mongo-api/dbs", null, loadDatabasesCallback)
        };
    loadDatabases();
    var view = new congo.View("db-details-template", new congo.databaseListViewModel(databases));
    return {
      view : view
    }
  };
}(congo));