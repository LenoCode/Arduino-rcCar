

template<typename W>
class Wheel : public W{
private:

        
public:
    Wheel():W(){};
    Wheel(int forward,int reverse):W(forward,reverse){};
    ~Wheel(){};
    
};