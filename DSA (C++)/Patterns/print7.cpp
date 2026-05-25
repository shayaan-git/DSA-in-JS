#include <bits/stdc++.h>
using namespace std;

void print7(int n){
    cout<<endl;

    for(int i=1; i<=n; i++){
        // space
        for(int j=1; j<=n-i; j++){
            cout << " " ;
        }
        // stars
        for (int j=1; j<=2*i-1; j++){
            cout << "*";
        }
        // space
        for(int j=1; j<=n-i; j++ ){
            cout << " ";
        }
        cout<<endl;
    }
}

int main(){
    int n;
    cout<<"Your Input: " ;
    cin >> n;
    print7(n);
}

//     *    
//    ***   
//   *****  
//  ******* 
// *********