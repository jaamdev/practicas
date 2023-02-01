import { useEffect } from "react";
import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";
import ItemsContainer from "../components/itemContainer";
import Item from "../components/item";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <ItemsContainer>
        {state.items.map((item) => (
          <Item item={item} key={crypto.randomUUID()} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
}
