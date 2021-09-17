import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import "bootstrap/scss/bootstrap.scss";

interface DatetimeString {
    dateTimeValue?: string | null;
}

const StateHook = () => {
    const [timeClicking, setTimeClicking] = useState<DatetimeString>({dateTimeValue: null});
    const [firstTimeClick] = useState<DatetimeString>({dateTimeValue: new Date().toLocaleTimeString()});

    const handler = () => {
        setTimeClicking({dateTimeValue: new Date().toLocaleTimeString()});
    };

    return (
        <div>
            <Button id="btn-state-hook" variant="primary" type="button" onClick={() => handler()}>State Hook</Button>
            <hr />
            <Alert variant="warning">Persisted time on load: {firstTimeClick.dateTimeValue}</Alert>
            <hr />
            <Alert variant="success">Then you clicked me again on: {timeClicking.dateTimeValue}</Alert>
        </div>
    )
};

export default StateHook;