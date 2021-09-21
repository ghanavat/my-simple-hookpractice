import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import "bootstrap/scss/bootstrap.scss";
import "./stateHook.scss";
import "../../styles/site.scss";

interface DateTimeString {
    dateTimeValue?: string | null;
}

const StateHook = () => {
    const [timeClicking, setTimeClicking] = useState<DateTimeString>({dateTimeValue: null});
    const [firstTimeClick] = useState<DateTimeString>({dateTimeValue: new Date().toLocaleTimeString()});

    const handler = () => {
        setTimeClicking({dateTimeValue: new Date().toLocaleTimeString()});
    };

    return (
        <div className="state-hook container">
            <div className="title">State Hook example</div>
            <div className="button-align-left">
                <Button id="btn-state-hook" variant="primary" type="button" onClick={() => handler()}>State Hook</Button>
            </div>
            <hr />
            <Alert variant="warning">Persisted on load: {firstTimeClick.dateTimeValue}</Alert>
            <Alert variant="success">You clicked me on: {timeClicking.dateTimeValue}</Alert>
        </div>
    )
};

export default StateHook;