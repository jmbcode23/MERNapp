import {useParams} from 'react-router-dom'

const ItemDetails = () => {
const {id} = useParams()

    return (
      <div>
        <div>This is the details page {id}</div>
      </div>
    );
  };
  
  export default ItemDetails;