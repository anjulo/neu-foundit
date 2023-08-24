import React, { useEffect } from "react";
import ItemsList from "components/ItemsList.js";
import { useSelector, useDispatch } from "react-redux";
import { getFoundItemsThunk, getLostItemsThunk } from "thunks/itemsThunks.js";


const Items = () => {
  const {
    lostItems, 
    isLostItemsLoading, 
    lostItemsError, 
    foundItems, 
    isFoundItemsLoading, 
    foundItemsError
  } = useSelector(state => state.items)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLostItemsThunk());
    dispatch(getFoundItemsThunk())
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Lost Items</h1>
          <ItemsList items={lostItems} />
        </div>
        <div className="col-md-6">
          <h1>Found Items</h1>
          <ItemsList items={foundItems} />
        </div>
      </div>
    </div>
  );
}

export default Items;