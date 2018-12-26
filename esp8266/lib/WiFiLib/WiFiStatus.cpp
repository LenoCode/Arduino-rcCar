//
// Created by Filip Ćaćić on 13/11/2018.
//

#include "WiFiStatus.h"

bool WiFiStatus::getWiFiReady() {
    return wifiReady;
}

void WiFiStatus::setWifiReady(bool wifiReady) {
    this->wifiReady = wifiReady;
}
