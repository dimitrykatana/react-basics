
type Alert = { name: string, danger?: number, prevent?: Prevent }

type Autodestruction = Alert & { destruction: boolean }

type Prevent = (quantity: number) => void;

interface Alert2 {
    name: string,

    danger?: number,
    prevent?: Prevent
}

interface Autodestruction2 extends Alert2 {
    destruction: boolean
}

interface Prevent2 {
    (quality: string): void,
    (test: boolean): void
}


export const Alert = () => {
    let alert: Alert = {
        name: "trouduc",
        prevent: (quantity) =>
            console.log(quantity)
    };
    let bigAlert: Autodestruction = { name: 'lom', destruction: false }

    return (
        <div>
            <div>
                <span role="img" aria-label="Warning">
                    ⚠
                </span>
                <span>Oh no!</span>
            </div>
            <div>Something isn't quite right ...</div>
        </div>
    );
}