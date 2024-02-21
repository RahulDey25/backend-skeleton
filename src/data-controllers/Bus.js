class Bus {

    constructor(client) {
        this.collectionName = "bus";
        this.database = client.db(this.collectionName);
        this.collection = this.database.collection(this.collectionName);
    }

    async createBus(bus) {
        return this.collection.insertOne(bus);
    }

    async getBus(busId) {
        return this.collection.findOne({busId});

    }
}

module.exports = Bus;