#include "DataManager.h"


void DataManager::appendData(const char* dataToAppend){
    dataBuffer = dataBuffer.append(std::string{dataToAppend});
}
const char* DataManager::getData(){
    return std::move(std::string{dataBuffer}.c_str());
}

void DataManager::clearBuffer(){
    dataBuffer.clear();
}


std::vector<std::string> DataManager::getLines(){
    const char* data = dataBuffer.c_str();
    const int dataSize = dataBuffer.size();
    std::vector<char> newConstChar;
    std::vector<std::string> listOfStrings;
    
    for (int i = 0; i < dataSize ; i++){
        if (data[i] == Protocol::END_LINE[0] && i + Protocol::END_LINE_SIZE <= dataSize){
            bool match = true;
            for(int j = i, c = 0; c < Protocol::END_LINE_SIZE; ++j,++c){
                if (data[j] != Protocol::END_LINE[c]){
                    match = false;
                    break;
                }
            }
            if (match){
                i = i + Protocol::END_LINE_SIZE -1;
                if (newConstChar.size() > 0){
                    newConstChar.push_back('\0');
                    listOfStrings.push_back(std::string(&newConstChar[0]));
                    newConstChar.clear();
                }
            }else{
                newConstChar.push_back(data[i]);
            }
        }else{
            newConstChar.push_back(data[i]);
        }
    }
    if (newConstChar.size() > 0){
        newConstChar.push_back('\0');
        listOfStrings.push_back(std::string(&newConstChar[0]));
    }
    return listOfStrings;
}

std::string DataManager::getClassIdent(std::string& stringData){
    int indexOfClassIdent = stringData.find("classIdent:") + 11;
    int allIndexes = stringData.size()-1;
    int indexesToRemoveFromBehind = allIndexes - stringData.find("|methodIdent:");
    int length = allIndexes - indexesToRemoveFromBehind - indexOfClassIdent;
    return std::move(stringData.substr(indexOfClassIdent,length));
}
std::string DataManager::getMethodIdent(std::string& stringData){
    int indexOfMethodIdent = stringData.find("methodIdent:") + 12;
    int allIndexes = stringData.size()-1;
    int indexesToRemoveFromBehind = allIndexes - stringData.find("|message:");
    int length = allIndexes - indexesToRemoveFromBehind - indexOfMethodIdent;
    return std::move(stringData.substr(indexOfMethodIdent,length));
}
std::string DataManager::getMessage(std::string& stringData){
    int indexOfMessage = stringData.find("message:") + 8;
    return std::move(stringData.substr(indexOfMessage));
}

