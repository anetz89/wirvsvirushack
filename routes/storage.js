var storage = {
  list: []
}


module.exports = {
  push: function(list) {
    storage.list.push(list);
  },
  get: function() {
    return storage.list;
  },
  reset: function() {
    storage.list = [];
  }
};
