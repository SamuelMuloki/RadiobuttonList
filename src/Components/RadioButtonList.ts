import { Component, ReactNode, createElement } from "react";

export interface RadioButtonListProps {
    associationReference: string;
    labelAttribute: string;
    dataSourceType: dataSourceOptions;
    constraint: string;
    sortAttribute: string;
    sortOrder: sortOrderOptions;
    dataSourceMicroflow: string;
    editable: string;
    allowDeselect: boolean;
    radioListDirection: OrienationType;
    showLabel: boolean;
    labelCaption: string;
    formOrientation: OrienationType;
    labelWidth: number;
    onChange: OnChangeOptions;
    onChangeMicroflow: string;
    onChangeNanoflow: string;
    id: string;
    mxObject: string;
}

interface RadioButtonListState {
    start: boolean;
}

type OnChangeOptions = "doNothing" | "callMicroflow" | "callNanoflow";
type OrienationType = "vertical" | "horizontal";
type sortOrderOptions = "ascending" | "descending";
type dataSourceOptions = "xpath" | "microflow";

export class RadioButtonList extends Component<RadioButtonListProps, RadioButtonListState> {

    constructor(props: RadioButtonListProps) {
        super(props);
    }

    render() {
        return createElement("div", { class: "RadioButtonList form-group" },
            this.createLabelNode(),
            createElement("div", { class: "form-group" }
                 // this.createRadiobuttonNode()
                )
        );
    }

    componentWillReceiveProps() {
        //
    }

    private createLabelNode(): ReactNode {
        return createElement("label", { class: "control-label" });
    }
}
