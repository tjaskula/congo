(function (congo) {
  congo.breadcrumbViewModel = function() {
    var
      crumb = function (caption, addSeparator) {
        var crumb = "<li><h3>" + caption + "</h3></li>";
        if (addSeparator) {
          crumb = crumb + crumbSeparator();
        }
        return crumb;
      },
      crumbWithLink = function (caption, id, addSeparator) {
        var crumb = "<li><h3><a href='#' id='" + id + "'>" + caption + "</a>";
        if (addSeparator) {
          crumb = crumb + crumbSeparator();
        }
        return crumb;
      },
      crumbSeparator = function () {
        return "<span class='divider'>/</span></h3></li>";
      },
      showCrumbs = ko.observable(crumb("DATABASES"))
      return {
        showCrumbs : showCrumbs
      }
  };
}(congo));