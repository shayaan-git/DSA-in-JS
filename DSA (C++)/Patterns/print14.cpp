#include <bits/stdc++.h>
using namespace std;

void print14(int n){
    cout<<endl;
    
    for(int i=0; i<n; i++){
        for(char ch= 'A'; ch <= 'A' + i; ch++){
            cout << ch << " ";
        }
        cout << endl;
    }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print14(n);
}

// A 
// A B 
// A B C 
// A B C D 
// A B C D E 
