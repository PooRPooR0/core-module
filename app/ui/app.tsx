import React from 'react';
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {RouterProvider} from "react-router-dom";
import {router} from 'CustomCore/app/lib/router';
import {store} from "CustomCore/app/lib/store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <MantineProvider>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </MantineProvider>
    );
};

export default App;
