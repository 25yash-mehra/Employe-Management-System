let userModel = require('../Schema')

let createModel = async (req, res) => {
    try {
        console.log(req.body);
        // Data ko MongoDB me save karna
        let user = new userModel(req.body);
        await user.save();
        res.status(201).send("Data created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating data");
    }
}

module.exports = createModel;
