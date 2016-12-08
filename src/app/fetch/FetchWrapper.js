/**
 * Created by macbook on 07/12/16.
 */

import fetch from "isomorphic-fetch";


export class FetchWrapper{
    constructor(){

        this.customFetch = this.customFetch.bind(this);
    }

    static customFetch(url,opts){
        opts.headers = opts.headers || {};
        opts.header = {
            "ApiKey":"00000000-aaa-1111-bbbbbbbbbbbb",
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        };

        return fetch(url, opts);
    }
}