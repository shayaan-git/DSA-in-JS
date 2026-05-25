#include <bits/stdc++.h>
using namespace std;

void print5(int n){
    cout<<endl;
    for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i+1; j++){
            cout << "*" << " ";
        }
        cout<<endl;
    }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print5(n);
}

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 