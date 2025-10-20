import { useState } from "react";
import { Link } from "react-router-dom";
import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import "../css/Home.css";

export function Home() {
  const [produtos] = useState([
    { id: 1, name: "Espresso", image: "/product-01.png", descricao: "Imagine um café Espresso como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 2, name: "Americano", image: "/product-02.png", descricao: "Imagine um café Americano como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 3, name: "Café com leite", image: "/product-03.png", descricao: "Imagine um café com leite como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Vegano", categoria: "Clássicos" },
    { id: 4, name: "Cappuccino", image: "/product-04.png", descricao: "Imagine um Cappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "10,00", price2: "", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 5, name: "Latte", image: "/product-05.png", descricao: "Imagine um Latte como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 6, name: "Macchiato", image: "/product-06.png", descricao: "Imagine um Macchiato como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 7, name: "Mocha", image: "/product-07.png", descricao: "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 8, name: "Irish Coffee", image: "/product-08.png", descricao: "Imagine um Irish Coffee como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "8,00", price2: "10,00", tag: "Contém lactose", categoria: "Clássicos" },
    { id: 9, name: "Cold Brew", image: "/product-09.png", descricao: "Imagine um Cold Brew como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Gelados" },
    { id: 10, name: "Frappuccino", image: "/product-10.png", descricao: "Imagine um Frappuccino como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Gelados" },
    { id: 11, name: "Café gelado com laranja tônica", image: "/product-11.png", descricao: "Imagine um Café gelado com laranja tônica como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Vegano", categoria: "Gelados" },
    { id: 12, name: "Milk shake de café", image: "/product-12.png", descricao: "Imagine um Milk shake de café como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.", price: "0,00", price2: "0,00", tag: "Contém lactose", categoria: "Gelados" },
  ]);

  const renderProdutos = (categoria) =>
    produtos
      .filter((p) => p.categoria === categoria)
      .map((produto) => (
        <Link
          key={produto.id}
          to={`/product/${produto.id}`}
          className="products__list--item"
        >
          <img src={produto.image} alt={produto.name} />
          <h3 className="products__list--price">
            R$ {produto.price} {produto.price2 && <span>R$ {produto.price2}</span>}
          </h3>
          <h4 className="products__list--name">{produto.name}</h4>
          <div className="product__tag">
            <img
              src={produto.tag === "Vegano" ? PlantImage : CowImage}
              alt={produto.tag}
            />
            <span>{produto.tag}</span>
          </div>
        </Link>
      ));

  return (
    <main>
     
      <section className="slogan">
        <div className="container">
          <h1 className="slogan__title">Fragrância e sabor elevado ao cubo</h1>
          <p className="slogan__text">
            Explore nossa variedade de blends exclusivos e saboreie a perfeição em cada gole.
          </p>
        </div>
      </section>

    
      <section className="products">
        <div className="container">
          <h2 className="products__title">Clássicos</h2>
          <div className="products__list">{renderProdutos("Clássicos")}</div>
        </div>
      </section>

     
      <section className="products">
        <div className="container">
          <h2 className="products__title">Gelados</h2>
          <div className="products__list">{renderProdutos("Gelados")}</div>
        </div>
      </section>
    </main>
  );
}
