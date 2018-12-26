#include "BufferReader.h"

const char* BufferReader::getDataReaded(unsigned char buffer[],int bytesRead){
    const char* castedBuffer= (const char*)buffer;
    char chars[bytesRead+1];
    for (int i = 0; i < bytesRead; ++i){
        chars[i] = castedBuffer[i];
    }
    chars[bytesRead] = '\0';
    return std::move(std::string{chars}.c_str());
}

int BufferReader::sizeOfConstChar(const char* data){
    int size = 0;
    while (data[size] != '\0') size++;
    return size;    
}
