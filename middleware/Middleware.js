import UserModel from "../models/Users.js";

export const isAdmin = async (req, res, next)=>{
    try{
        const {email} = req.body;

        const userInfo = await UserModel.findOne( { email } )

        if(userInfo && userInfo.role == "Admin"){
            next();
            // proceed 
        }
        else{
                // 403 : 
            res.status(403).json({
                message : "Access Denied only Admin can add Company"
            })
        }

    }
    catch(error){
            // 500 : internal server error
        res.status(500).json({
            message : "Error occured!!!"
        })
    }
}

// export const isAlumni = async (req, res, next)=>{
//     try{
//         const {email} = req.body;

//         const userInfo = await UserModel.findOne( { email } )

//         if(userInfo && userInfo.role == "Admin"){
//             next();
//             // proceed 
//         }
//         else{
//                 // 403 : 
//             res.status(403).json({
//                 message : "Access Denied only Admin can add Company"
//             })
//         }

//     }
//     catch(error){
//             // 500 : internal server error
//         res.status(500).json({
//             message : "Error occured!!!"
//         })
//     }
// }

// export const isStudent = async (req, res, next)=>{
//     try{
//         const {email} = req.body;

//         const userInfo = await UserModel.findOne( { email } )

//         if(userInfo && userInfo.role == "Admin"){
//             next();
//             // proceed 
//         }
//         else{
//                 // 403 : 
//             res.status(403).json({
//                 message : "Access Denied only Admin can add Company"
//             })
//         }

//     }
//     catch(error){
//             // 500 : internal server error
//         res.status(500).json({
//             message : "Error occured!!!"
//         })
//     }
// }


