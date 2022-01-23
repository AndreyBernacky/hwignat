import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Route, Routes} from "react-router-dom"
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    ERROR404: '*'
    // add paths
}

function RouteRo() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}


            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Routes>
                <Route path={"/"} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={PATH.ERROR404} element={<Error404/>}/>

            </Routes>

        </div>
    )
}

export default RouteRo
