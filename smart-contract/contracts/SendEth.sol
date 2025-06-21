// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SendEth {
    address payable public targetContract;

    constructor(address payable _targetContract) {
        targetContract = _targetContract;
    }

    // This function lets the user send ETH to the target contract
    function sendToTarget() external payable {
        require(msg.value > 0, "Send some ETH");
        (bool success, ) = targetContract.call{value: msg.value}("");
        require(success, "ETH transfer failed");
    }
}