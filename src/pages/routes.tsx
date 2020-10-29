import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from './Login';
import TeacherForm from "./TeacherForm";
// import TeacherList from "./ConfferList";
// import ConfferUpBase from "./ConfferUpBase";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/inputdados" component={TeacherForm} />
            {/* <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} /> */}
        </BrowserRouter>
    )
}
export default Routes;