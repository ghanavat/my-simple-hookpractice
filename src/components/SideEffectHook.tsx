import { useEffect, useState } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "../styles/site.scss";
import format from "xml-formatter";

interface WeatherResult {
    xmlResult: string;
}

const SideEffectHook = () => {
    const metOfficeBasingstokeLocationId = "310025";
    const metOfficeApiKey = "29968d06-de2e-4c7a-9270-978e60c7a070";
    const metOfficeApiUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/xml/${metOfficeBasingstokeLocationId}?res=daily&key=${metOfficeApiKey}`;

    const [weatherResult, setWeatherResult] = useState<WeatherResult>({xmlResult: ""});

    useEffect(() => {
        fetch(metOfficeApiUrl)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(data => {            
            setWeatherResult({xmlResult: data!});
            console.log("API called", weatherResult.xmlResult);
        })
    }, []);

    //const formattedXml = format(weatherResult.xmlResult);
    
    return (
        <div className="side-effect">
            {/* <Button variant="primary" type="button" onClick={() => setWeatherResult(weatherResult)}>Side Effect</Button> */}
            <div className="api-result">
                {
                    //weatherResult.xmlResult
                    format(weatherResult.xmlResult)
                }
            </div>
        </div>
    );
};

export default SideEffectHook;