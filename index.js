'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Pay = undefined;

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var IPay88 = _reactNative.NativeModules.IPay88;

var iosEvent = new _reactNative.NativeEventEmitter(IPay88);

var isAndroid = _reactNative.Platform.OS === 'android';

var IPay = (function(_Component) {
  _inherits(IPay, _Component);

  function IPay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IPay);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = IPay.__proto__ || Object.getPrototypeOf(IPay)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.onSuccess = function(data) {
        _this.props.successNotify(data);
      }),
      (_this.onCanceled = function(data) {
        _this.props.cancelNotify(data);
      }),
      (_this.onFailed = function(data) {
        _this.props.failedNotify(data);
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(IPay, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        if (isAndroid) {
          // Android
          _reactNative.DeviceEventEmitter.addListener(
            'ipay88:success',
            function(data) {
              return _this2.onSuccess(data);
            }
          );
          _reactNative.DeviceEventEmitter.addListener('ipay88:failed', function(
            data
          ) {
            return _this2.onFailed(data);
          });
          _reactNative.DeviceEventEmitter.addListener(
            'ipay88:canceled',
            function(data) {
              return _this2.onCanceled(data);
            }
          );
        } else {
          // ios
          iosEvent.addListener('ipay88:success', function(data) {
            return _this2.onSuccess(data);
          });
          iosEvent.addListener('ipay88:failed', function(data) {
            return _this2.onFailed(data);
          });
          iosEvent.addListener('ipay88:canceled', function(data) {
            return _this2.onCanceled(data);
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        return null;
      }
    }
  ]);

  return IPay;
})(_react.Component);

IPay.propTypes = {
  successNotify: _propTypes.PropTypes.func.isRequired,
  failedNotify: _propTypes.PropTypes.func.isRequired,
  cancelNotify: _propTypes.PropTypes.func.isRequired
};
exports.default = IPay;

var Pay = function Pay(data) {
  var _data$merchantKey = data.merchantKey,
    merchantKey = _data$merchantKey === undefined ? '' : _data$merchantKey,
    _data$merchantCode = data.merchantCode,
    merchantCode = _data$merchantCode === undefined ? '' : _data$merchantCode,
    _data$referenceNo = data.referenceNo,
    referenceNo = _data$referenceNo === undefined ? '' : _data$referenceNo,
    _data$amount = data.amount,
    amount = _data$amount === undefined ? '' : _data$amount,
    _data$currency = data.currency,
    currency = _data$currency === undefined ? '' : _data$currency,
    _data$productDescript = data.productDescription,
    productDescription =
      _data$productDescript === undefined ? '' : _data$productDescript,
    _data$userName = data.userName,
    userName = _data$userName === undefined ? '' : _data$userName,
    _data$userEmail = data.userEmail,
    userEmail = _data$userEmail === undefined ? '' : _data$userEmail,
    _data$userContact = data.userContact,
    userContact = _data$userContact === undefined ? '' : _data$userContact,
    _data$country = data.country,
    country = _data$country === undefined ? '' : _data$country,
    _data$backendUrl = data.backendUrl,
    backendUrl = _data$backendUrl === undefined ? '' : _data$backendUrl;

  var errors = {};
  // if (paymentId === '') {errors.paymentId = '`paymentId` is required'; // optional
  if (merchantKey === '') errors.merchantKey = '`merchantKey` is required';
  if (merchantCode === '') errors.merchantCode = '`merchantCode` is required`';
  if (referenceNo === '') errors.referenceNo = '`referenceNo` is required';
  if (amount === '') errors.amount = '`amount` is required';
  if (currency === '') errors.currency = '`currency` is required';
  if (productDescription === '')
    errors.productDescription = '`productDescription` is required';
  if (userName === '') errors.userName = '`userName` is required';
  if (userEmail === '') errors.userEmail = '`userEmail` is required';
  if (userContact === '') errors.userContact = '`userContact` is required';
  // if (remark === '') errors.remark = '`remark` is required'; // optional
  // if (utfLang === '') errors.utfLang = '`utfLang` is required'; // optional
  if (country === '') errors.country = '`country` is required';
  if (backendUrl === '') errors.backendUrl = '`backendUrl` is required';

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return IPay88.pay(data);
};

exports.Pay = Pay;
