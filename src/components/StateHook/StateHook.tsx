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
            <div className="title">useState</div>
            <div className="form-row">
                <Button id="btn-state-hook" variant="primary" type="button" onClick={() => handler()}>State Hook</Button>
            </div>
            <hr />
            <div className="form-row space">
                <Alert variant="info">Persisted on load: {firstTimeClick.dateTimeValue}</Alert>
                <Alert variant="success">You clicked me on: {timeClicking.dateTimeValue}</Alert>
            </div>
        </div>
    )
};

export default StateHook;