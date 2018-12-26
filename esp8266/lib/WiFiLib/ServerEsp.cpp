//
// Created by Filip Ćaćić on 14/11/2018.
//
#include "ServerEsp.h"

void ServerEsp::checkForClient() {
     WiFiClient client = server->available();
     if (client){
         handleClient(&client);
     }
}


ServerEsp::ServerEsp(WiFiServer *server){
    this->server = server;
    this->server->begin();
}


