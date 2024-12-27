window.onload = () =>{
    document.getElementById("login").onclick = () =>{
        let data = document.createElement("h2");
         document.querySelector("form").addEventListener("submit", (event)=>{
            event.preventDefault();
        });
        data.innerText = "You are being redirected...";
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log(`${username} , ${password}`)
        
        if ((username == " " || null) && (password == " " || null)){
            let error = document.createElement("h4");
            error.style.backgroundColor = "red";
            error.innerText = "Username and password fields cannot be blank!!";
           alert(error);
        }else{
        setTimeout(()=>{
            document.querySelector("h1").appendChild(data);
            document.querySelector("form").submit();
        },3000);   
     }
    }
}