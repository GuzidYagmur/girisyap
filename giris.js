const users=[
    {
        username:"yagmurbasaran",
        password:"Y8738"
    },
    {
        username:"sevdgnc",
        password:"S83793"

    },
    {
        username:"furknozy",
        password:"F39839"
    }
]

let karar = Number(prompt("Hangi işlemi yapmak istersiniz?(1-Kayıt ol, 2-Giriş Yap, 3-Çık)"));


if(karar===1){
    let kayitUsername=prompt("Kullanıcı adınızı giriniz.");
    
    if(kayitUsername===users.username){
        console.log("Bu kullanıcı adı zaten alınmış. Başka bir kullanıcı adı deneyin.");
    }
    else {
        let kayitPassword= prompt("Şifrenizi belirleyiniz.");
        console.log("Kayıt başarılı");
        users.push({kayitUsername, kayitPassword});
        

    }
    
    
    
}
else if(karar===2){
    let denemeUsername=prompt("Kullanıcı adınızı giriniz");
    let denemePassword= prompt("Şifrenizi giriniz");
    if(denemeUsername===users.username && denemePassword===users.password){
        console.log("Giriş Başarılı");
        
    }
    else{
        console.log("Kullanıcı adı veya şifre hatalı");
    }
} 
else if(karar===3){
    
}
console.log(users);


