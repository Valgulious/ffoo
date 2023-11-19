import { API_BASE_URL } from 'shared/const/env';
import REST from 'shared/lib/api/REST';
import { REST_ENDPOINT } from 'shared/lib/api/const';

export default class ApiClient {
    public readonly rest: REST;

    constructor() {
        this.rest = new REST(`${API_BASE_URL}/${REST_ENDPOINT}`);
    }
}
