import movieDAO from '../DAO/movieDAO';

function create(context) {
    async function query() {
        let result = movieDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await movieDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await movieDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function search(data) {
        let result = await movieDAO.search(data);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        search
    };
}

export default {
    create: create
};
