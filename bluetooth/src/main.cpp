#include <Arduino.h>
#include "car/Car.h"

Car car{};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("All good");
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()>0){
      String string = Serial.readStringUntil('!');
      char command = string.c_str()[0];
    
      switch(command){
        case '0':
          car.engineSwitchClicked();
          break;

        case '1':
          car.forward();
          break;

        case '2':
          car.left();
          break;  

        case '3': 
          car.right();
          break;

        case '4':
          car.reverse();
          break; 

        case '5':
          car.stop();
          break;   
      }

  }
}