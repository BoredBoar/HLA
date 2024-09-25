function AppViewModel() {
    var self = this
    self.count = ko.observable(8)

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());