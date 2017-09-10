Congo.databases =
  [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" }
  ];

Congo.databaseViewModel = function(db) {
  var view = new Congo.View("database-list-template", db)
  return {
    view : view
  }
  // events : {
  //   "click button" : "remove",
  //   "click a" : "showDb"
  // },
  // showDb : function(ev) {
  //   ev.preventDefault();
  //   var db = $(ev.currentTarget).data("db");
  //   Congo.router.navigate(db, true);
  // }
};

Congo.databaseListViewModel = function(databaseList){
  var view = new Congo.View("database-list-template", databaseList)
  return {
    view : view
  }
};

Congo.databasesLayoutViewModel = function() {
  var view = new Congo.View("db-details-template", new Congo.databaseListViewModel(Congo.databases))
  return {
    view : view
  }
};