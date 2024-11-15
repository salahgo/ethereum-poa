pragma solidity ^0.8.0;

contract Storage {
    uint256 public data;

    function set(uint256 _data) public {
        data = _data;
    }
}
