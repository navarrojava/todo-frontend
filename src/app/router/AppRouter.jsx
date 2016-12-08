import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React from "react";
import {Route, Router, Redirect, hashHistory} from "react-router";
import {TodoMainView} from "../components/todo/TodoMainView.jsx";
import {TodoAddView} from "../components/todo/TodoAddView";
import {TodoDetailView} from "../components/todo/TodoDetailView.jsx";
import {TodoEditView} from "../components/todo/TodoEditView";


export class AppRouter extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>

                <Router history={hashHistory}>
                    <Route path="/todo" component={TodoMainView}/>
                    <Route path="/todo/add" component={TodoAddView}/>
                    <Route path="/todo/details/:idTodo" component={TodoDetailView}/>
                    <Route path="/todo/edit/:idTodo" component={TodoEditView}/>

                    <Redirect
                        from={"*"}
                        to={"/todo"}
                    />
                </Router>
            </MuiThemeProvider>
        );
    }

}