// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract CreateCourse {
    string private _name;
    string private _symbol;
    string private _description;
    address private ownerCourse;
    uint public totalSuplay;
    uint public currentSuplay;
    uint private _starttime;
    uint private _duration;
    mapping(uint256 => address) private _ownersCertificate;
    mapping(address => uint256) private _balancesCertificate;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    constructor(string memory name_, string memory symbol_, string memory description_, uint totalsuplay_) {
        _name = name_;
        _symbol = symbol_;
        _description = description_;
        totalSuplay = totalsuplay_;
        ownerCourse = msg.sender;
    }

    modifier onlyOwnermint(uint tokenId) {
        require(ownersCertificate(tokenId) == msg.sender, "Not an owner");
        _;
    }

    function courceInfo() public view returns (string memory, string memory, string memory) {
        return (_name, _symbol, _description);
    }

    function balancesCertificate(address owner) public view returns (uint256) {
        require(owner != address(0), "ERC721: address zero is not a valid owner");
        return _balancesCertificate[owner];
    }

    function ownersCertificate(uint tokenId) public view returns (address) {
        address owner = _ownersCertificate[tokenId];
        require(owner != address(0), "ERC721: invalid token ID");
        return owner;
    }

    function _mint(address to, uint tokenId) public {
        require(to != address(0), "ERC721: mint to the zero address");
        require(_ownersCertificate[tokenId] == address(0), "ERC721: token already minted");
        require(currentSuplay < totalSuplay, "All token minted");

        unchecked {
            _balancesCertificate[to] += 1;
        }

        _ownersCertificate[tokenId] = to;

        currentSuplay++;

        emit Transfer(address(0), to, tokenId);
    }

    function _transfer (
        address from,
        address to,
        uint tokenId
    ) public onlyOwnermint(tokenId) {
        require(ownersCertificate(tokenId) == from, "ERC721: transfer from incorrect owner");
        require(to != address(0), "ERC721: transfer to the zero address");
        require(ownerCourse == msg.sender, "Not an owner Course");

        unchecked {
            _balancesCertificate[from] -= 1;
            _balancesCertificate[to] += 1;
        }
        _ownersCertificate[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }
}