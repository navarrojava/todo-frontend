import {AppBar} from "../common/AppBar";
import {AppConstants} from "../../constants/AppConstants";
import autoBind from "react-autobind";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import {TodoAction} from "../../core/todo/action/TodoAction";
import {todoStore} from "../../core/todo/store/TodoStore";
import TextField from "material-ui/TextField";
import update from "react-addons-update";


/*global console */
export class TodoAddView extends React.Component {

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
        evt.stopPropagation();
    }

    handleDescriptionField(evt) {
        evt.stopPropagation();
        let newValue = evt.target.value;
        let newState = update(this.state, {
            todo: {description: {$set: newValue}}
        });
        this.setState(newState);

    }

    handleSaveButton() {

        let todo = {
            title: this.a.getValue(),
            description: this.b.getValue()
        };
        if(this.a.getValue()) {
            TodoAction.saveTodoAction(todo);
            this.goToHome();
        }
    }

    goToHome(){
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


        //Uncontrolled Component
        return (
            <div>
                <AppBar
                    title={"Lista de Tarefas"}
                    style={fixedStyle}
                    children={<div style={appContentStyle}>
                        <TextField
                            floatingLabelText={"Titulo"}
                            fullWidth={true}
                            hintText={"Digite um titulo para sua tarefa"}
                            ref={(titleInput) => this.a = titleInput}
                            onChange={(e) => e.stopPropagation()}
                        />
                        <TextField
                            floatingLabelText={"Descrição"}
                            fullWidth={true}
                            hintText={"Digite uma descrição para atividade"}
                            multiLine={true}
                            ref={(descriptionInput) => this.b = descriptionInput}
                            onChange={(e) => e.stopPropagation()}
                            rows={1}
                        /><br />

                        <RaisedButton
                            label={"VOLTAR"}
                            primary={false}
                            onTouchTap={this.goToHome}
                            style={{
                                position: "fixed",
                                left: 25,
                                bottom: 30,
                                zIndex: 100
                            }}
                        />
                        <RaisedButton
                            label={"SALVAR"}
                            primary={true}
                            onTouchTap={this.handleSaveButton}
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

TodoAddView.contextTypes = {
    router: React.PropTypes.object.isRequired
};