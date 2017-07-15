Congo.MongoDocument = Backbone.Model.extend({
  idAttribute: "_id",
  url: function () {
    var baseUrl = "/mongo-api/" + Congo.currentDatabase + "/" + Congo.selectedCollection;
    if (this.isNew()) {
      return baseUrl;
    } else {
      return baseUrl + "/" + this.id;
    }
  },
  descriptor: function () {
    if (this.get("name"))
      return this.get("name");
    if (this.get("sku"))
      return this.get("sku");
    if (this.get("slug"))
      return this.get("slug");
    else if (this.get("title"))
      return this.get("title");
    else if (this.get("email"))
      return this.get("email");
    else
      return this.get("_id");
  }
});

Congo.MongoDocuments = Backbone.Collection.extend({
  model: Congo.MongoDocument,
  url : function(){
    return "/mongo-api/" + Congo.currentDatabase + "/" + Congo.selectedCollection
  }
});

Congo.EditorView = Marionette.View.extend({
  template : "#editor-template",
  events: {
    "click #save-document": "saveDocument",
    "click #delete-document" : "deleteDocument"
  },
  saveDocument: function () {
    var json = this.editor.getValue();
    try {
      var parsed = JSON.parse(json);
      var newDocument = new Congo.MongoDocument(parsed);
      newDocument.save(newDocument.attributes, {
        success: function (model) {
          Congo.navCollection();
        },
        error: function (model, result) {
          alert("There was a problem on save. Check the server");
        }
      });
    } catch (err) {
      alert("We have a JSON problem");
    }
  },
  deleteDocument: function () {
    if (confirm("Delete this document? You sure?")) {
      this.model.destroy();
      Congo.navCollection();
    }
  },
  onDomRefresh : function () {
    this.editor = ace.edit("ace-editor");
    var JsonMode = require("ace/mode/json").Mode;
    this.editor.getSession().setMode(new JsonMode());

    this.model = this.model || new Congo.MongoDocument({});
    var docJSON = JSON.stringify(this.model.toJSON(), null, '  ');
    this.editor.setValue(docJSON);
    this.editor.selection.clearSelection();
  }
});

Congo.DocumentView = Marionette.View.extend({
  template: "#document-item-template",
  className : "document pull-left",
  events: {
    "click a": "showDocument"
  },
  showDocument: function (ev) {
    ev.preventDefault();
    var route = Congo.currentDatabase + "/" + Congo.selectedCollection + "/" + this.model.id;
    Congo.router.navigate(route, true);
  },
  render: function () {
    var source = $(this.template).html();
    var data = { descriptor: this.model.descriptor() };
    var compiled = _.template(source);
    this.$el.html(compiled(data));
    return this;
  }
});

Congo.DocumentListView = Marionette.CollectionView.extend({
  childView : Congo.DocumentView
});

Congo.DocumentOptionView = Marionette.View.extend({
  template: "#new-document-template",
  events: {
    "click button": "addDocument"
  },
  addDocument: function (event) {
    event.preventDefault();
    Congo.navDocument("new");
  }
});

Congo.DocumentLayoutView = Marionette.View.extend({
  initialize: function(){
    this.collection.on("sync", this.render, this);
  },
  template: "#document-details-template",
  regions: {
    documentList: "#document-list",
    documentOptions: "#document-options"
  },
  onRender: function () {
    var documentListListView = new Congo.DocumentListView({ collection: this.collection });
    var optionView = new Congo.DocumentOptionView({});
    this.getRegion("documentList").show(documentListListView);
    this.getRegion("documentOptions").show(optionView);
  }
})