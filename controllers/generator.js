const returnGenerator = (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

module.exports = {
    returnGenerator
};