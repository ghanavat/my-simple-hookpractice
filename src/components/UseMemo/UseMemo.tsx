import { useCallback, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../UseMemo/useMemo.scss";
import "../../styles/site.scss";
import { Button, Toast } from 'react-bootstrap';

const UseMemo = () => {
    const [show, setShow] = useState(false);

    return(
        <div className="useMemo container">
            <div className="title">useMemo</div>
            <div>
                <Button className="bi bi-info-circle form-row" type="button" variant="primary" aria-label="Info" onClick={() => setShow(true)} />
            </div>

            <Toast onClose={() => setShow(false)} show={show} delay={5000}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">About useMemo</strong>
                    {/* <small>11 mins ago</small> */}
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
        </div>
    );
};

export default UseMemo;