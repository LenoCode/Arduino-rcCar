#include "WheelPolicy.h"

#ifndef ESP8266_BACKWHEELPOLICY_H
#define ESP8266_BACKWHEELPOLICY_H


class LeftWheelsPolicy : public WheelPolicy{
private:
protected:

public:
    LeftWheelsPolicy():WheelPolicy{0,0}{};
    LeftWheelsPolicy(int forward,int reverse):WheelPolicy{forward,reverse}{};
    ~LeftWheelsPolicy(){};

    int getforward()override{
        return forward;
    }
    int getreverse()override{
        return reverse;
    }

};

#endif

