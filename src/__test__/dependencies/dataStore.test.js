global.dject = require('dject');
const sinon = require('sinon');

describe('dataStore', function () {

  let dataStore;
  let testContainer;
  let localStorageFake;

  beforeEach(function (done) {
    localStorageFake = {
      get: sinon.stub(),
      set: sinon.stub()
    };

    import('../../ioc-registrations')
      .then(function (result) {
        testContainer = result.default.new();

        testContainer.override(() => localStorageFake, 'localStorage');

        dataStore = testContainer.build('dataStore');

        done();
      });
  });

  describe('createTodoItem', function () {

    it('saves todo item to new item list', function () {
      localStorageFake.get.callsFake(() => undefined);

      const todoItem = {
        description: 'Just stick an item in the list',
        completed: false
      };

      dataStore.createTodoItem(todoItem);

      const savedList = localStorageFake.set.args[0][1];

      expect(localStorageFake.get.callCount).toEqual(1);
      expect(JSON.stringify(savedList)).toEqual(JSON.stringify([todoItem]));
    });

    it('saves todo item to existing item list', function () {
      localStorageFake.get.callsFake(() => [{}]);

      const todoItem = {
        description: 'Just stick an item in the list',
        completed: false
      };

      dataStore.createTodoItem(todoItem);

      const savedList = localStorageFake.set.args[0][1];

      expect(localStorageFake.get.callCount).toEqual(1);
      expect(JSON.stringify(savedList)).toEqual(JSON.stringify([{}, todoItem]));
    });

  });

});
