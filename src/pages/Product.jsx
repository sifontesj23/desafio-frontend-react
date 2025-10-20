import { useParams } from "react-router-dom";
import { useState } from "react";
import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import MinusImage from "../assets/Minus.svg";
import PlusImage from "../assets/Plus.svg";
import DeleteImage from "../assets/Delete.svg";
import CloseImage from "../assets/X.svg";
import "../css/Product.css";

export function Product() {
  const { id } = useParams();

  
  const products = [
    { id: 1, name: "Espresso", image: "/product-01.png", descricao: "Imagine um café Espresso como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano" },
    { id: 2, name: "Americano", image: "/product-02.png", descricao: "Imagine um Café Americano como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano" },
    { id: 3, name: "Café com leite", image: "/product-03.png", descricao: "Imagine um café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Vegano" },
    { id: 4, name: "Cappuccino", image: "/product-04.png", descricao: "Imagine um Cappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "10,00", price2: "", tag: "Contém lactose" },
    { id: 5, name: "Latte", image: "/product-05.png", descricao: "Imagine um Latte como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose" },
    { id: 6, name: "Macchiato", image: "/product-06.png", descricao: "Imagine um Macchiato como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose" },
    { id: 7, name: "Mocha", image: "/product-07.png", descricao: "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose" },
    { id: 8, name: "Irish Coffee", image: "/product-08.png", descricao: "Imagine um Irish Coffee como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose" },
    { id: 9, name: "Cold Brew", image: "/product-09.png", descricao: "Imagine um Cold Brew como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano" },
    { id: 10, name: "Frappuccino", image: "/product-10.png", descricao: "Imagine um Frappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose" },
    { id: 11, name: "Café gelado com laranja tônica", image: "/product-11.png", descricao: "Imagine um Café gelado com laranja tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano" },
    { id: 12, name: "Milk shake de café", image: "/product-12.png", descricao: "Imagine um Milk shake de café como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose" },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="container product__container">
        <p>Produto não encontrado.</p>
        <a href="/" className="product__link">
          Voltar para o início
        </a>
      </main>
    );
  }

  const tagImage = product.tag === "Vegano" ? PlantImage : CowImage;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    const observation = document.getElementById("observation").value;
    const newItem = {
      id: Date.now() + Math.random(),
      idProduto: product.id,
      nome: product.name,
      imagem: product.image,
      preco: product.price,
      vegano: product.tag === "Vegano",
      quantidade: quantity,
      observacao: observation,
    };

    setCart([...cart, newItem]);
    setShowCart(true);
    alert(`Produto "${product.name}" adicionado ao carrinho!`);
  };

  const deleteItem = (idItem) => {
    setCart(cart.filter((item) => item.id !== idItem));
  };

  const toggleCart = () => setShowCart(!showCart);

  const increaseItem = (idItem) => {
    setCart(
      cart.map((item) =>
        item.id === idItem
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  const decreaseItem = (idItem) => {
    setCart(
      cart.map((item) =>
        item.id === idItem && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  return (
    <main className="container product__container">
      <a href="/" className="product__link">Voltar para o início</a>

      
      <section className="product">
        <div className="product__container--image">
          <img src={product.image} alt={product.name} className="product__image" />
        </div>

        <div className="product__data">
          <h1 className="product__title">{product.name}</h1>
          <h2 className="product__price">R$ {product.price}</h2>
          <div className="product__tag">
            <img src={tagImage} alt={product.tag} />
            <span>{product.tag}</span>
          </div>
          <p className="product__description">{product.descricao}</p>

          <form>
            <section className="product__observation">
              <label htmlFor="observation">Observações</label>
              <textarea id="observation" rows={3} placeholder="Digite suas observações"></textarea>
            </section>

            <div className="product__buy">
              <section className="product__quantity">
                <button type="button" onClick={decrease}>
                  <img src={MinusImage} alt="menos" />
                </button>
                <input type="text" readOnly value={quantity} />
                <button type="button" onClick={increase}>
                  <img src={PlusImage} alt="mais" />
                </button>
              </section>
              <button type="button" onClick={addToCart} className="product__button">
                Adicionar ao carrinho
              </button>
            </div>
          </form>
        </div>
      </section>

    
      {showCart && (
        <section className="cart">
          <div className="cart__header">
            <h2>Meu Carrinho</h2>
            <button onClick={toggleCart} className="cart__close">
              <img src={CloseImage} alt="Fechar carrinho" />
            </button>
          </div>

          {cart.map((item) => (
            <div className="cart__product" key={item.id}>
              <img src={item.imagem} alt={item.nome} className="cart__productImage" />
              <div className="cart__productInfo">
                <div className="cart__productRow">
                  <h2>{item.nome}</h2>
                  <button onClick={() => deleteItem(item.id)} className="cart__productDelete">
                    <img src={DeleteImage} alt="Remover produto" />
                  </button>
                </div>

                <div className="cart__productRow">
                  <div className="product__tag">
                    <img src={item.vegano ? PlantImage : CowImage} alt={item.vegano ? "Vegano" : "Contém lactose"} />
                    <span>{item.vegano ? "Vegano" : "Contém lactose"}</span>
                  </div>
                  <h3>R$ {item.preco}</h3>
                </div>

                <div className="cart__productRow">
                  <section className="product__quantity">
                    <button type="button" onClick={() => decreaseItem(item.id)}>
                      <img src={MinusImage} alt="menos" />
                    </button>
                    <input type="text" readOnly value={item.quantidade} />
                    <button type="button" onClick={() => increaseItem(item.id)}>
                      <img src={PlusImage} alt="mais" />
                    </button>
                  </section>
                </div>

                {item.observacao && (
                  <p className="cart__observation"><strong>Obs:</strong> {item.observacao}</p>
                )}
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}