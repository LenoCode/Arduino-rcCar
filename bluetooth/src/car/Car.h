#include "wheels/Wheel.h"
#include "policy/wheel/LeftWheelsPolicy.h"
#include "policy/wheel/RightWheelsPolicy.h"

class Car {

private:
    Wheel<LeftWheelsPolicy> leftSideWheels{5,6} ;
    Wheel<RightWheelsPolicy> rightSideWheels{7,8};
    
    bool engineTurnOn;

public:
    Car():engineTurnOn{false}{};
    ~Car(){};

    void engineSwitchClicked();
    void forward();
    void right();
    void reverse();
    void left();
    void stop();
};