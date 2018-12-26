#ifndef BLUETOOTH_WHEELPOLICY_H
#define BLUETOOTH_WHEELPOLICY_H

#include <Arduino.h>

class WheelPolicy{
protected:
    const int forward;
    const int reverse;

private:

public:
    virtual int getforward() = 0;
    virtual int getreverse() = 0;

    WheelPolicy():forward{0},reverse{0}{};
    WheelPolicy(int forward,int reverse):forward{forward},reverse{reverse}{
        pinMode(this->forward,OUTPUT);
        pinMode(this->reverse,OUTPUT);
    };
    ~WheelPolicy(){};

 
    void activateWheelsForward(){
        digitalWrite(forward,HIGH);
        digitalWrite(reverse,LOW);
    }
     void activateWheelsReverse(){
        digitalWrite(reverse,HIGH);
        digitalWrite(forward,LOW);
    }
    void stopWheels(){
        digitalWrite(forward,LOW);
        digitalWrite(reverse,LOW);
    }
    
};



#endif

