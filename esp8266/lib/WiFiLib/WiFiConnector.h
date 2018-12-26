//
// Created by Filip Ćaćić on 09/11/2018.
//

#ifndef WIFILIB_WIFICONNECTPOINT_H
#define WIFILIB_WIFICONNECTPOINT_H
#include "ControllerPolicy.h"
#include "Connector.h"


class WiFiConnector :public ControllerPolicy<Connector>{
private:
   
public:
    void initControllerPolicy(const char* ssid,const char* password){
        wifiApi = Connector(ssid,password);
    }

};

#endif //WIFILIB_WIFICONNECTPOINT_H
