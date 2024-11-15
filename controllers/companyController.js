import companyModel from "../models/Company.js";

export const createCompany = async (req, res) => {
    try {
      const { name, location, industry, email } = req.body;
  
      const companyObj = new companyModel({
        name,
        location,
        industry,
        email,
      });
  
      const savedCompany = await companyObj.save();
  
      res.json({
        savedCompany,
        message: "Company created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const getAllCompanies = async (req, res)=>{
    try{
      const getAllCompanies = await companyModel.find()
      res.json({
        getAllCompanies
      })
    }
    catch(error){
      res.json({
        error : "Can't fetch data"
      })
      console.log(error);
      
    }
}