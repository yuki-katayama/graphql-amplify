// const Person = require("../models/person");
const Person = require("../models/person");
const Tweet = require("../models/tweet");
import { PubSub, withFilter } from "graphql-subscriptions"
import {Types} from "mongoose";

const pubsub = new PubSub();

module.exports = {
	Query: {
		persons: async () => {
			const person = await Person.find();
			return person;
		},
		latestTweets: async () => {
			const tweets = await Tweet.find();
			return tweets;
		}
	},
	Mutation: {
		addPerson: async (_, arg: {name: string, age: number}) => {
			const person = new Person(arg);
			await person.save();
			return person;
		},
		addTweet: async (_, arg: {description: string, person: any}) => {
			const tweet = new Tweet(arg);
			tweet.person = arg.person;
			tweet.save();
			return tweet;
		}
	},
	Tweet: {
		likes: (parent: any): number => {
			return 2;
		},
		person: async (tweet: any): Promise<any> => {
			const person = await Person.findById(tweet.person)
			console.log(person);
			if (!person) {
				return "";
			}
			return person;
		}
	},
	Person: {
		tweets: async (person: any): Promise<any> => {
			const tweets = await Tweet.find({person: person.id});
			return tweets;
		}
	}
	// Subscription: {
	// },
}