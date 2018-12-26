//
// Created by Filip Ćaćić on 09/11/2018.
//

#ifndef WIFILIB_WIFICONTROLLER_H
#define WIFILIB_WIFICONTROLLER_H
#include "mainLib.h"


template<typename ControllerPolicy>
class WiFiController : public ControllerPolicy{
private:
public:
    WiFiController() = default;;
};



#endif //WIFILIB_WIFICONTROLLER_H
