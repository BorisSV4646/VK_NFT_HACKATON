//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MinistryEducation.sol";

contract Registration is MinistryEducation {
    address private owner;
    mapping(address => Userinfo) usermap;
    address[] public userAddresses;

    struct Userinfo {
        string name;
        string description;
        bytes32 vkid;
        mapping(address => string) courses;
    }

    event UserChanged(address old_, address new_);
    event UserAdded(string userName_);
    event CourseAdded(string courseName_);


    constructor() {
        owner = msg.sender;
    }

    modifier notNewuser(address user_) {
        bool a;
        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == user_) {
                a = true;
            } else {a = false;}
        } 
        require(a == true);
        _;
    }

    modifier onlyNewuser(address user_) {
        bool a;
        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == user_) {
                a = true;
            } else {a = false;}
        } 
        require(a == false);
        _;
    }

    function newUser() external onlyNewuser(msg.sender) {
        userAddresses.push(msg.sender);
    }

    function createVkid(uint vkid_) internal pure returns(bytes32) {
        bytes32 hashIdStudent = keccak256(abi.encodePacked(vkid_));
        return hashIdStudent;
    }

    function addUserinfo(string memory name_, string memory description_, uint vkid_) external notNewuser(msg.sender) {
        require(usermap[msg.sender].vkid == 0x0000000000000000000000000000000000000000000000000000000000000000, "You have already added the information");
        Userinfo storage newUserinfo = usermap[msg.sender];
        newUserinfo.name = name_;
        newUserinfo.description = description_;
        newUserinfo.vkid = createVkid(vkid_);
        newUserinfo.courses[msg.sender] = 'no';
        emit UserAdded(name_);
    }

    function wathUserinfo(address user_) external view returns(string memory, string memory, bytes32) {
        return(usermap[user_].name, usermap[user_].description, usermap[user_].vkid);
    }
}