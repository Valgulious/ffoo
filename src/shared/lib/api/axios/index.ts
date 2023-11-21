import axios, { AxiosInstance } from 'axios';

const TIMEOUT_ERROR_MESSAGE = 'TimeoutError';

export default abstract class AbstractAxiosClient {
    protected readonly _client: AxiosInstance;

    public constructor(apiBaseUrl: string) {
        this._client = axios.create({
            baseURL: apiBaseUrl,
            timeout: 30000,
            timeoutErrorMessage: TIMEOUT_ERROR_MESSAGE,
        });
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}
