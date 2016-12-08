import React from "react";
import TodoList from "./TodoListView";
import {todoStore} from "../../core/todo/store/TodoStore";
import autoBind from "react-autobind";

import Snackbar from "material-ui/Snackbar";


import {AppBar} from "../common/AppBar";

import {AppConstants} from "../../constants/AppConstants";

import {TodoAction} from "../../core/todo/action/TodoAction";
import FabButton from "../common/FabButton";

/*global console */
export class TodoMainView extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            checked: false,
            snackBar: {
                open: false,
                message: "",
                autoHideDuration: 4000
            }
        };
    }

    componentDidMount() {
        todoStore.addChangeListener(this._onChangeTodoStore);
        TodoAction.getAllTodosAction();

    }

    componentWillUnmount() {
        todoStore.removeChangeListener(this._onChangeTodoStore);
    }

    componentWillMount() {
    }

    _onChangeTodoStore() {
        this.setState({
            todoList: todoStore.getState().todoList,
            snackBar: todoStore.getState().snackBar

        });
    }

    handleCheckBox(evt) {
        console.log(evt);
        this.setState({checked: !this.state.checked});
    }

    handleTouchTapChangeDoneStatus(todo) {
        todo.done = !todo.done;
        TodoAction.updateTodoAction(todo);
        console.log(todo);
    }

    handleRequestClose(){
        TodoAction.requestCloseSnackBarAction();

    }
    render() {
        const appContentStyle = {
            margin: 0,
            paddingTop: "64px"
        };


        const styles = {
            root: {
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
            },
        };

        const fixedStyle = {
            position: "fixed",
            top: 0,
            float: "left",
            width: "100%",
            zIndex: 2
        };

        return (
            <div>
                <AppBar
                    title={"Lista de Tarefas"}
                    style={fixedStyle}
                    children={<div style={appContentStyle}>
                        <div style={styles.root}>
                            <TodoList
                                todoList={this.state.todoList}
                                router={this.context.router}
                                handleTouchTap={this.handleTouchTapChangeDoneStatus}
                            />
                            <FabButton
                                onClick={() => this.context.router.push(AppConstants.ROUTER.ADD_VIEW)}
                            />
                        </div>

                    </div>}
                />
                <Snackbar
                    open={this.state.snackBar.open}
                    message={this.state.snackBar.message}
                    autoHideDuration={this.state.snackBar.autoHideDuration}
                    onRequestClose={this.handleRequestClose}
                />

            </div>
        );
    }
}

TodoMainView.contextTypes = {
    router: React.PropTypes.object.isRequired
};
