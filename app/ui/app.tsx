import React from 'react';
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import {RouterProvider} from "react-router-dom";
import {router} from 'CustomCore/app/lib/router';

const App = () => {
    return (
        <MantineProvider>
           <RouterProvider router={router}/>
        </MantineProvider>
    );
};

export default App;
