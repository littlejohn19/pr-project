'use strict';

import userManager from './user.manager';
import movieManager from './movie.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getMovieManager: getter(movieManager),
};
