//
// Created by Filip Ćaćić on 14/11/2018.
//

#ifndef WIFILIB_SERVER_H
#define WIFILIB_SERVER_H


#include <ESP8266WiFi.h>
#include "SocketsParts.h"


class ServerEsp : public SocketParts{
private:
protected:

public:
    WiFiServer* server = nullptr;
    ServerEsp() = default;;
    ServerEsp(WiFiServer* server);
    void checkForClient();

};


#endif //WIFILIB_SERVER_H
