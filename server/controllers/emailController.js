const EmailFlow = require('../models/EmailFlow');

exports.saveFlow = async (req, res) => {
  try {
    const { nodes, edges } = req.body;
    const flow = new EmailFlow({ nodes, edges });
    await flow.save();
    res.status(200).json({ message: 'Flow saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving flow.', error });
  }
};

exports.getFlows = async (req, res) => {
  try {
    const flows = await EmailFlow.find();
    res.status(200).json(flows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving flows.', error });
  }
};
