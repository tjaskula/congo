Congo.BreadcrumbView = Backbone.View.extend({
  initialize : function () {
    Congo.router.on("route:index", this.renderIndex, this);
    Congo.router.on("route:showDatabase", this.renderDatabase, this);
    Congo.router.on("route:showCollection", this.renderCollection, this);
  },
  renderIndex : function() {
    this.$el.empty();
    this.$el.append("<li><h3>DATABASES</h3></li>");
    return this;
  },
  renderDatabase : function (db) {
    this.$el.empty();
    this.$el.append("<li><h3><a href='#' id='summary'>DATABASES</a><span class='divider'>/</span></h3></li>");
    this.$el.append("<li><h3>" + db + "</h3></li>");
    return this;
  },
  renderCollection : function (db, collection) {
    this.$el.empty();
    this.$el.append("<li><h3><a href='#' id='summary'>DATABASES</a><span class='divider'>/</span></h3></li>");
    this.$el.append("<li><h3><a href='#' id='db-details' data-db='" + db + "'>" + db + "</a><span class='divider'>/</span></h3></li>");
    this.$el.append("<li><h3>" + collection + "</h3></li>");
    return this;
  },
  events : {
    "click #summary" : "navIndex",
    "click #db-details" : "navDb",
  },
  navDb: function (ev) {
    ev.preventDefault();
    var dbName = $(ev.currentTarget).data("db");
    Congo.router.navigate(dbName, true);
  },
  navIndex : function (ev) {
    ev.preventDefault();
    Congo.router.navigate("", true);
  }
});