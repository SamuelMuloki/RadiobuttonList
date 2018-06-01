import { Component, ReactNode, createElement } from "react";
import "../../ui/AttrRadioButtonList.css";

export interface AttrRadioButtonListProps {
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

interface AttrState {
    start: boolean;
}

export class AttrRadioButtonList extends Component<AttrRadioButtonListProps, AttrState> {

    constructor(props: AttrRadioButtonListProps) {
        super(props);
    }

    render() {
        return createElement("div", { class: "RadioButtonList form-group" },
            this.createLabel(),
            createElement("div", { class: "form-group" })
        );
    }

    private createLabel(): ReactNode {
        return (this.props.showLabel ? createElement("label", { class: "control-label" }, this.props.fieldCaption) : "");
    }

//     private createRadiobuttonNode() {
//     var labelNode = null,
//         radioButtonNode = null,
//         i = 0,
//         nodelength = null,
//         enclosingDivElement = null;

//     nodelength = this.inputNodes.children ? this.inputNodes.children.length : 0;

//     if (this.direction === "horizontal") {
//         dojoConstruct.empty(this.inputNodes);
//     }

//     for (var option in this._radioButtonOptions) {
//         if (this._radioButtonOptions.hasOwnProperty(option)) {

//             labelNode = this._createLabelNode(option, this._radioButtonOptions[option]);
//             radioButtonNode = this._createRadiobuttonNode(option, this._radioButtonOptions[option]);

//             dojoConstruct.place(radioButtonNode, labelNode, "first");

//             if (this.direction === "horizontal") {
//                 dojoConstruct.place(labelNode, this.inputNodes, "last");
//             } else {
//                 //an enclosing div element is required to vertically align a radiobuttonlist in bootstrap.
//                 if (this.inputNodes.children && this.inputNodes.children[i]) {
//                     enclosingDivElement = this.inputNodes.children[i];
//                 } else {
//                     enclosingDivElement = dojoConstruct.create("div", {
//                         "class": "radio"
//                     });
//                 }
//                 if (enclosingDivElement.children[0]) {
//                     dojoConstruct.destroy(enclosingDivElement.children[0]);
//                 }

//                 dojoConstruct.place(labelNode, enclosingDivElement, "only");
//                 if (!this.inputNodes.children[i]) {
//                     dojoConstruct.place(enclosingDivElement, this.inputNodes, "last");
//                 }
//             }

//             i++;
//         }
//     }
// }
}
