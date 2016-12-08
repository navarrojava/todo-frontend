import React from "react";
import {AppConstants} from "../../constants/AppConstants";


/*global console*/
export class AppBar extends React.Component {

    constructor() {
        super();
    }

    render() {

        const backButtonIcon = this.props.backButtonIcon ? "keyboard_backspace" : "";

        const Menu = () => {

            return (
                <div>
                        <span>

                            <button style={{align: "left"}}
                                    disabled={!this.props.backButtonIcon}
                                    id="demo-menu-lower-left"
                                    className="mdl-button mdl-js-button mdl-button--icon"
                                    onClick={() => this.props.backButtonIcon ? this.context.router.push(AppConstants.ROUTER.MAIN_VIEW) : false}
                                    onChange={(evt) => console.log("NAVARRO")}
                            >
                                <i style={{width: "10px"}} className="material-icons">
                                    {backButtonIcon}
                                </i>
                        </button>
                        </span>
                </div>);
        };


        const MenuBar = () => {
            return (
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header style={{marginTop: 10, position: "absolute", marginLeft: 10, width: "95%"}}
                            className={"mdl-layout__header"}>
                        <div>

                            <Menu/>
                            <div style={{
                                display: "flex",
                                lineHeight: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                fontSize: 24,
                                textAlign: "center"
                            }}>
                                {this.props.title}
                            </div>
                        </div>
                    </header>

                    <main className="mdl-layout__content">
                        <div className="page-content">
                            {this.props.children}
                            <div style={{
                                position: "fixed",
                                right: 15,
                                bottom: 30,
                                zIndex: 1
                            }}>
                            </div>
                        </div>
                    </main>
                </div>
            );
        };

        return (
            <MenuBar/>
        );
    }
}

AppBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};
