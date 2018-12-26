#include "Connector.h"


Connector::Connector(const char *ssid, const char *password) : WiFiConfigurator(ssid, password) {
   setSsidAndPassword();
}
void Connector::setSsidAndPassword() {
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
   setWifiReady(true);
   setIpAddress(WiFi.localIP());
}

uint8_t Connector::getNumberOfConnections() {
   return WiFi.softAPgetStationNum();
}
