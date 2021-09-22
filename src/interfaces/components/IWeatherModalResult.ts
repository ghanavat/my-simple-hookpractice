import { ModalProps } from "react-bootstrap";

export interface IWeatherModalResult extends ModalProps {
    result: string;
    show: boolean;
};