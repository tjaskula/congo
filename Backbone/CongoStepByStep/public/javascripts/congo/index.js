Congo = {
  init: function () {
    var crumbView = new Congo.BreadcrumbView({ el: "#breadcrumbs"} );
    crumbView.render();

    var dbs = new Congo.Databases();
    var dbListView = new Congo.DatabaseListView({ collection : dbs });
    dbs.fetch();
  }
}