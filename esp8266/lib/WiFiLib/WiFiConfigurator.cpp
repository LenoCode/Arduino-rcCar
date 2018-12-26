//
// Created by Filip Ćaćić on 09/11/2018.
//

#include "WiFiConfigurator.h"


const char *WiFiConfigurator::getSsid() {
    return ssid;
}

const char *WiFiConfigurator::getPassword() {
    return password;
}

void WiFiConfigurator::setMode(WiFiMode_t wiFiMode) {
    WiFi.mode(wiFiMode);
}


WiFiConfigurator::WiFiConfigurator(const char *ssid, const char *password) {
    this->ssid = ssid;
    this->password = password;
}

void WiFiConfigurator::setIpAddress(IPAddress ipAddress) {
    this->ipAddress = ipAddress;
}

IPAddress WiFiConfigurator::getIpAddress() {
    return ipAddress;
}


WiFiConfigurator::WiFiConfigurator() = default;
