import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: function (backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) { },
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
