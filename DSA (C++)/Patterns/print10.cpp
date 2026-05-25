#include <bits/stdc++.h>
using namespace std;

void print10(int n){
    cout<<endl;

    for(int i=1; i<=2*n-1; i++){
        int stars = i;
        if(i>n){    // Observe the Symmetry after a certain row number
            stars = 2*n - i;
        }
        for(int j=1; j<=stars; j++){
            cout << "*";
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

// *
// **
// ***
// ****
// *****        // Observe the Symmetry here it changes (reduces no. of stars) AFTER this row number
// ****
// ***
// **
// *