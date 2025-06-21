//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin/contracts/utils/Address.sol";

contract Transfer_From_Contract{
    function TransferETH(address payable _address, uint256 _value) public{
        Address.sendValue(_address, _value);
    }
    receive() external payable{}
}
