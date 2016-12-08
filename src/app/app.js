/* eslint-env browser */
import {AppRouter} from "./router/AppRouter.jsx";
import React from "react";
import ReactDOM from "react-dom";
import "../www/index.html";
import "../www/favicon.ico";

import injectTapEventPlugin from "react-tap-event-plugin";


export class App {

    constructor() {
        this.startApp = this.startApp.bind(this);
    }

    startApp() {
        injectTapEventPlugin();
        ReactDOM.render((<AppRouter/>), document.getElementById("app"));
    }
}