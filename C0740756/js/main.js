﻿// Your code here!
var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
};

var car = {
    color:"RED",
    numtires: 4,
    model: "Hyundai"
};
var motorcycle = {
    color: "RED",
    numtires: 2,
    modeL: "Honda"
};

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
//name = person.fullName(); return full name

var daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

//daysOfTheWeek[4];
//"thursday"
