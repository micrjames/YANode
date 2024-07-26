# YANode
A place to put an implementation of a node for data structures and the like.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working through implementing data structures.

## Technologies Used
I'm only using plain, vanilla Typescript with no libraries or other packages.

## Features
* Defines the structure of a Node. 
* Node definition can be used as a basis for:
    * linked lists
    * trees
    * other graph-like structures that may arise.
* Can set a *Key* for the Node
* Can also set the *next* Node that this one will point to

## Setup
Just import the YANode interface into your project.

## Usage
Declare an object, in this case where the Key can be a number.
```
  let node2: YANode<number>;
```
Also, declare another object to which the first node will be pointed as the next node. 
```
  let node1: YANode<number>;
```
Then, assign to those objects declared above, the *Key* and *next* Node.
```
  node2 = {
     Key: 2,
     next: null
  };
  node1 = {
     Key: 1,
     next: node2
  };
```
The above code assigns consecutive numbers 1 and 2 to the *Key*s of the Nodes. Then, we can see that *node1* points to *node2* and *node2* doesn't point to a Node.

## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
