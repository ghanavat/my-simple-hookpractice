import { useEffect, useRef } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../UseMemo/useMemo.scss";
import "../../styles/site.scss";
import { Form, Button } from 'react-bootstrap';

const UseRef = () => {
    const elementRef = useRef(null);
    const logMeRef = useRef(0);
    const inputFocus = useRef<HTMLInputElement>(null);

    //const [count, setCount] = useState(0);

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement);
      }, []);

      useEffect(() => {
        inputFocus.current!.focus();
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
            <Button type="button" variant="primary" onClick={clickHandler}>Click Me</Button>
            <div className="form-row">
                <Form.Group>
                    <Form.Label>Test 1</Form.Label>
                    <Form.Control type="text" id="testing-id1"></Form.Control>

                    <Form.Label>Test 2</Form.Label>
                    <Form.Control type="text" ref={inputFocus} id="testing-id2"></Form.Control>                    

                    <Button type="button" variant="primary">Submit</Button>
                </Form.Group>                
            </div>            
        </div>
    );
};

export default UseRef;