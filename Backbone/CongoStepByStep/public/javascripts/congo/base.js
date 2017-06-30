Congo.View = Backbone.View.extend({
  render : function() {
    var source = $(this.template).html();
    var data = {};
    if (this.model)
      data = this.model.toJSON();
    var compiled = _.template(source, data);
    this.$el.html(compiled);
    return this;
  }
});

Congo.ListView = Backbone.View.extend({
  initialize : function () {
    this.collection.bind("reset", this.render, this);
    this.collection.bind("add", this.render, this);
    this.collection.bind("remove", this.render, this);
    this.renderOptionView();
  },
  renderOptionView : function () {
    var optionView = new Congo.DatabaseOptionView({ el : "#db-options" });
  },
  render : function() {
    var self = this;
    var els = [];
    this.collection.each(function (item){
      var itemView = new self.ItemView({ model : item });
      els.push(itemView.render().el)
    });
      
    this.$el.html(els);
    return this;
  }
});

Congo.DetailsView = Backbone.View.extend({
  initialize : function () {
    this.render();
  },
  render : function () {
    // load up our db details and options view
    var listView = new Congo.DatabaseListView({ collection : Congo.databases });
    var optionView = new Congo.DatabaseOptionView();

    // add the details template to the DOM
    var templateSource = $("#db-details-template").html();
    this.$el.append(_.template(templateSource));

    // render them to this el
    var dbDetails = this.$("#database-list");
    var dbOptions = this.$("#database-options");
    dbDetails.append(listView.render().el);
    dbOptions.append(optionView.render().el);

    this.$el.append(dbDetails);
    this.$el.append(dbOptions);

    return this;
  }
});