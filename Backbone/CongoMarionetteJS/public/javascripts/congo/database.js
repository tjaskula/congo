Congo.Database = Backbone.Model.extend({
  url : function () {
    return "mongo-api/dbs/" + this.id;
  },
  idAttribute : "name"
});

Congo.DatabaseCollection = Backbone.Collection.extend({
  model : Congo.Database,
  url : "mongo-api/dbs"
});

Congo.DatabaseOptionView = Marionette.View.extend({
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

Congo.DatabaseView = Marionette.View.extend({
  tagName : "tr",
  template : "#database-list-template",
  events : {
    "click button" : "removeDb",
    "click a" : "showDb"
  },
  removeDb : function () {
    var confirmed = confirm("Delete this? You sure?");
    if (confirmed)
      this.model.destroy();
  },
  showDb : function(ev) {
    ev.preventDefault();
    var db = $(ev.currentTarget).data("db");
    Congo.router.navigate(db, true);
  }
});

Congo.DatabaseListView = Marionette.CollectionView.extend({
  tagName : "table",
  className : "table table-striped",
  childView : Congo.DatabaseView
});

Congo.DatabaseLayoutView = Marionette.View.extend({
  template : "#db-details-template",
  regions : {
    databaseList : "#database-list",
    databaseOptions : "#database-options"
  },
  onRender : function () {
    var dbListView = new Congo.DatabaseListView({ collection : this.collection });
    var dbOptionView = new Congo.DatabaseOptionView({});
    this.getRegion("databaseList").show(dbListView);
    this.getRegion("databaseOptions").show(dbOptionView);
  }
});