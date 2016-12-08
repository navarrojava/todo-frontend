import React from "react";

import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import Toggle from "material-ui/Toggle";
import ActionDoneAll from "material-ui/svg-icons/action/done-all";
import ActionDone from "material-ui/svg-icons/action/done";

import {Link} from "react-router";

/*global console*/
const TodoList = ({todoList = [],router, handleTouchTap}) => {
    return (

        todoList.length > 0 ?
            <List>
                {todoList.map((todo) => {
                    return (

                        <div key={todo.id}>
                        <span style={{display: "inline-block", textAlign: "left"}}>

                                <ListItem
                                    leftIcon={<Checkbox
                                        checked={todo.done}
                                        style={{width: "60px", height:"50px", marginLeft:"5px"}}
                                        checkedIcon={<ActionDoneAll/>}
                                        uncheckedIcon={<ActionDone/>}
                                        onTouchTap={handleTouchTap.bind(this,todo)}
                                        onClick={(e) => e.stopPropagation()
                                        }

                                    />}
                                    style={{width: "600px"}}
                                    primaryText={todo.title}
                                    secondaryText={todo.description}
                                    onClick={() => router.push(`/todo/details/${todo.id}`)}

                                />
                          </span>
                        </div>
                    );
                })}

            </List> :
            <div
                style={{fontSize: 18, textAlign: "center", marginRight: "auto", marginLeft: "auto", marginTop: "20px"}}>
                {"Você nào possui tarefas : ) "}
                <br/>
                {"Clique no botão para adicionar uma nova tarefa, caso queira."}
            </div>
    );
};

export default TodoList;
