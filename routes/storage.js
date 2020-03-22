var storage = {
  list: [{
      'name': 'Markus',
      'phoneNumber': '345678',
      'shoppingItems': [
          'Apfel',
          'Schokolade'
      ],
      'address': 'woanders, München',
      'latlng': [
          48.34369,
          11.24907
      ]
  }, {
      'name': 'Daniel',
      'phoneNumber': '345678',
      'shoppingItems': [
          'Apfel',
          'Karotte'
      ],
      'address': 'Arnulfstraße 60, München',
      'latlng': [
          48.14369,
          11.54907
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
