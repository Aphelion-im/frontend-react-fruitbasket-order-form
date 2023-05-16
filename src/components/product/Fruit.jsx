import './Fruit.css';

export default function Product(props) {
  // Of props: { fruit, productNameNL }

  return (
    <>
      <article className="fruit-card">
        <img
          src={props.fruitImage}
          alt={props.productNameNL}
          title={props.productNameNL}
        />
        <span>{props.productNameNL}</span>
        {/* Om het <Counter /> component te kunnen weergeven, met props.children: */}
        {props.children}
      </article>
    </>
  );
}
