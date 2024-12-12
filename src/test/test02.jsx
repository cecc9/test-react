import { useEffect, useState } from "react";

export const Test02 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <br />
      <button onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? "Desactivar" : "Activar"}
      </button>

      {isActive && <CompTest />}
    </div>
  );
};

const CompTest = () => {
  useEffect(() => {
    function _onClick(event) {
      console.log("evento", event.clientX);
    }

    window.addEventListener("click", _onClick);
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illo
        neque vero, et illum obcaecati vitae modi libero mollitia beatae
        veritatis alias ipsum fuga ea expedita quos quam officia nesciunt?
      </p>
    </div>
  );
};
