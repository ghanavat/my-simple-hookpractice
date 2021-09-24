import { useEffect, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import {Alert, Form, FormGroup} from "react-bootstrap";
import IWeatherResult from '../../interfaces/components/IWeatherResult'
import ISelectedFormat from "../../interfaces/components/ISelectedFormat";
import "../SideEffect/sideEffect.scss";
import "../../styles/site.scss";

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
    const [weatherResult, setWeatherResult] = useState<IWeatherResult>({result: ""});
    const [selectedFormat, setFormat] = useState<ISelectedFormat>({selectedFormat: ""});

    const metOfficeBasingstokeLocationId = "310025";
    const metOfficeApiKey = "29968d06-de2e-4c7a-9270-978e60c7a070";

    useEffect(() => {
        if (selectedFormat.selectedFormat === "") {
            setWeatherResult({result: ""});
            return;
        };

        if (selectedFormat.selectedFormat !== "") {
            const metOfficeApiUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/${selectedFormat.selectedFormat}/${metOfficeBasingstokeLocationId}?res=daily&key=${metOfficeApiKey}`;

            fetch(metOfficeApiUrl)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
            })
            .then(data => {
                setWeatherResult({result: data!});
            });
        }
    }, [selectedFormat]);
    
    return (
        <div className="side-effect container">
            <div className="title">useEffect</div>
            <div className="form-row">
                <FormGroup>
                    {/* <Form.Label>Select a format</Form.Label> */}
                    <Form.Select className="dropdown" onChange={(e) => setFormat({selectedFormat: e.currentTarget.value})}>
                    <option value="">Select a format</option>
                        {dropDownOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
            </div>
            
            <hr/>
            <div className="api-result-wrapper">
                <p>
                    {weatherResult.result !== "" ? weatherResult.result : <Alert variant="warning">No Data</Alert>}
                </p>
            </div>
        </div>
    );
};

export default SideEffectHook;