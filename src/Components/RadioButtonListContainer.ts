import { Component, createElement } from "react";

interface WrapperProps {
    class: string;
    mxObject: mendix.lib.MxObject;

}

export interface RadioButtonListContainerProps extends WrapperProps {
    class: string;
}

interface RadioButtonListContainerState {
    start: boolean;
}

export default class RadioButtonListContainer extends Component<RadioButtonListContainerProps, RadioButtonListContainerState> {

    constructor(props: RadioButtonListContainerProps) {
        super(props);
    }

    render() {
        return createElement("div", {});
    }

    componentWillReceiveProps() {
        //
    }

    componentWillUnmount() {
        //
    }

    public static parseStyle(style = ""): { [key: string]: string } {
        try {
            return style.split(";").reduce<{ [key: string]: string }>((styleObject, line) => {
                const pair = line.split(":");
                if (pair.length === 2) {
                    const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
                    styleObject[name] = pair[1].trim();
                }
                return styleObject;
            }, {});
        } catch (error) {
            // tslint:disable-next-line no-console
            console.log("Failed to parse style", style, error);
        }

        return {};
    }
}
