import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "jmm.waqasahmed@gmail.com",
    pass: "Waqas3314",
    clientId:
      "785731601160-b4jaisvhuqhtsnfrjjsdo6n5ll3seegp.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04x5zNa64we1VCgYIARAAGAQSNwF-L9IrLAjtPLSAu8g840c_OYEHE5Lw4Edrbx-T0ztAeUUu-TyKWnKqhTgBu8yTQbwuy82BJGU",
  },
});

export const sendEmail=(userData)=>{
    console.log(userData)
    return new Promise ((resolve,reject)=>{
        transporter.sendMail({
            from: "jmm.waqasahmed@gmail.com",
            to: userData.email,
            subject: "Welcome Email",
            text:`Hello ${userData.name}
            Welcome to Vehical Managment, you'r successfully Sign Up 
            Your Password is
            ${userData.password}`,
           
          }, (error, info)=> {
            if (error) {
              console.log("Error!!!!!!!   ", error);
              reject(error)
            } else {
              console.log("Email sent: " + info.response);
              resolve(info.response)
            }});
    })
}