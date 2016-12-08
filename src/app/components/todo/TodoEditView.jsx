import {AppBar} from "../common/AppBar";
import {AppConstants} from "../../constants/AppConstants";
import autoBind from "react-autobind";
import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {TodoAction} from "../../core/todo/action/TodoAction";
import {todoStore} from "../../core/todo/store/TodoStore";
import update from "react-addons-update";

/*global console */
export class TodoEditView extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            todo: {
                title: "",
                description: "",
                done: false
            },
            checked: false
        };
    }

    componentDidMount() {
        todoStore.addChangeListener(this._onChangeTodoStore);
    }

    componentWillMount() {
        let idTodo = this.props.params.idTodo;
        let todo = todoStore.getTodoById(idTodo);
        this.setState({todo});
        console.log(todo);

    }

    componentWillUnmount() {
        todoStore.removeChangeListener(this._onChangeTodoStore);

    }

    _onChangeTodoStore() {
        this.setState(this.state, todoStore.getState());
    }

    handleCheckBox(evt) {
        console.log(evt);
        this.setState({checked: !this.state.checked});
    }


    handleTitleField(evt) {
        evt.stopPropagation();
        let newValue = evt.target.value;
        let newState = update(this.state, {
            todo: {title: {$set: newValue}}
        });
        this.setState(newState);
        // evt.stopPropagation();
    }

    handleDescriptionField(evt) {
        evt.stopPropagation();
        let newValue = evt.target.value;
        let newState = update(this.state, {
            todo: {description: {$set: newValue}}
        });
        this.setState(newState);

    }

    handleUpdateButton() {
        let todo = this.state.todo;
            todo.title = this.a.getValue();
            todo.description = this.b.getValue();

        TodoAction.updateTodoAction(todo);
        this.goToHome();
    }

    goToHome() {
        this.context.router.push(AppConstants.ROUTER.MAIN_VIEW);
    }

    render() {


        const appContentStyle = {
            margin: 0,
            paddingTop: "64px"
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
                        <TextField
                            floatingLabelText="Titulo"
                            fullWidth={true}
                            defaultValue={this.state.todo.title !== undefined ? this.state.todo.title:""}
                            hintText="Digite um titulo para sua tarefa"
                            ref={(titleInput) => this.a = titleInput}
                        />
                        <TextField
                            floatingLabelText="Descrição"
                            fullWidth={true}
                            defaultValue={this.state.todo.description}
                            hintText="Digite uma descrição para atividade"
                            multiLine={true}
                            ref={(descriptionInput) => this.b = descriptionInput}
                            rows={1}
                        /><br />

                        <RaisedButton
                            label={"VOLTAR"}
                            primary={false}
                            onTouchTap={() => this.context.router.push(AppConstants.ROUTER.MAIN_VIEW)}
                            style={{
                                position: "fixed",
                                left: 25,
                                bottom: 30,
                                zIndex: 100
                            }}
                        />
                        <RaisedButton
                            label={"ATUALIZAR"}
                            primary={true}
                            onTouchTap={this.handleUpdateButton}
                            style={{
                                position: "fixed",
                                right: 25,
                                bottom: 50,
                                zIndex: 100
                            }}
                        />

                    </div>}
                />

            </div>

        );


    }
}

TodoEditView.contextTypes = {
    router: React.PropTypes.object.isRequired
};