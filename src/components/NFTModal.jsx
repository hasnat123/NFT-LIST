import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const NFTModal = ({ nft, onClose, onPurchase }) => {
    return (
        <div className="nft-modal">
            <div className="nft-modal-content">
                <CloseIcon onClick={onClose} className='close'/>
                <img src={nft.image} alt={nft.name} />
                <div className="details">
                    <h3>{nft.name}</h3>
                    <p>By {nft.owner}</p>
                    <p className='description'>{nft.description}</p>
                    <button onClick={onPurchase}>Purchase on OpenSea</button>
                </div>

            </div>
        </div>
    );
}

export default NFTModal