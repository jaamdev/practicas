import { forwardRef, useEffect } from "react";
import TodoBlock from "./todoBlock";

function TodoBlockView({ data, onChange, onCreate, focusId }, ref) {
  useEffect(() => {
    if (focusId && ref.current) ref.current.focus();
  }, [focusId]);

  function handleOnChange(item, e) {
    switch (e.target.name) {
      case "checkbox":
        onChange({ type: "todo", id: item.id, completed: e.target.checked });
        break;

      case "text":
        onChange({ type: "todo", id: item.id, text: e.target.value });
        break;
      default:
    }
  }

  function handleOnKeyDown(item, e) {
    if (e.key === "Enter") {
      onCreate();
    }
  }

  return data.map((item) => (
    <TodoBlock
      ref={ref}
      key={item.id}
      item={item}
      focus={focusId === item.id}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  ));
}

export default forwardRef(TodoBlockView);
