//
// Created by Filip Ćaćić on 13/11/2018.
//

#ifndef WIFILIB_WIFISTATUS_H
#define WIFILIB_WIFISTATUS_H


class WiFiStatus {
private:
    bool wifiReady{};
protected:
    void setWifiReady(bool wifiReady);
    bool getWiFiReady();
public:
    WiFiStatus() = default;;
};


#endif //WIFILIB_WIFISTATUS_H
