#include <bits/stdc++.h>
using namespace std;

void print16(int n){
    cout<<endl;
   
    for(int i=0; i<n; i++){
        char ch = 'A' + i;
        for(int j=0; j<=i; j++){
            cout << ch << " ";
        }
        cout<<endl;
    }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print16(n);
}

// A 
// B B 
// C C C 
// D D D D 
// E E E E E 