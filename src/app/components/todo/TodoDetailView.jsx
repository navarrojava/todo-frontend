import {AppConstants} from "../../constants/AppConstants";
import {AppBar} from "../common/AppBar";
import autoBind from "react-autobind";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import {TodoAction} from "../../core/todo/action/TodoAction";
import {todoStore} from "../../core/todo/store/TodoStore";


/*global console */
export class TodoDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: "",
                description: "",
                status: false
            },
            checked: false,
            dialog: {
                opened: false
            }
        };
        autoBind(this);
    }

    componentDidMount() {
        todoStore.addChangeListener(this._onChangeTodoStoreDetailView);
        TodoAction.getTodoByIdAction(this.props.params["idTodo"]);
    }

    componentWillUnmount() {
        todoStore.removeChangeListener(this._onChangeTodoStoreDetailView);
    }

    _onChangeTodoStoreDetailView() {
        this.setState({todo: todoStore.getState().todo});
    }

    handleCheckBox(evt) {
        console.log(evt);
        this.setState({checked: !this.state.checked});
    }

    handleTitleField(evt) {
        this.setState({todo: {title: evt.target.value}});
    }

    handleEditButton() {

        this.context.router.push(`/todo/edit/${this.state.todo.id}`);
    }

    handleRequestChangeStateDialog() {
        this.setState({dialog: {opened: !this.state.dialog.opened}});
    }

    handleRequestConfirmDelete() {
        TodoAction.deleteTodoAction(this.state.todo.id);
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

        const deleButonActions = [
            <FlatButton
                label="CANCELAR"
                primary={true}
                onTouchTap={this.handleRequestChangeStateDialog}
            />,
            <FlatButton
                label="CONFIRMAR"
                primary={true}
                onTouchTap={this.handleRequestConfirmDelete}
            />,
        ];

        return (
            <AppBar
                backButtonIcon={true}
                title={"Detalhes da Tarefa"}
                children={
                    <div style={appContentStyle}>
                        <div >
                            <Card>
                                <CardHeader
                                    title={this.state.todo.title}
                                    subtitle={this.state.todo.description}
                                    actAsExpander={true}
                                    showExpandableButton={false}
                                />
                                <CardActions>
                                    <RaisedButton
                                        label={"EXCLUIR"}
                                        secondary={true}
                                        onTouchTap={this.handleRequestChangeStateDialog}
                                        style={{
                                            position: "fixed",
                                            left: 25,
                                            bottom: 50,
                                            zIndex: 100,
                                            fontColor: "#000"
                                        }}
                                    />
                                    <RaisedButton
                                        label={"EDITAR"}
                                        primary={true}
                                        onTouchTap={this.handleEditButton}
                                        style={{
                                            position: "fixed",
                                            right: 25,
                                            bottom: 50,
                                            zIndex: 100
                                        }}
                                    />
                                </CardActions>

                            </Card>

                        </div>
                        <div>
                            <Dialog
                                actions={deleButonActions}
                                modal={false}
                                open={this.state.dialog.opened}
                                onRequestClose={this.handleRequestChangeStateDialog}
                            >
                                {"Deseja realmente excluir esta tarefa?"}
                            </Dialog>
                        </div>
                    </div>}
            />
        );
    }
}

TodoDetailView.contextTypes = {
    router: React.PropTypes.object.isRequired
};
