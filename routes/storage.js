var storage = {
  lists: []
}


module.exports = {
  push: function(list) {
    storage.lists.push(list);
  },
  get: function() {
    return storage.lists;
  }
};
