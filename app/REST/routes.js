import movieEndpoint from './movie.endpoint';
import userEndpoint from './user.endpoint';

const routes = function (app) {
    movieEndpoint(app);
    userEndpoint(app);
};

export default routes;
