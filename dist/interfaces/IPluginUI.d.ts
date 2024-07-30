import { IPaymentPayRequest } from "./IPaymentPayRequest";
import { IPaymentPayResponse } from "././IPaymentPayResponse";
import { PluginType } from "../enums/PluginType";
export declare type payNowResponseCallBack = (response: IPaymentPayResponse) => void;
export interface IPluginUI {
    renderPluginUI(pluginType: PluginType, paymentPayRequest: IPaymentPayRequest, responseCallBack: payNowResponseCallBack): any;
}
