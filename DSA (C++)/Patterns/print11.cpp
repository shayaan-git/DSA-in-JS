#include <bits/stdc++.h>
using namespace std;

void print10(int n){
    cout<<endl;

    int start = 1;
    for(int i=0; i<n; i++){ // start 0 | i = 1
        if(i % 2 == 0) start = 1;
        else start = 0;
        for(int j=0; j<=i; j++){
            cout << start;
            start = 1 - start;
        }
        cout << endl;
    }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print10(n);
}

// 1
// 01
// 101
// 0101
// 10101