// Even met props notatie gedaan i.v.m. { fruitCount, setFruitCount } referentie.
// fruitCount en setFruitCount lijken op placeholder State props, niet de daadwerkelijke state objecten zelf.
// Op <Button /> component zit de daadwerkelijke onClick event handler.
// Geen state op deze component pagina.
// https://youtu.be/yvTGXH7uybA (Avoid this React State Mistake | React Previous State Explained)

import './Counter.css';
import Button from '../button/Button';

export default function Counter(props) {
  return (
    <div className="counter-buttons">
      <Button
        type="button"
        handleClick={() => {
          if (props.fruitCount > 0) props.setFruitCount(props.fruitCount - 1);
        }}
      >
        -
      </Button>
      <span>{props.fruitCount}</span>
      <Button
        type="button"
        handleClick={() => {
          if (props.fruitCount >= 0) props.setFruitCount(props.fruitCount + 1);
        }}
      >
        +
      </Button>
    </div>
  );
}
