var storage = {
  list: [{
      'name': 'Marie Mayer',
      'phoneNumber': '+49302270',
      'shoppingItems': [
          'Karotten'
      ],
      'address': 'Altenastraße 10, 81375 München',
      'latlng': [
          48.1155,
          11.48657
      ]
  }]
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
