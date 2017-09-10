Congo.databases =
  [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" }
  ];

Congo.databasesViewModel = function() {
  var
    view = new Congo.View("databasesViewModel", "db-details-template", Congo.databases)
  return {
    view : view
  }
};