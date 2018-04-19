import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class PrdStore extends EventEmitter{
	constructor(){
		super();
		this.prds = [
			{
				id: 1,
				name: "ALCOHOL-FREE HAND SANITIZER",
				img: "product-1",
				price: 46.00,
				oldprice: 0,
				featured: true,
				sale: false,
				star: 5,
				tags: ["food","nutrition"]
			},
			{
				id: 2,
				name: "SERUMTOLOGIE C SERUM",
				img: "product-2",
				price: 32.00,
				oldprice: 0,
				featured: true,
				sale: false,
				star: 4,
				tags: ["food","health","organic"]
			},
			{
				id: 3,
				name: "ORGANIC GREEN TEA",
				img: "product-3",
				price: 19.00,
				oldprice: 0,
				featured: true,
				sale: false,
				star: 5,
				tags: ["acids","health","nutrition"]
			},
			{
				id: 4,
				name: "EMINENCE STRAWBERRY",
				img: "product-4",
				price: 56.00,
				featured: true,
				oldprice: 0,
				sale: false,
				star: 4,
				tags: ["food","health","nutrition"]
			},
			{
				id: 5,
				name: "BEST VITAMIN C",
				img: "product-5",
				price: 39.00,
				oldprice: 56.00,
				featured: false,
				sale: true,
				star: 4,
				tags: ["acids","food","organic"]
			},
			{
				id: 6,
				name: "SHEA BUTTEК",
				img: "product-6",
				price: 36.00,
				oldprice: 46.00,
				featured: false,
				sale: true,
				star: 0,
				tags: ["health","vitamins"]
			},
			{
				id: 7,
				name: "RESTORING ROSEHIP",
				img: "product-7",
				price: 30.00,
				oldprice: 32.00,
				featured: false,
				sale: true,
				star: 0,
				tags: ["food","nutrition","organic"]
			},
			{
				id: 8,
				name: "COCONUT OIL",
				img: "product-8",
				price: 30.00,
				oldprice: 46.00,
				featured: false,
				sale: true,
				star: 4,
				tags: ["food","health"]
			}

		]
	}
	getAll() {
        return this.prds;
    }
}

const prdStore = new PrdStore;
export default prdStore;