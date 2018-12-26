//
// Created by Filip Ćaćić on 09/11/2018.
//

#ifndef WIFILIB_WIFIACCESSPOINT_H
#define WIFILIB_WIFIACCESSPOINT_H

#include "AccessPoint.h"
#include "ControllerPolicy.h"



class WiFiAccessPoint :public ControllerPolicy<AccessPoint>{
private:
public:
    void initControllerPolicy(const char* ssid,const char* password){
        Serial.println("INIT WIFI ACCESS POINT");
        wifiApi = AccessPoint{ssid,password};
    }

};

#endif //WIFILIB_WIFIACCESSPOINT_H
