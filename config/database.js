import mongoose from 'mongoose'

const credentials = {
  mongo: process.env.DATABASE_MONGO || 'mongodb://admin:9RTCCV9iHesJQOPC@cluster0-shard-00-00.m0wrl.mongodb.net:27017,cluster0-shard-00-01.m0wrl.mongodb.net:27017,cluster0-shard-00-02.m0wrl.mongodb.net:27017/url-shortener?ssl=true&replicaSet=atlas-cyr16x-shard-0&authSource=admin&retryWrites=true&w=majority'
}

mongoose.Promise = global.Promise
mongoose.connect(credentials.mongo, { useNewUrlParser: true })