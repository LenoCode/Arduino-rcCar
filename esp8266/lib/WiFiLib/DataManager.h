#include "mainLib.h"
#include "Protocol.h"


class DataManager{
private:
    std::string dataBuffer;
protected:

public:
    void appendData(const char* dataToAppend);
    const char* getData();
    void clearBuffer();
    std::vector<std::string> getLines();
    std::string getClassIdent(std::string& stringData);
    std::string getMethodIdent(std::string& stringData);
    std::string getMessage(std::string& stringData);
    
};