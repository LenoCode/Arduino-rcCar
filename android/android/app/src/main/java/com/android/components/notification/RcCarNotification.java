package com.android.components.notification;

import android.util.Log;

import com.facebook.react.bridge.Callback;

import java.util.Map;

import socket_installer.SI_behavior.abstractClasses.notification.data_trade.DataTrade;
import socket_installer.SI_behavior.abstractClasses.notification.notification_state_exceptions.NotificationerStatesBundle;
import socket_installer.SI_behavior.abstractClasses.sockets.socket.client.ClientSocket;
import socket_installer.SI_behavior.annotations.user_implementation.methods_implementation.class_annotation.class_identifier.ClassIdentifier;
import socket_installer.SI_behavior.annotations.user_implementation.methods_implementation.methods_annotation.method_identifier.MethodIdentifier;
import async_communicator.AsyncCommunicator;
import socket_installer.SI_context.external_context.ExternalContext;

@ClassIdentifier(identification = "RcCarIdent")
public class RcCarNotification extends DataTrade {
   private final AsyncCommunicator asyncCommunicator = AsyncCommunicator.getAsyncCommunicator();

   public final static String RC_START_ENGINE_METHOD = "EngSwtchClck";
    @MethodIdentifier(identification = RC_START_ENGINE_METHOD)
    public void startEngine(String notification,NotificationerStatesBundle notificationerStatesBundle){
        Log.d("LENOO","NOTIFICATION CLASS IS HERE");
        ExternalContext externalContext = getExternalContext();
        Map<String,Callback> callbackFunctions = (Map<String, Callback>) externalContext.getContextObject("HashMap").getObject();
        callbackFunctions.get(RC_START_ENGINE_METHOD).invoke(notification);
        Log.d("LENOO","NOTIFICATION CLASS IS HERE");

    }


    @Override
    public boolean exceptionHandler(ClientSocket clientSocket, NotificationerStatesBundle notificationerStatesBundle) {
        return false;
    }
}
