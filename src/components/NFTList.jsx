import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NFTModal from './NFTModal';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const NFTList = ({ address }) => {

    const [nfts, setNfts] = useState([{id: 1, image: 'https://i.seadn.io/gcs/files/50182b51b061766036ee3912a6117873.png?auto=format&w=500&h=500', name:'arty', description: 'lorem', owner: 'meowsykins', openseaLink: 'https://opensea.io/assets/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/29822'}, {id: 2, image: 'https://files.readme.io/fdea1c5-sell-crypto-packs.png', name:'arty', description: 'my dbnsjkhdnskds', owner: 'meowsykins', openseaLink: 'https://opensea.io/assets/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/29822'}]);
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