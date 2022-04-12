/* 
1. Create a new project in console.firebase.google.com
2. npm install firebase
3. Create firebase.init.js and import getAuth() to export auth
4. firebase settings > Authentication > enable Email and Password auth
5. Create Login, Signup component, setup route
6. Attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword from react-firebase-hooks
9. if user is created redirect to the expected page
10. useSignInWithEmailAndPassword
11. Create RequireAuth component ==> check user exists also tract user information
12. In route wrap protected component by using require auth component
*/

/* 
    Hosting steps
    1.  npm install -g firebase-tools (one timie for your pc)
    2.  firebase login (one timie for your pc)
    3.  firebase init (once for each project)
    4.  npm run build (every time you want to deploy)
    5.  firebase deploy (every time you want to deploy)
*/
