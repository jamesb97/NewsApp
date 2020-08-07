import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function App() {
    return (
    <Button variant="contained" color="primary">Learn More</Button>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));