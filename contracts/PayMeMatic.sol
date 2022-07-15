// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract PayMeMatic {
    uint256 private constant _ENTERED = 2;
    uint256 private constant _NOT_ENTERED = 1;

    uint256 private _status;
    
    uint256 public totalPayments;
    address private immutable elcharitas;

    mapping(string => address) public payees;

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        _status = _ENTERED;

        _;

        _status = _NOT_ENTERED;
    }

    constructor() {
        _status = _NOT_ENTERED;
        elcharitas = msg.sender;
    }

    function claim(string memory _claimer) external payable nonReentrant {
        require(
            payees[_claimer] == address(0),
            "This page has already been claimed"
        );
        require(
            msg.value >= 1 ether,
            "You must pay at least 1 ether to claim your page"
        );
        payees[_claimer] = msg.sender;
        (bool success, ) = payable(elcharitas).call{value: msg.value}("");
        require(success, "Payment failed");
    }

    function makePayment(string memory _payee) external payable nonReentrant {
        require(payees[_payee] != address(0), "This page has not been claimed");

        totalPayments += msg.value;
        (bool success, ) = payable(payees[_payee]).call{value: msg.value}("");
        require(success, "Payment failed");
    }
}
