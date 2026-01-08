// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ArtMarketplace is ERC721Enumerable {
    address public backendAddress;

    event BackendAddressSet(address indexed previousAddress, address indexed newAddress);
    event ArtListed(uint256 artId, address artistAddress, string title, uint256 price);
    event ArtPurchased(uint256 artId, address buyerAddress, uint256 price);
    event ArtResold(uint256 artId, uint256 newPrice);

    modifier onlyBackend() {
        require(msg.sender == backendAddress, "Unauthorized");
        _;
    }

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function setBackendAddress(address _backendAddress) external {
        require(backendAddress == address(0), "Backend address already set");
        emit BackendAddressSet(address(0), _backendAddress);
        backendAddress = _backendAddress;
    }

    function listArt(string calldata _title, uint256 _price) external {
        uint256 artId = totalSupply() + 1;
        _mint(msg.sender, artId);
        emit ArtListed(artId, msg.sender, _title, _price);
    }

    function buyArt(uint256 _artId) external payable {
        require(ownerOf(_artId) != address(0), "Art not listed");
        address artistAddress = ownerOf(_artId);
        uint256 price = msg.value;
        _transfer(artistAddress, msg.sender, _artId);
        payable(artistAddress).transfer(price);
        updateBackendOnPurchase(_artId, msg.sender, price);
    }

    function resellArt(uint256 _artId, uint256 _newPrice) external {
        require(ownerOf(_artId) == msg.sender, "Not the owner of the art");
        require(_newPrice > 0, "Price should be greater than zero");
        updateBackendOnResell(_artId, _newPrice);
    }

    function updateBackendOnPurchase(uint256 _artId, address _buyer, uint256 _price) private onlyBackend {
        emit ArtPurchased(_artId, _buyer, _price);
    }

    function updateBackendOnResell(uint256 _artId, uint256 _newPrice) private onlyBackend {
        emit ArtResold(_artId, _newPrice);
    }

    fallback() external payable {
        // Fallback function to receive Ether
    }
     receive() external payable {}
}
