const User = require("../models/User");

// GET => /leaderboard
exports.getLeaderboard = async (req, res) => {
    try {
        const accounts = await User.find({ }).limit(10).sort({ points: "descending" }).exec();

        const allAccounts = await User.find({ }).sort({ points: "descending" }).exec();
        const currentUserPosition = allAccounts.findIndex(({ _id }) => _id.toString() === req.user._id.toString()) + 1;

        res.status(200).json({
            isError: false,
            message: "Operation successfull.",
            body: {
                accounts,
                currentUserPosition
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}