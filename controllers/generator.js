const returnGenerator = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

module.exports = {
    returnGenerator
};