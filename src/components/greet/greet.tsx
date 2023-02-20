type Props = {
    name?: string
}

export const Greet = (props: Props) => {
    return <div>Hello World {props.name}</div>;
}