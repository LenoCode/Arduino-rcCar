//
// Created by Filip Ćaćić on 09/11/2018.
//
#include "WiFiController.h"
#include "WiFiAccessPoint.h"
#include "WiFiConnector.h"
#include "ServerEsp.h"
#include "car/Car.h"
#include <ESP8266WiFi.h>

const char* ssid = "Cale";
const char* password = "calemoj321";


Car car{};
WiFiController<WiFiConnector> wifiConnection;
ServerEsp serverEsp;
WiFiServer server{3000};


const char* CLASS_IDENT_CAR = "RcCarIdent";

const char* ENGINE_SWITCH_CLICKED = "EngSwtchClck";
bool startEngine(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("START ENGINE METHOD");
   car.engineSwitchClicked();
   communicationProccesor->send(CLASS_IDENT_CAR,ENGINE_SWITCH_CLICKED,"ON");
   return true;
}
const char* CAR_FORWARD = "CrFwrd";
bool carForward(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("FORWARD PRESS");
   car.forward();
   return true;
}

const char* CAR_LEFT = "CrLft";
bool carLeft(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("FORWARD PRESS");
   car.left();
   return true;
}

const char* CAR_RIGHT = "CrRght";
bool carRight(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("FORWARD PRESS");
   car.right();
   return true;
}


const char* CAR_BACKWARD = "CrBcwrd";
bool carBackward(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("Back PRESS");
   car.reverse();
   return true;
}

const char* CAR_STOP = "CrStp";
bool carStop(CommunicationProcessor* communicationProccesor,const char* s){
   Serial.println("Back PRESS");
   car.stop();
   return true;
}


void setup(){
    Serial.begin(115200);

    wifiConnection.initControllerPolicy(ssid,password);
    serverEsp = ServerEsp(&server);
    serverEsp.addNotificationMethod(ENGINE_SWITCH_CLICKED,startEngine);
    serverEsp.addNotificationMethod(CAR_FORWARD,carForward);
    serverEsp.addNotificationMethod(CAR_LEFT,carLeft);
    serverEsp.addNotificationMethod(CAR_RIGHT,carRight);
    serverEsp.addNotificationMethod(CAR_BACKWARD,carBackward);
    serverEsp.addNotificationMethod(CAR_STOP,carStop);




    Serial.println("SERVER STARTED");

}

void loop(){
    
}



