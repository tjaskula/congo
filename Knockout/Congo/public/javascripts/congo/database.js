Congo.databases =
  [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" }
  ];

// Congo.databaseViewModel = function(db) {
//   var view = new Congo.View("database-list-template", db)
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
  //   Congo.router.navigate(db, true);
  // }
//};

Congo.databaseListViewModel = function(databaseList){
  var viewDetails = new Congo.View("database-list-template", databaseList);
      viewOptions = new Congo.View("new-db-template");
      onDatabaseClick = function(item, event) {
        console.log("Clicked Db : " + JSON.stringify(item));
      }
  return {
    viewDetails : viewDetails,
    viewOptions : viewOptions,
    dbSelect : onDatabaseClick
  }
};

Congo.databasesLayoutViewModel = function() {
  var view = new Congo.View("db-details-template", new Congo.databaseListViewModel(Congo.databases));
  return {
    view : view
  }
};