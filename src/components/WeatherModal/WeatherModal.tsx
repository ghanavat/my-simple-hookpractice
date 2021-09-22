import { Button, Modal } from 'react-bootstrap';
import "bootstrap/scss/bootstrap.scss";
import { IWeatherModalResult } from '../../interfaces/components/IWeatherModalResult';

const WeatherModal : React.FC<IWeatherModalResult> = ({result, show, onClick, ...props}) => {
    return(
        <Modal {...props} show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Amazingstoke weather forecast</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {result !== "" ? result : "No Data"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onClick}>
                    Get
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default WeatherModal;