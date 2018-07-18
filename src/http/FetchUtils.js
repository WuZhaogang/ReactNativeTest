import React, {Component} from 'react';

export default class FetchUtils extends React.Component {


    static sendGet(url, data, callback) {
        let request;
        request = new Request(url, {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json'
            })
        });
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);
            });
    }

    static sendPost(url, data, callback) {
        let request;
        request = new Request(url, {
            method: 'POST',
            headers: ({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        });
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);
            });
    }
}