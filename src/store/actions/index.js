//generic action creator
export const createAction = (type, payload = {}) => {
    return {
        type,
        ...payload,
    };
}

//action status
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

//generic request type function
export const createRequestTypes = (base) => {
    if (!base) {
        throw new Error('cannot create request type with base = \'\' or base = null');
    }
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}