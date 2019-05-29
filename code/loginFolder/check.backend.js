module.exports = (data) => {
    if (Math.random() > 0.5) {
        throw "Yo I'm just throwing an error cause I feel like it (50% of the time)"
    }
    return `yeah I dont actually have a database back here but this backend function did receive ${JSON.stringify(data)} and this response message itself is from the backend`
}