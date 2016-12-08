import autoBind from "react-autobind";
import fetch from "isomorphic-fetch";


const BASE_URL = "@@urlEndpointTodoDefault/api/todo";

class TodoClient {

    constructor() {
        autoBind(this);
    }

    _getEntityUrl() {
        return BASE_URL;
    }

    _getHeaders() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "ApiKey": "@@ApiKey"
        };
    }

    /**
     *
     * @returns {Promise}
     */
    getAllTodosClient() {
        return new Promise((resolve, reject) => {
            fetch(this._getEntityUrl(), {
                method: "GET",
                headers: this._getHeaders()
            }).then((response) => {
                if (response.status !== 200) {
                    reject(response.status + " : " + response.statusText);
                } else {
                    response.json().then((todoList) =>
                        resolve(todoList)
                    ).catch((error) => {
                        reject(error.message);
                    });
                }
            })
                .catch((error) => {
                    reject(error.message);
                });
        });
    }

    /**
     *
     * @param {Number} id
     * @returns {Promise}
     */
    getTodoByIdClient(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this._getEntityUrl()}/${id}`, {
                method: "GET",
                headers: this._getHeaders()
            }).then((response) => {
                if (response.status !== 200) {
                    reject(response.status + " : " + response.statusText);
                } else {
                    response.json().then((todo) =>
                        resolve(todo)
                    ).catch((error) => {
                        reject(error.message);
                    });
                }
            })
                .catch((error) => {
                    reject(error.message);
                });
        });
    }


    /**
     *
     * @param {Object} todo
     * @returns {Promise}
     */
    saveTodoClient(todo) {
        return new Promise((resolve, reject) => {
            fetch(this._getEntityUrl(), {
                method: "POST",
                headers: this._getHeaders(),
                body: JSON.stringify(todo)
            }).then((response) => {
                if (response.status !== 201) {
                    reject(response.status + " : " + response.statusText);
                }
                resolve(response);
            }).catch((error) => {
                reject(error.message);
            });
        });
    }

    /**
     *
     * @param {Object} todo
     * @returns {Promise}
     */
    updateTodoClient(todo) {
        return new Promise((resolve, reject) => {
            fetch(`${this._getEntityUrl()}/${todo.id}`, {
                method: "PUT",
                headers: this._getHeaders(),
                body: JSON.stringify(todo)
            }).then((response) => {
                if (response.status !== 204) {
                    reject(response.status + " : " + response.statusText);
                }
                resolve(response);
            }).catch((error) => {
                reject(error.message);
            });
        });
    }

    /**
     *
     * @param {Number} id
     * @returns {Promise}
     */
    deleteTodoClient(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this._getEntityUrl()}/${id}`, {
                method: "DELETE",
                headers: this._getHeaders()
            }).then((response) => {
                if (response.status !== 204) {
                    reject(response.status + " : " + response.statusText);
                }
                resolve(response);
            }).catch((error) => {
                reject(error.message);
            });
        });
    }

}

export let todoClient = new TodoClient();
