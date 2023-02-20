import {Props} from "./greet.types";

export const Greet = (props: Props) => {
    return <div>Hello World {props.name || 'Guest'}</div>;
}