import { Component, createElement } from "react";

import { RadioButtonList } from "./RadioButtonList";

interface WrapperProps {
    class: string;
    mxObject?: mendix.lib.MxObject;
    style: string;
    friendlyId: string;
}

export interface RadioButtonListContainerProps extends WrapperProps {
    associationReference: string;
    labelAttribute: string;
    dataSourceType: string;
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
}

interface RadioButtonListContainerState {
    start: boolean;
}

type OnChangeOptions = "doNothing" | "callMicroflow" | "callNanoflow";
type OrienationType = "vertical" | "horizontal";
type sortOrderOptions = "ascending" | "descending";

export default class RadioButtonListContainer extends Component<RadioButtonListContainerProps, RadioButtonListContainerState> {
    private radioButtonOptions: object[];
    constructor(props: RadioButtonListContainerProps) {
        super(props);

        this.radioButtonOptions = [];
    }

    render() {
        return createElement(RadioButtonList as any, {
            // mxObject: this.props.mxObject ? this.props.mxObject.getGuid() : ""
        });
    }

    componentWillReceiveProps() {
        //
    }

    componentWillMount() {
        this.setRadioButtonOptions();
    }

    private getDataFromXpath() {
        if (this.props.mxObject) {
        const { mxObject, associationReference, constraint } = this.props;
        const constraints = constraint ? this.props.constraint.replace(/\[%CurrentObject%\]/g, mxObject.getGuid()) : "";
        const xpath = `//${associationReference}${constraints}`;

        window.mx.data.get({
                callback: mxObjects => this.populateRadiobuttonOptions(mxObjects),
                error: error => {
                    // tslint:disable-next-line:no-console
                    console.log("errors:" + error);
                },
                xpath
            });
        }
    }

    private setRadioButtonOptions() {
        if (this.props.mxObject) {
            if (this.props.dataSourceType === "xpath") {
                this.getDataFromXpath();
            } else if (this.props.dataSourceType === "microflow" && this.props.dataSourceMicroflow) {
                // this._getDataFromDatasource(callback);
            } else {
                alert("Can\"t retrieve objects because no datasource microflow is specified");
            }
        } else {
            // this._updateRendering(callback);
        }
    }
    private populateRadiobuttonOptions(objs: any) {
        let mxObj = null;
        let i = 0;

        for (i = 0; i < objs.length; i++) {
            mxObj = objs[i];
            this.radioButtonOptions[ mxObj.getGuid()] = mxObj.get(this.props.labelAttribute);
        }
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
