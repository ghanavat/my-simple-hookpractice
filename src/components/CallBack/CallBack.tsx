import { useCallback, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../CallBack/callBack.scss";
import { Alert, Button, Form, Toast } from 'react-bootstrap';
import WeatherModal from '../WeatherModal/WeatherModal';
import useMyHook from '../MyHook/useMyHook';
import IUseMyHook from '../../interfaces/hooks/IUseMyHook';

/* DO NOT use useCallback purely to prevent useless re-rendering of child components using the callback function. */
const CallBack = () => {
    const [show, setShow] = useState(false);
    const [town, setTown] = useState('');
    const {get, reset, result} = useMyHook();

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        reset();
    };

    const handleApiCall = useCallback(() => {
        const request: IUseMyHook = {
            town: town,
            format: "xml"
        };

        get(request);
    }, [town, get]);

    const enableButton = town !== "" ? "" : "disabled";
    return(
        <div className="callback container">
            <div className="title">useCallback</div>
                <Toast>
                    <Toast.Header closeButton={false}>
                        <div className="header-content">
                            <div className="gap">
                                <Form.Select onChange={(e) => setTown(e.currentTarget.value)}>
                                    <option value="">Please select a town</option>
                                    <option value="310025">Basingstoke</option>
                                    <option value="3840">Dunkeswell Aerodrome</option>
                                </Form.Select>
                            </div>
                            <Button id="btn-state-hook" variant="primary" type="button" className={`me-auto ${enableButton}`} onClick={handleShow}>Call Back</Button>
                        </div>                        
                    </Toast.Header>
                    <Toast.Body>Returns a memoized callback that only changes if one of the dependencies has changed.</Toast.Body>
                </Toast>
            <hr />
            <Alert variant="info">Result will be in a modal!</Alert>
            {<WeatherModal result={result} show={show} onHide={handleClose} onClick={handleApiCall} />}
        </div>
    );
};

export default CallBack;