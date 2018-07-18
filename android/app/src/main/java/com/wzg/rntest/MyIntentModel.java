package com.wzg.rntest;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * 类描述:
 * 创建人:    wzg
 * 创建时间:  2018/4/8
 * 修改时间:  2018/4/8
 * 修改备注:  说明本次修改内容
 */
public class MyIntentModel extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;

    public MyIntentModel(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "IntentModel";
    }

    /**
     *  从RN跳转至原生
     */
    @ReactMethod
    public void startActivityFormJS(String name, String params) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity, toActivity);
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        } catch (Exception e) {
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : " + e.getMessage());
        }
    }

    /**
     *   像RN传值
     */
    @ReactMethod
    public void dataToJS(String msg) {
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("data", msg);
    }

    /**
     *   从原生跳转至RN
     */
    @ReactMethod
    public void jumpToRn() {
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("jumpToRn", "jumpToRn");
    }
}
