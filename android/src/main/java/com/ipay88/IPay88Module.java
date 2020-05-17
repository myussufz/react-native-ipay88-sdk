package com.ipay88;


import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.ipay.IPayIH;
import com.ipay.IPayIHPayment;
import com.ipay.IPayIHResultDelegate;

import java.io.Serializable;

/**
 * Created by yussuf on 2/28/18.
 */

public class IPay88Module extends ReactContextBaseJavaModule {
    private static  ReactApplicationContext context;

    public IPay88Module(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IPay88";
    }

    @ReactMethod
    public void pay(ReadableMap data) {
        context = getReactApplicationContext();

        // Precreate payment
        IPayIHPayment payment = new IPayIHPayment();
        payment.setMerchantKey (data.getString("merchantKey"));
        payment.setMerchantCode (data.getString("merchantCode"));
        payment.setPaymentId (data.getString("paymentId"));
        payment.setCurrency (data.getString("currency"));
        payment.setRefNo (data.getString("referenceNo"));
        payment.setAmount (data.getString("amount"));
        payment.setProdDesc (data.getString("productDescription"));
        payment.setUserName (data.getString("userName"));
        payment.setUserEmail (data.getString("userEmail"));
        payment.setUserContact (data.getString("userContact"));
        payment.setRemark (data.getString("remark"));
        payment.setLang (data.getString("utfLang"));
        payment.setCountry (data.getString("country"));
        payment.setBackendPostURL (data.getString("backendUrl"));

        Intent checkoutIntent = IPayIH.getInstance().checkout(payment, context, new ResultDelegate(),
          IPayIH.PAY_METHOD_CREDIT_CARD);

        checkoutIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(checkoutIntent);
    }

    static public class ResultDelegate implements IPayIHResultDelegate, Serializable {
        public void onPaymentSucceeded (String TransId, String RefNo, String Amount, String Remark, String AuthCode)
        {
            WritableMap params = Arguments.createMap();
            params.putString("transactionId", TransId);
            params.putString("referenceNo", RefNo);
            params.putString("amount", Amount);
            params.putString("remark", Remark);
            params.putString("authorizationCode", AuthCode);
            sendEvent(context, "ipay88:success", params);
        }

        public void onPaymentFailed (String TransId, String RefNo, String Amount, String Remark, String ErrDesc)
        {
            WritableMap params = Arguments.createMap();
            params.putString("transactionId", TransId);
            params.putString("referenceNo", RefNo);
            params.putString("amount", Amount);
            params.putString("remark", Remark);
            params.putString("error", ErrDesc);
            sendEvent(context, "ipay88:failed", params);
        }

        public void onPaymentCanceled (String TransId, String RefNo, String Amount, String Remark, String ErrDesc)
        {
            WritableMap params = Arguments.createMap();
            params.putString("transactionId", TransId);
            params.putString("referenceNo", RefNo);
            params.putString("amount", Amount);
            params.putString("remark", Remark);
            params.putString("error", ErrDesc);
            sendEvent(context, "ipay88:canceled", params);
        }

        @Override
        public void onConnectionError(String merchantCode, String merchantKey, String RefNo, String Amount, String Remark, String lang, String country) {
            WritableMap params = Arguments.createMap();
            params.putString("merchantCode", merchantCode);
            params.putString("referenceNo", RefNo);
            params.putString("amount", Amount);
            params.putString("remark", Remark);
            params.putString("language", lang);
            params.putString("country",country);
            params.putString("error","Error connecting to IPay server");
            sendEvent(context, "ipay88:canceled", params);
        }

        public void onRequeryResult (String merchantCode, String RefNo, String Amount, String result)
        {
            // No need to implement
        }

    }

    static void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

}
