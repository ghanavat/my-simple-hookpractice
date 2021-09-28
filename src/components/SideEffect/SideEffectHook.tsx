import { useEffect, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import {Alert, Form, FormGroup} from "react-bootstrap";
import ISelectedFormat from "../../interfaces/components/ISelectedFormat";
import "../SideEffect/sideEffect.scss";
import "../../styles/site.scss";
import useMyHook from '../MyHook/useMyHook';
import IUseMyHook from '../../interfaces/hooks/IUseMyHook';

const dropDownOptions = [
    {
        label: "Json",
        value: "json"
    },
    {
        label: "Xml",
        value: "xml"
    }
];

const SideEffectHook = () => {
    const [selectedFormat, setFormat] = useState<ISelectedFormat>({selectedFormat: ""});
    const {get, reset, result} = useMyHook();

    useEffect(() => {
        if (selectedFormat.selectedFormat === "") {
            reset();
            return;
        };

        if (selectedFormat.selectedFormat !== "") {
            const request: IUseMyHook = {
                town: "310025",
                format: selectedFormat.selectedFormat
            };
    
            get(request);
        }
        return (reset());
        
    }, [selectedFormat, get, reset]);
    
    const showScroll = result !== "" && "with-scroll";
    
    return (
        <div className="side-effect container">
            <div className="title">useEffect</div>
            <div className="form-row">
                <FormGroup>
                    <Form.Select className="dropdown" onChange={(e) => setFormat({selectedFormat: e.currentTarget.value})}>
                    <option value="">Select a format</option>
                        {dropDownOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
            </div>
            
            <hr/>
            <div className={`api-result-wrapper ${showScroll}`}>
                {result !== "" ? result : <Alert variant="warning">No Data</Alert>}
            </div>
        </div>
    );
};

export default SideEffectHook;