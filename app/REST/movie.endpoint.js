import business from '../business/business.container';
import auth from '../middleware/auth';
import applicationException from "../service/applicationException";

const movieEndpoint = (router) => {
    router.get('/api/movies', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/movies/:id', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/movies/search', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().search(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/movies', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default movieEndpoint;
