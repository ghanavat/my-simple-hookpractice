import { useCallback, useEffect, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../CallBack/callBack.scss";
import { Alert, Button, Modal, Toast } from 'react-bootstrap';
import IWeatherResult from '../../interfaces/components/IWeatherResult';

/* DO NOT use useCallback purely to prevent useless re-rendering of child components using the callback function. */
const CallBack = () => {
    const metOfficeBasingstokeLocationId = "310025";
    const metOfficeApiKey = "29968d06-de2e-4c7a-9270-978e60c7a070";
    //3840 - DUNKESWELL AERODROME

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [weatherResult, setWeatherResult] = useState<IWeatherResult>({xmlResult: ""});

    const handleApiCall = useCallback(() => {
        const metOfficeApiUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/xml/${metOfficeBasingstokeLocationId}?res=daily&key=${metOfficeApiKey}`;

        fetch(metOfficeApiUrl)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
            })
            .then(data => {
                setWeatherResult({xmlResult: data!});
                handleShow();
            });
    }, [metOfficeBasingstokeLocationId]);

    return(
        <div className="callback container">
            <div className="title">CallBack example 1</div>            
                <Toast>
                <Toast.Header>
                    <Button id="btn-state-hook" variant="primary" type="button" className="me-auto" onClick={handleApiCall}>Call Back</Button>                    
                </Toast.Header>
                <Toast.Body>Returns a memoized callback that only changes if one of the dependencies has changed.</Toast.Body>
                </Toast>
            <hr />
            <Alert variant="info">Result will be in a modal!</Alert>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Amazingstoke weather forecast</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!

                    {weatherResult.xmlResult}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Got it
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CallBack;