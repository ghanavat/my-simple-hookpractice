import { useCallback, useState } from 'react';
import IWeatherResult from '../../interfaces/components/IWeatherResult';
import IUseMyHook from '../../interfaces/hooks/IUseMyHook';
import "bootstrap/scss/bootstrap.scss";
import "../../styles/site.scss";

const useMyHook = () => {
    const [weatherResult, setWeatherResult] = useState<IWeatherResult>({result: ""});

    const get = useCallback((myhook: IUseMyHook) => {
        const metOfficeApiKey = "29968d06-de2e-4c7a-9270-978e60c7a070";
        const metOfficeApiUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/${myhook.format}/${myhook.town}?res=daily&key=${metOfficeApiKey}`;

        fetch(metOfficeApiUrl)
            .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(data => {
            setResult({result: data!});
        });
    }, []);

    const setResult = (result: IWeatherResult) => {
        setWeatherResult({result: result.result!});
    };

    const reset = () => {
        setWeatherResult({result: ""});
    };
    
    return{
        get,
        reset: reset,
        result: weatherResult.result        
    };
};

export default useMyHook;