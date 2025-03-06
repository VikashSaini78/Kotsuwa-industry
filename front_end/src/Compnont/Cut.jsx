import React from "react";

function ProductList() {
  const data = [
    {
      id: 1,
      name: "10 oz Natural with contrast color handles and side",
      Pattern: "Plain",
      "Country of Origin ": "India",
      Style: "KI381042",
      Size: " 38x42x10",
      Material: "10 oz heavy weight cotton",
      "Minimum Order Quantity ": "500 pcs ",
      Color: "Beige",
      Brand: "Kotsuwa",
      "category":"Canvas Tote bags",
      image: "./media/canvas1.jpeg",
    },
    {
        id: 2,
        name: "Everyday Canvas Bag",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI381042",
        Size: "38x10x42 cm",
        Material: "10 oz",
        "Minimum Order Quantity ": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas4.jpeg",
      },
      {
        id: 3,
        name: "Beach Bag",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI1150",
        Size: " 18x12x6.5 inches",
        Material: "10 oz heavy weight cotton(320 gsm)",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas5.jpeg",
      },
      {
        id: 4,
        name: "Signature Rope Tote Bag",
        Pattern: "Plain and Printed",
        "Country of Origin ": "India",
        Style: "KI1140",
        Size: "14x14.25x6 inches",
        Material: "10 oz heavy weight cotton(320 gsm)",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas21.jpeg",
      },
      {
        id: 5,
        name: "BICOLOR CANVAS",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI4337",
        Size: "40X37X10",
        Material: "Canvas",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas36.jpeg",
      },
      {
        id: 6,
        name: "BIG CANVAS TOTE 2",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI4332",
        Size: "42X33X10",
        Material: "Canvas",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas32.jpeg",
      },
      {
        id: 7,
        name: "LARGE CANVAS TOTE",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI4394",
        Size: "37X37X16",
        Material: "Canvas",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Beige",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas32.jpeg",
      },
      {
        id: 8,
        name: "CANVAS TOTE 1",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI4402",
        Size: "33X34X10",
        Material: "Canvas",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Black",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas31.jpeg",
      },
      {
        id: 9,
        name: "Cotton Canvas Stylish Border Bag",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI393812",
        Size: "39x38x12 cm",
        Material: "10 oz",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Blue",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas28.jpeg",
      },
      {
        id: 10,
        name: "Cotton Canvas Quotidian Bag",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI403612",
        Size: "40x36x12 cm",
        Material: "10 oz",
        "Minimum Order Quantity": "500 pcs ",
        Color: "Blue",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas25.jpeg",
      },
      {
        id: 11,
        name: "CANVAS DAILY TOTE BAG",
        Pattern: "Plain",
        "Country of Origin ": "India",
        Style: "KI384315",
        Size: "38*43*15",
        Material: "10 oz",
        "Minimum Order Quantity": "500 pcs ",
        Color: "yello",
        Brand: "Kotsuwa",
        "category":"Canvas Tote bags",
        image: "./media/canvas23.jpeg",
      },
  ];

  console.log(data)
  return (
    <>
      <div className="container">
         {
           data.map((value)=>(
              <div>
                <img src={value.image} alt="imag error"/>
                <h4>{value.id}</h4>
              </div>
           ))
         }
      </div>
    </>
  );
}

export default ProductList;
