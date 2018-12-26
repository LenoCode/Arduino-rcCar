//
// Created by Filip Ćaćić on 16/11/2018.
//

#ifndef WIFILIB_METHODSHOLDER_H
#define WIFILIB_METHODSHOLDER_H
#include <map>

class CommunicationProcessor;


class MethodsHolder {
private:
    struct cmp_str{
        bool operator()(const char* a,const char*b)const{
            int index = 0;
            int match = 0;
            int size = 0;
            while(a[index] != '\0' || b[index] != '\0'){
                if (a[index] == b[index]){
                    ++match;
                }
                ++index;
                ++size;
            }
        
            if ( (a[index] == '\0' && b[index] == '\0') && match == size){
                return false;
            }
            return true;
        }
    };

    std::map<const char*,bool(*)(CommunicationProcessor*,const char*),cmp_str> methods;
protected:
    bool callMethod(CommunicationProcessor* communicationProcessor,const char* methodName,const char* notification);
public:
    MethodsHolder(){};
    void addNotificationMethod(const char* methodName,bool(*func)(CommunicationProcessor*,const char*));
};


#endif //WIFILIB_METHODSHOLDER_H
