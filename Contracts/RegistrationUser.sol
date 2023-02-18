//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MinistryEducation.sol";

contract Registration is MinistryEducation {
    address public user;
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
        user = msg.sender;
    }


    modifier onlyUser() {
        require(user == msg.sender,
            "You do not have permission to run this function. Only ministry allowed.");
        _;
    }

    function createVkid(uint vkid_) internal pure returns(bytes32) {
        bytes32 hashIdStudent = keccak256(abi.encodePacked(vkid_));
        return hashIdStudent;
    }

    function setUser(address user_) external onlyUser {
        emit UserChanged(user, user_);
        user = user_;
    }

    function addUser(string memory name_, string memory description_, uint vkid_) external onlyUser {
        usermap[msg.sender].name = name_;
        usermap[msg.sender].description = description_;
        usermap[msg.sender].vkid = createVkid(vkid_);
        userAddresses.push(msg.sender);
        emit UserAdded(name_);
    }
}

        // usermap[msg.sender] = Userinfo({
        //     name: name_, 
        //     description: description_,
        //     vkid: vkid_
        //     });