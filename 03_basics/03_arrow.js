const user={
    username:"Rohit",
    price:999,


    welcomeMessage: function(){
        // this refers to current context
        console.log(`${this.username} ,welcome to website`);
    }
}

user.welcomeMessage()

user.username="Sharma"
user.welcomeMessage()