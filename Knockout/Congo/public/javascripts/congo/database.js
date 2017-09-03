Congo.databases =
  [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" }
  ];

Congo.databasesViewModel = function() {
  var
    templateName = "db-details-template",
    data = Congo.databases
  return {
    templateName : templateName,
    data : data
  }
};