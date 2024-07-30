import { IPaymentPayRequest} from "./IPaymentPayRequest"; 
import { IPaymentPayResponse} from "././IPaymentPayResponse"; 
import { PluginType } from "../enums/PluginType";

//Call back declarations
export type payNowResponseCallBack = (response: IPaymentPayResponse) => void;


//Interface method declarations
export interface IPluginUI {
    renderPluginUI(
        pluginType :PluginType,
        paymentPayRequest : IPaymentPayRequest,
        responseCallBack:payNowResponseCallBack): any; 
}
  
