import { AppConstants } from "../../../constants/AppConstants";
import  {AppDispatcher}  from "../../../dispatcher/AppDispatcher";
import {todoClient} from "../client/TodoClient";

export class TodoAction {
    /**
     *
     * @param {Object} todo
     */
    static saveTodoAction(todo){

        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.SAVE_REQUEST_PENDING,
            payload: {
                todo
            }
        });
        todoClient.saveTodoClient(todo).then(() =>
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.SAVE_REQUEST_SUCCESS,
                payload: {
                    todo
                }
            })
        ).catch((errorInfo) => {
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.SAVE_REQUEST_ERROR,
                errorInfo
            });
        });

    }


    static getAllTodosAction(){

        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.GET_ALL_REQUEST_PENDING,
            payload: {
            }
        });
        todoClient.getAllTodosClient().then((todoList) =>
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.GET_ALL_REQUEST_SUCCESS,
                payload: {
                    todoList
                }
            })
        ).catch((errorInfo) => {
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.GET_ALL_REQUEST_ERROR,
                errorInfo
            });
        });

    }

    /**
     *
     * @param{Number} id
     */
    static getTodoByIdAction(id){

        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.GET_BY_ID_REQUEST_PENDING,
            payload: {
            }
        });
        todoClient.getTodoByIdClient(id).then((todo) =>
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.GET_BY_ID_REQUEST_SUCCESS,
                payload: {
                    todo
                }
            })
        ).catch((errorInfo) => {
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.GET_BY_ID_REQUEST_ERROR,
                errorInfo
            });
        });

    }


    /**
     *
     * @param {Object} todo
     */
    static updateTodoAction(todo){

        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.UPDATE_REQUEST_PENDING,
            payload: {
            }
        });
        todoClient.updateTodoClient(todo).then(() =>
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.UPDATE_REQUEST_SUCCESS,

            })
        ).catch((errorInfo) => {
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.UPDATE_REQUEST_ERROR,
                errorInfo
            });
        });

    }


    /**
     *
     * @param {Number} id
     */
    static deleteTodoAction(id){
        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.DELETE_REQUEST_PENDING,
            payload: {
            }
        });
        todoClient.deleteTodoClient(id).then(() =>
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.DELETE_REQUEST_SUCCESS,

            })
        ).catch((errorInfo) => {
            AppDispatcher.dispatch({
                actionType: AppConstants.ACTION.TODO.DELETE_REQUEST_ERROR,
                errorInfo
            });
        });

    }

    static requestCloseSnackBarAction(){
        AppDispatcher.dispatch({
            actionType: AppConstants.ACTION.TODO.REQUEST_CLOSE_SNACK_BAR,
        });
    }

}