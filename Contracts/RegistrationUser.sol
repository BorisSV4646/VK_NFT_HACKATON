//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CreateCourse.sol";

contract RegistrationUser  {
    address private owner;
    mapping(address => Userinfo) userMap;
    address[] public userAddresses;

    struct Userinfo {
        string name;
        string description;
        bytes32 vkid;
        string[] coursesName;
        mapping(string => CreateCourse) courses;
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
        require(a == true, 'Yoa are not a new user');
        _;
    }

    modifier onlyNewuser(address user_) {
        bool a;
        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == user_) {
                a = true;
            } else {a = false;}
        } 
        require(a == false, 'Yoa are a new user, please registrate');
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
        require(userMap[msg.sender].vkid == bytes32(0), "You have already added the information");
        Userinfo storage newUserinfo = userMap[msg.sender];
        newUserinfo.name = name_;
        newUserinfo.description = description_;
        // newUserinfo.vkid = createVkid(vkid_);
        // newUserinfo.courses[msg.sender] = 'not yet';
        emit UserAdded(name_);
    }

    function wathUserinfo(address user_) external view returns(string memory, string memory, bytes32) {
        return(userMap[user_].name, userMap[user_].description, userMap[user_].vkid);
    }

    function wathCourses(string memory courseName_) external view returns(address) {
        Userinfo storage newUserinfo = userMap[msg.sender];
        return address(newUserinfo.courses[courseName_]); 
    }

    function addCourse(string memory courseName_, string memory symbol_, string memory description_, uint totalsuplay_) external notNewuser(msg.sender) {
        require(userMap[msg.sender].vkid != bytes32(0), "First add the user information");
        CreateCourse course = new CreateCourse(courseName_, symbol_, description_, totalsuplay_);
        Userinfo storage newUserinfo = userMap[msg.sender];
        newUserinfo.courses[courseName_] = course; 
        newUserinfo.coursesName.push(courseName_);
        emit CourseAdded(courseName_);
    }
}
