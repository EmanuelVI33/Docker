let times = 0;

const syncDb = () => {
    times++;
    console.log(`Cada 5 segundos ${times}`);
    return times
};

module.exports = {
    syncDb,
}