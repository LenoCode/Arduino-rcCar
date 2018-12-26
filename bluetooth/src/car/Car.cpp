#include "Car.h"

void Car::engineSwitchClicked(){
    engineTurnOn = true;
    Serial.println("ENGINE TURNED ON");
}

void Car::forward(){
    if (engineTurnOn){
        leftSideWheels.activateWheelsForward();
        rightSideWheels.activateWheelsForward();
    }
}
void Car::right(){
    if (engineTurnOn){
        leftSideWheels.activateWheelsForward();
        rightSideWheels.stopWheels();
    }
}
void Car::reverse(){
    if (engineTurnOn){
        leftSideWheels.activateWheelsReverse();
        rightSideWheels.activateWheelsReverse();
    }
}
void Car::left(){
    if (engineTurnOn){
        rightSideWheels.activateWheelsForward();
        leftSideWheels.stopWheels();
    }
}
void Car::stop(){
    if (engineTurnOn){
        rightSideWheels.stopWheels();
        leftSideWheels.stopWheels();
    }
}

