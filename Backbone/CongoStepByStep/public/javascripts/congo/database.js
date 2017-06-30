Congo.Database = Backbone.Model.extend({
  url : function () {
    return "mongo-api/dbs/" + this.id;
  },
  validate : function (atts) {
    if (_.isEmpty(atts.name)) {
      return "Needs a name!";
    }
  },
  idAttribute : "name"
});

Congo.DatabaseCollection = Backbone.Collection.extend({
  model : Congo.Database,
  url : "mongo-api/dbs"
});

Congo.DatabaseOptionView = Congo.View.extend({
  initialize : function () {
    this.render();
  },
  template : "#new-db-template",
  events : {
    "submit form" : "addDb"
  },
  addDb : function (event) {
    event.preventDefault();
    var newDbName = $("#newDb").val();
    var newDb = new Congo.Database({ name : newDbName })
    newDb.save();
    Congo.databases.add(newDb);
  }
});

Congo.DatabaseView = Congo.View.extend({
  tagName : "tr",
  template : "#database-list-template",
  events : {
    "click button" : "removeDb"
  },
  removeDb : function () {
    var confirmed = confirm("Delete this database? You sure? That sounds crazy...");
    if (confirmed) {
      this.model.destroy();
      Congo.databases.remove(this.model);
    }
  }
});

Congo.DatabaseListView = Congo.ListView.extend({
  tagName : "table",
  className : "table table-striped",
  ItemView : Congo.DatabaseView
});