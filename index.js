import { Component } from "react";
import {
  NativeModules,
  DeviceEventEmitter,
  Platform,
  NativeEventEmitter
} from "react-native";
import { PropTypes } from "prop-types";

const { IPay88 } = NativeModules;
const iosEvent = new NativeEventEmitter(IPay88);

const isAndroid = Platform.OS === "android";

export default class IPay extends Component {
  static propTypes = {
    successNotify: PropTypes.func.isRequired,
    failedNotify: PropTypes.func.isRequired,
    cancelNotify: PropTypes.func.isRequired
  };

  componentWillMount() {
    if (isAndroid) {
      // Android
      DeviceEventEmitter.addListener("ipay88:success", data =>
        this.onSuccess(data)
      );
      DeviceEventEmitter.addListener("ipay88:failed", data =>
        this.onFailed(data)
      );
      DeviceEventEmitter.addListener("ipay88:canceled", data =>
        this.onCanceled(data)
      );
    } else {
      // ios
      iosEvent.addListener("ipay88:success", data => this.onSuccess(data));
      iosEvent.addListener("ipay88:failed", data => this.onFailed(data));
      iosEvent.addListener("ipay88:canceled", data => this.onCanceled(data));
    }
  }

  onSuccess = data => {
    this.props.successNotify(data);
  };

  onCanceled = data => {
    this.props.cancelNotify(data);
  };

  onFailed = data => {
    this.props.failedNotify(data);
  };

  render() {
    return null;
  }
}

const Pay = data => {
  const {
    // paymentId = '', // optional
    merchantKey = "",
    merchantCode = "",
    referenceNo = "",
    amount = "",
    currency = "",
    productDescription = "",
    userName = "",
    userEmail = "",
    userContact = "",
    // remark = '', // optional
    // utfLang = '', // optional
    country = "",
    backendUrl = ""
  } = data;

  const errors = {};
  // if (paymentId === '') {errors.paymentId = '`paymentId` is required'; // optional
  if (merchantKey === "") errors.merchantKey = "`merchantKey` is required";
  if (merchantCode === "") errors.merchantCode = "`merchantCode` is required`";
  if (referenceNo === "") errors.referenceNo = "`referenceNo` is required";
  if (amount === "") errors.amount = "`amount` is required";
  if (currency === "") errors.currency = "`currency` is required";
  if (productDescription === "")
    errors.productDescription = "`productDescription` is required";
  if (userName === "") errors.userName = "`userName` is required";
  if (userEmail === "") errors.userEmail = "`userEmail` is required";
  if (userContact === "") errors.userContact = "`userContact` is required";
  // if (remark === '') errors.remark = '`remark` is required'; // optional
  // if (utfLang === '') errors.utfLang = '`utfLang` is required'; // optional
  if (country === "") errors.country = "`country` is required";
  if (backendUrl === "") errors.backendUrl = "`backendUrl` is required";

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return IPay88.pay(data);
};

export { Pay };
