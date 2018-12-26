#include <WiFiConfigurator.h>
#include <WiFiStatus.h>

class Connector : public WiFiConfigurator,public WiFiStatus {
private:
    void setSsidAndPassword() override;
public:
    Connector() = default;;
    Connector(const char* ssid,const char* password);
    uint8_t getNumberOfConnections();
};