//
// Created by Filip Ćaćić on 13/11/2018.
//

#include "AccessPoint.h"


AccessPoint::AccessPoint(const char *ssid, const char *password) : WiFiConfigurator(ssid, password) {
   setSsidAndPassword();
}
void AccessPoint::setSsidAndPassword() {
   bool result = WiFi.softAP(ssid,password);
   setWifiReady(result);
   setIpAddress(WiFi.softAPIP());
}

uint8_t AccessPoint::getNumberOfConnections() {
   return WiFi.softAPgetStationNum();
}
