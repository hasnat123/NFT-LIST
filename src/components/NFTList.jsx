import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NFTModal from './NFTModal';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const NFTList = ({ address }) => {

    const [nfts, setNfts] = useState([]);
    const [selectedNft, setSelectedNft] = useState();


    useEffect(() => {

      const fetchData = async () =>
      {
        try{
          const res = await axios.get(`https://my-api.com/nfts?address=${address}`, { withCredentials: true })
          setNfts(res.data);
        }
        catch(err){
          console.log(err)
        }
      }

      // fetchData()

    }, [address]);
  
    function showDetails(nft) {
        setSelectedNft(nft);
      }
    
      function hideDetails() {
        setSelectedNft(null);
      }
    
      function purchaseNft() {
        window.location.href = selectedNft.openseaLink;
      }

    return (
      <div className="nft-list">
        {nfts.map(nft => (
          <div className="nft-card" key={nft.id} onClick={() => showDetails(nft)}>
            <OpenInFullIcon className='expand-icon'/>
            <img src={nft.image} alt={nft.name} />
            <div className="details">
              <h3>{nft.name}</h3>
              <p>{nft.owner}</p>
            </div>

          </div>
        ))}

        {selectedNft && (
            <NFTModal
            nft={selectedNft}
            onClose={hideDetails}
            onPurchase={purchaseNft}
          />
        )}
      </div>
    );
}

export default NFTList