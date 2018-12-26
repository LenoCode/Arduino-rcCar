//
// Created by Filip Ćaćić on 09/11/2018.
//

#ifndef WIFILIB_WIFICONFIGURATOR_H
#define WIFILIB_WIFICONFIGURATOR_H

#define TEST
#ifdef TEST
#include <ESP8266WiFi.h>
#endif
class WiFiConfigurator {
private:
    IPAddress ipAddress;
protected:
    const char *ssid;
    const char *password;
    void setMode(WiFiMode_t wiFiMode);
    virtual void setSsidAndPassword()=0;
    void setIpAddress(IPAddress ipAddress);
public:
    WiFiConfigurator();
    WiFiConfigurator(const char* ssid,const char* password);
    const char* getSsid();
    const char* getPassword();
    IPAddress getIpAddress();
};


#endif //WIFILIB_WIFICONFIGURATOR_H
