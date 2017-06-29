Congo = {
  init: function () {
    var crumbView = new Congo.BreadcrumbView({el: "#breadcrumbs"});
    crumbView.render();

    var dbs = new Congo.Databases();
    dbs.fetch({
      success : function (call, res, options) {
        var dbListView = new Congo.DatabaseListView({collection : dbs});
        dbListView.render();
      },
      error : function (call, res, options) {
        console.log("OHHHNOOOOO");
      }
    });
  }
}