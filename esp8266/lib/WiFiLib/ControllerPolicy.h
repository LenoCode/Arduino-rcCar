//
// Created by Filip Ćaćić on 09/11/2018.
//

#ifndef WIFILIB_CONTROLLERPOLICY_H
#define WIFILIB_CONTROLLERPOLICY_H
#include "mainLib.h"

template<typename WiFiApi>
class ControllerPolicy{
private:
public:
    WiFiApi wifiApi;
    ControllerPolicy() = default;
    virtual void initControllerPolicy(const char* ssid,const char* password)=0;

};

#endif //WIFILIB_CONTROLLERPOLICY_H
