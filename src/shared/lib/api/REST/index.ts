import AbstractAxiosClient from 'shared/lib/api/axios';

export default class REST extends AbstractAxiosClient {
    public get = this._client.get;
}
