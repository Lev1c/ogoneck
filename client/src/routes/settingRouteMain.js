import React from 'react';
import { Route, Routes, Navigate} from "react-router-dom";
import Home from '../components/main/home/home';

const SettingRouteMain = () => {

    return (
        <>
            <Routes>
                <Route key={1} path={'/'} element={<Home/>} exact/>

                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </>
    );
};

export default SettingRouteMain;
