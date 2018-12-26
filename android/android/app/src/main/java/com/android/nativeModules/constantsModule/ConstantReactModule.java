package com.android.nativeModules.constantsModule;

import com.android.components.notification.RcCarNotification;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;


public class ConstantReactModule extends ReactContextBaseJavaModule {

    public ConstantReactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> stringObjectMap = new HashMap<>();

        addNotificationMethodsName(stringObjectMap);


        return stringObjectMap;
    }


    private void addNotificationMethodsName(Map<String,Object> stringObjectMap){
        stringObjectMap.put("START_ENGINE",RcCarNotification.RC_START_ENGINE_METHOD);
    }

    @Override
    public String getName() {
        return "JavaConstants";
    }
}




