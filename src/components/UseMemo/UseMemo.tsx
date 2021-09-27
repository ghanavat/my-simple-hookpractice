import { useMemo, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../UseMemo/useMemo.scss";
import "../../styles/site.scss";
import { Alert, Button, Form, Toast } from 'react-bootstrap';

const UseMemo = () => {
    const [show, setShow] = useState(false);
    const [somethingChanged, setSomething] = useState('');

    const veryExpensiveCalculation = useMemo(() => {
        if (somethingChanged === "") {
            return <></>;
        }
        return (
            <Alert variant="danger">I am very expensive, don't let React render me each time!</Alert>
        );
    }, [somethingChanged]);

    const veryExpensiveCalculationWithoutMemoization = () => {
        return <Alert variant="danger">I am very expensive, don't let React render me each time!</Alert>
    };

    return(
        <div className="useMemo container">
            <div className="title">useMemo</div>
            <div className="form-row">
                <Button className="bi bi-info-circle form-row" type="button" variant="warning" aria-label="Info" onClick={() => setShow(true)} />
            </div>

            <Toast onClose={() => setShow(false)} show={show} delay={5000}>
                <Toast.Header>
                    <strong className="me-auto">About useMemo</strong>
                </Toast.Header>
                <Toast.Body>
                    <ul>
                        <li>Memorizes the output of a function</li>
                        <li>Every time you call useMemo again, it will first check if any dependencies have changed</li>
                        <li>If no dependencies changed, it will return the cached return value</li>
                        <li>If they have changed, useMemo will call the provided function again and repeat the process</li>
                    </ul>
                </Toast.Body>
            </Toast>

            <div className="form-row">
                <Form.Select onChange={(e) => setSomething(e.currentTarget.value)}>
                    <option value="">Do something</option>
                    <option value="1">Change of state</option>
                    <option value="1">Another change of state</option>
                </Form.Select>
            </div>
            {/* {veryExpensiveCalculationWithoutMemoization()} */}
            {veryExpensiveCalculation}
        </div>
    );
};

export default UseMemo;