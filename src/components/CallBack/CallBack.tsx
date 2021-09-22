import { useCallback, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../CallBack/callBack.scss";
import { Alert, Button, Form, Toast } from 'react-bootstrap';
import IWeatherResult from '../../interfaces/components/IWeatherResult';
import WeatherModal from '../WeatherModal/WeatherModal';

/* DO NOT use useCallback purely to prevent useless re-rendering of child components using the callback function. */
const CallBack = () => {
    const metOfficeApiKey = "29968d06-de2e-4c7a-9270-978e60c7a070";

    const [show, setShow] = useState(false);
    const [town, setTown] = useState('');
    const handleClose = () => {
        setShow(false);
        resetModal();
    };
    const handleShow = () => setShow(true);
    const [weatherResult, setWeatherResult] = useState<IWeatherResult>({result: ""});
    const enableButton = town !== "" ? "" : "disabled";

    const resetModal = () => {
        setWeatherResult({result: ""});
    };

    const handleApiCall = useCallback(() => {
        const metOfficeApiUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/xml/${town}?res=daily&key=${metOfficeApiKey}`;

        if (town === "") return;

        console.log("Town state:", town);

        fetch(metOfficeApiUrl)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
            })
            .then(data => {
                setWeatherResult({result: data!});
            });
    }, [town]);

    return(
        <div className="callback container">
            <div className="title">useCallback example</div>
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
            {<WeatherModal result={weatherResult.result} show={show} onHide={handleClose} onClick={handleApiCall} />}            
        </div>
    );
};

export default CallBack;