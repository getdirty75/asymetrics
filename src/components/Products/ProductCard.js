import React, { useState } from "react"
import getStripe from "../../utils/striped"

const formatPrice = (amount, currency) => {
  const price = (amount / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const price = new FormData(event.target).get("priceSelect");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
      <form className="product__form" onSubmit={handleSubmit}>
        <div key={product.id}>
          <article>
            <div className="image is-5by4">
              <img className="product__img"
                alt={product.images}
                src={product.images && product.images}
              />
            </div>
            <div className="blogRoll__sub">
              <p className="blogRoll__itemTitle">{product.name}</p>
              <p className="blogRoll__teaser">{product.description}</p>
              <div className="blogRoll__tagsBox">
                {product.prices.map(price => (
                  <p key={price.id} value={price.id}>
                    {formatPrice(price.unit_amount, price.currency)}
                  </p>
                ))}
              </div>
              <button className="button is-black christmas_button" disabled={loading}>
                BUY ME
              </button>
            </div>
          </article>
        </div>
      </form>
  )
}

export default ProductCard