import container from './container';

import localStorage from './dependencies/localStorage';
import dataStore from './dependencies/dataStore';


import reactRegistration from './wrappedModules/react';
import appRegistration from './App';

container.registerImport(localStorage);
container.registerImport(dataStore);

container.registerImport(reactRegistration);
container.registerImport(appRegistration);

export default container;