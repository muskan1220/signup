bplist00�XUTI-Data�_$com.apple.traditional-mac-plain-text_public.utf8-plain-text_public.utf16-plain-textO[function generateUserId(username) {    var userId = username.substring(0, 2).toLowerCase() + Math.floor(Math.random() * 9999 + 1).toString().padStart(4, '0');    return userId;}function signUp(username, email, password) {    var userId = generateUserId(username);    // Create an object with user data    var userData = {        'user_id': userId,        'username': username,        'email': email,        'password': password    };    // Save user data to a JSON file    var fs = require('fs');    fs.appendFileSync('users.json', JSON.stringify(userData) + '\n');    return userId;}// Example usagevar username = prompt("Enter username: ");var email = prompt("Enter email: ");var password = prompt("Enter password: ");var userId = signUp(username, email, password);console.log("Sign up successful. Your user ID is: " + userId);_[function generateUserId(username) {
    var userId = username.substring(0, 2).toLowerCase() + Math.floor(Math.random() * 9999 + 1).toString().padStart(4, '0');
    return userId;
}

function signUp(username, email, password) {
    var userId = generateUserId(username);

    // Create an object with user data
    var userData = {
        'user_id': userId,
        'username': username,
        'email': email,
        'password': password
    };

    // Save user data to a JSON file
    var fs = require('fs');
    fs.appendFileSync('users.json', JSON.stringify(userData) + '\n');

    return userId;
}

// Example usage
var username = prompt("Enter username: ");
var email = prompt("Enter email: ");
var password = prompt("Enter password: ");

var userId = signUp(username, email, password);
console.log("Sign up successful. Your user ID is: " + userId);
O�f u n c t i o n   g e n e r a t e U s e r I d ( u s e r n a m e )   {          v a r   u s e r I d   =   u s e r n a m e . s u b s t r i n g ( 0 ,   2 ) . t o L o w e r C a s e ( )   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9   +   1 ) . t o S t r i n g ( ) . p a d S t a r t ( 4 ,   ' 0 ' ) ;          r e t u r n   u s e r I d ;  }   f u n c t i o n   s i g n U p ( u s e r n a m e ,   e m a i l ,   p a s s w o r d )   {          v a r   u s e r I d   =   g e n e r a t e U s e r I d ( u s e r n a m e ) ;           / /   C r e a t e   a n   o b j e c t   w i t h   u s e r   d a t a          v a r   u s e r D a t a   =   {                  ' u s e r _ i d ' :   u s e r I d ,                  ' u s e r n a m e ' :   u s e r n a m e ,                  ' e m a i l ' :   e m a i l ,                  ' p a s s w o r d ' :   p a s s w o r d          } ;           / /   S a v e   u s e r   d a t a   t o   a   J S O N   f i l e          v a r   f s   =   r e q u i r e ( ' f s ' ) ;          f s . a p p e n d F i l e S y n c ( ' u s e r s . j s o n ' ,   J S O N . s t r i n g i f y ( u s e r D a t a )   +   ' \ n ' ) ;           r e t u r n   u s e r I d ;  }   / /   E x a m p l e   u s a g e  v a r   u s e r n a m e   =   p r o m p t ( " E n t e r   u s e r n a m e :   " ) ;  v a r   e m a i l   =   p r o m p t ( " E n t e r   e m a i l :   " ) ;  v a r   p a s s w o r d   =   p r o m p t ( " E n t e r   p a s s w o r d :   " ) ;   v a r   u s e r I d   =   s i g n U p ( u s e r n a m e ,   e m a i l ,   p a s s w o r d ) ;  c o n s o l e . l o g ( " S i g n   u p   s u c c e s s f u l .   Y o u r   u s e r   I D   i s :   "   +   u s e r I d ) ;       B [ u�3             	              �