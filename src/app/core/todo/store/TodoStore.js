import autoBind from "react-autobind";
import {AppConstants} from "../../../constants/AppConstants";
import {AppDispatcher} from "../../../dispatcher/AppDispatcher";
import {EventEmitter} from "events";
import Immutable from "immutable";
import _ from "lodash";


const CHANGE_EVENT = "change";

let appState = {
    todoList: [],
    todo: {},
    snackBar: {
        open: false,
        message: "",
        autoHideDuration: 4000
    }
};

class TodoStore extends EventEmitter {

    constructor() {
        super();
        autoBind(this);
    }

    _emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getState() {
        return Immutable.Map(appState).toObject();
    }

    getTodoById(id) {
        let todo = _.find(this.getState().todoList, ((todo) => {
            return todo.id === Number(id);
        }));
        return _.cloneDeep(todo);
    }
}


AppDispatcher.register((action) => {

    switch (action.actionType) {

        case AppConstants.ACTION.TODO.SAVE_REQUEST_SUCCESS:

            appState.snackBar = {
                open: true,
                message: "Tarefa adicionada com sucesso!",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.SAVE_REQUEST_ERROR:

            appState.snackBar = {
                open: true,
                message: "Erro ao tentar adicionar tarefa.",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.GET_ALL_REQUEST_SUCCESS:
            appState.todoList = action.payload.todoList;
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.GET_BY_ID_REQUEST_SUCCESS:
            appState.todo = action.payload.todo;
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.DELETE_REQUEST_SUCCESS:
            appState.snackBar = {
                open: true,
                message: "Tarefa excluida com sucesso!",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.DELETE_REQUEST_ERROR:
            appState.snackBar = {
                open: true,
                message: "Erro ao tentar excluir a tarefa.",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;


        case AppConstants.ACTION.TODO.UPDATE_REQUEST_SUCCESS:
            appState.snackBar = {
                open: true,
                message: "Tarefa atualizada com sucesso!",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.UPDATE_REQUEST_ERROR:
            appState.snackBar = {
                open: true,
                message: "Erro ao tentar atualizar a tarefa.",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;

        case AppConstants.ACTION.TODO.REQUEST_CLOSE_SNACK_BAR:
            appState.snackBar = {
                open: false,
                message: "",
                autoHideDuration: 4000
            };
            todoStore._emitChange();
            break;
    }
    return true;
});


export let todoStore = new TodoStore();
