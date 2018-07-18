package com.wzg.rntest;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * 类描述:
 * 创建人:    wzg
 * 创建时间:  2018/4/8
 * 修改时间:  2018/4/8
 * 修改备注:  说明本次修改内容
 */
public class MyReactPackage implements ReactPackage {
    public MyIntentModel mMyIntentModel;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        mMyIntentModel = new MyIntentModel(reactContext);
        return Arrays.<NativeModule>asList(mMyIntentModel);
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
