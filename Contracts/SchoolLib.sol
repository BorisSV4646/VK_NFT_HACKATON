// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SchoolLib {
    struct MarkInfo {
        uint256 mark;
        uint256 markReview;
        uint256 timestamp;
        uint256 timestampReview;
        address teacher;
        address teacherReview;
        address school;
    }
}