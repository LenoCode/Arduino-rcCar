#include "WheelPolicy.h"

class RightWheelsPolicy : public WheelPolicy{
private:
protected:

public:
    RightWheelsPolicy():WheelPolicy{}{};
    RightWheelsPolicy(int forward,int reverse): WheelPolicy{forward,reverse}{};
    ~RightWheelsPolicy(){};

    int getforward()override{
        return forward;
    }
    int getreverse()override{
        return reverse;
    }
};