import { useEffect, useMemo, useRef, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../UseMemo/useMemo.scss";
import "../../styles/site.scss";
import { Form, Button } from 'react-bootstrap';

const UseRef = () => {
    const elementRef = useRef(null);
    const logMeRef = useRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement); // logs <div>I'm an element</div>
      }, []);

      const clickHandler = () => {
        // const updatedCount = count + 1;
        // console.log("Logging number of clicks", updatedCount);
        // setCount(updatedCount);

        logMeRef.current++;
        console.log("Logging number of clicks:", logMeRef.current);
      };

      console.log("Component rendered");

    return (
        <div className="callback container">
            <div className="title">useRef</div>
            <div className="form-row">
                {/* <div ref={elementRef}>Testing</div> */}
                <Form.Control type="text" ref={elementRef} id="testing-id"></Form.Control>
                <Button type="button" variant="primary" onClick={clickHandler}>Press Me</Button>
            </div>            
        </div>
    );
};

export default UseRef;