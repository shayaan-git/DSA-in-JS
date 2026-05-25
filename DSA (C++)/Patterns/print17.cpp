#include <bits/stdc++.h>
using namespace std;

void print17(int n){

    for(int i=0; i<n; i++){
        // spaces
        for(int j=0; j<n-i-1; j++){ // at first we have 4 spaces
            cout << " ";
        }
        // characters
        char ch = 'A';
        int breakpoint = (2*i+1)/2;
        for(int j = 1; j <= 2*i+1; j++){    // at first we have 3 characters
            cout << ch;
            if(j <= breakpoint) ch++;
            else ch --;
        }
        // spaces
        for(int j = 0; j < n-i-1; j++){
            cout << " ";
        }
        cout << endl;
    }
}

int main(){
    int n;
    cout << "Input number: ";
    cin >> n;
    print17(n);
}

//     A    
//    ABA   
//   ABCBA  
//  ABCDCBA 
// ABCDEDCBA