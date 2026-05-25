#include <bits/stdc++.h>
using namespace std;

void print19(int n){
    int initialSpace = 0;

    // Upside
    for(int i=0; i<n; i++){
    
    // stars
    for( int j=1; j<=n-i; j++){
        cout << "*";
    }
    // spaces
    for(int j = 0; j<initialSpace; j++){
        cout << "-";
    }
    // stars
    for(int j=1; j<=n-i; j++){
        cout << "*";
    }
    initialSpace += 2;
    cout << endl;
   }

//Downside
    initialSpace = 2*n-2 ;
    for(int i=1; i<=n; i++){
    // stars
    for( int j=1; j<=i; j++){
        cout << "*";
    }
    // spaces
    for(int j = 0; j<initialSpace; j++){
        cout << "-";
    }
    // stars
    for(int j=1; j<=i; j++){
        cout << "*";
    }
    initialSpace -= 2;
    cout << endl;
    }
}

int main(){
    int n;
    cout << "Input number: ";
    cin >> n;
    print19(n);
}

// **********
// ****--****
// ***----***
// **------**
// *--------*
// *--------*
// **------**
// ***----***
// ****--****
// **********