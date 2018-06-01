import { Component, createElement } from "react";
import { AttrRadioButtonList } from "./AttrRadioButtonList";

interface WrapperProps {
    class: string;
    mxObject: mendix.lib.MxObject;
    mxContext: mendix.lib.MxContext;
    readOnly: boolean;
    style?: string;
    friendlyId: string;

}

export interface ContainerProps extends WrapperProps {
    entity: string;
    formOrientation: string;
    direction: string;
    fieldCaption: string;
    showLabel: boolean;
    captionTrue: string;
    captionFalse: string;
    readOnly: boolean;
    labelWidth: number;
    onChangeAction: string;
    allowDeselect: string;
}

interface ContainerState {
    start: true;
}
export default class AttrRadioButtonListContainer extends Component<ContainerProps, ContainerState> {
    constructor(props: ContainerProps) {
        super(props);
    }

    render() {
            return createElement(AttrRadioButtonList, {
                allowDeselect: this.props.allowDeselect,
                captionFalse: this.props.captionFalse,
                captionTrue: this.props.captionFalse,
                direction: this.props.direction,
                entity: this.props.entity,
                fieldCaption: this.props.fieldCaption,
                formOrientation: this.props.formOrientation,
                labelWidth: this.props.labelWidth,
                onChangeAction: this.props.onChangeAction,
                readOnly: this.props.readOnly,
                showLabel: this.props.showLabel
         });
    }

    componentWillReceiveProps() {
        //
    }

    componentWillMount() {
            // if (this.props.entity !== "" && this.props.mxObject) {
            //     // get enumeration for current attribute
            //     if (this.props.mxObject.getAttributeType(this.props.entity) === "Enum") {
            //         this._radioButtonOptions = this._contextObj.getEnumKVPairs(this.entity);
            //     } else if (this._contextObj.getAttributeType(this.entity) === "Boolean") {
            //         this._radioButtonOptions = {};
            //         this._radioButtonOptions["true"] = this.captiontrue;
            //         this._radioButtonOptions["false"] = this.captionfalse;
            //     }
            // }
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
