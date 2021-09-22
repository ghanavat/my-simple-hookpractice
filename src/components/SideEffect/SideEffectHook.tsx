import { useEffect, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import {Form} from "react-bootstrap";
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
            <div className="title">Effect example</div>
            <div className="">
                <Form.Select className="dropdown" onChange={(e) => setFormat({selectedFormat: e.currentTarget.value})}>
                    <option>Select a format</option>
                    {dropDownOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
            </div>
            
            <hr/>
            <div className="side-effect api-result-wrapper">
                <span className="api-result">
                    {weatherResult.result}
                </span>
            </div>
        </div>
    );
};

export default SideEffectHook;