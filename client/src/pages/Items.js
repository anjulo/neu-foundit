import React, { useEffect } from "react";
import ItemsList from "components/ItemsList.js";
import { useSelector, useDispatch } from "react-redux";
import { getLostItemsThunk } from "thunks/lostItemsThunks.js";


const Items = () => {
  const lostItems = useSelector((state) => state.lostItems.items)
  console.log(lostItems);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLostItemsThunk());
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Lost Items</h1>
          <ItemsList items = {lostItems} />
        </div>
        <div className="col-md-6">
          <h1>Found Items</h1>
          {/* <ItemsList /> */}
        </div>
      </div>
    </div>
  );
}

export default Items;