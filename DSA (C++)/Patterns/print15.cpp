#include <bits/stdc++.h>
using namespace std;

void print15(int n){
    cout<<endl;
    
   for(int i=0; i<n; i++){
    for(char ch='A'; ch<= 'A' + (n - i - 1); ch++){
        cout << ch << " ";
    }
    cout << endl;
   }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print15(n);
}

// A B C D E 
// A B C D 
// A B C 
// A B 
// A 
