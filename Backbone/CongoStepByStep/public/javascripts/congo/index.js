Congo = {
  init : function () {

    // data
    Congo.databases = new Congo.DatabaseCollection();

    // views
    Congo.breadcrumbs = new Congo.BreadcrumbView({ el: "#nav"} );
    Congo.details = new Congo.DetailsView({ el: "#details"});

    // start it off
    Congo.start();
  },
  start : function () {
    Congo.databases.fetch();
  }
}