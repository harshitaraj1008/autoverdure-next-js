"use client";
import React, { useState } from "react";
import "./styles.css";
import Select from 'react-select';
import Image from "next/image";

const ProductListPage = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState(props.products);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [type, setType] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [innerHeight, setInnerHeight] = useState("");
  const [innerLength, setInnerLength] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [productImages, setProductImages] = useState({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
  });
  const [checkboxes, setCheckboxes] = useState({
    petFriendly: false,
    notPetFriendly: false,
    moreSunlight: false,
    lessSunlight: false,
  });
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([])
  const [loading, setLoading] = useState(false);
  const [editIndex, setEditindex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([])

  const colorOptions=[
    {value: 'white', label: 'White'},
    {value: 'cream', label: 'Cream'},
    {value: 'darkGrey', label: 'Dark Grey'},
    {value: 'lightGrey', label: 'Light Grey'},
    {value: 'black', label: 'Black'},
  ];
  
  const sizeOptions = [
    {value: 'XS',label: 'XS'},
    {value: 'S',label: 'S'},
    {value: 'M',label: 'M'},
    {value: 'L',label: 'L'},
    {value: 'XL',label: 'XL'},
  ];

  const clearForm = () => {
    setProductName("");
    setProductDetails("");
    setProductPrice("");
    setType("");
    setStockQuantity("");
    setInnerHeight("");
    setInnerLength("");
    setDimensions("");
    setProductImages({
      first: null,
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    });
    setCheckboxes({
      petFriendly: false,
      notPetFriendly: false,
      moreSunlight: false,
      lessSunlight: false,
    });
    
  };

  const handleAddProductClick = () => {
    setShowForm(true);
    setEditindex(null);
    clearForm();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setCheckboxes({
        ...checkboxes,
        [name]: checked,     
      });
    } else {
      if (name === "productName") setProductName(value);
      if (name === "productDetails") setProductDetails(value);
      if (name === "productPrice") setProductPrice(value);
      if (name === "stockQuantity") setStockQuantity(value);
      if (name === "type") setType(value);
      if (name === "innerLength") setInnerLength(value);
      if (name === "innerHeight") setInnerHeight(value);
      if (name === "dimensions") setDimensions(value);
      
     }
  };

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    setProductImages({ ...productImages, [key]: file });
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDetails", productDetails);
    formData.append("productPrice", productPrice);
    formData.append("type", type);
    formData.append("stockQuantity", stockQuantity);
    formData.append('firstImage', productImages.first);
    formData.append('secondImage', productImages.second);
    formData.append('thirdImage', productImages.third);
    formData.append('fourthImage', productImages.fourth);
    formData.append('fifthImage', productImages.fifth);
    formData.append('innerLength',innerLength);
    formData.append('innerHeight', innerHeight);
    formData.append('dimensions', dimensions);


    Object.keys(checkboxes).forEach((key) => {
      formData.append(key, checkboxes[key]);
    });

    colors.map((color) => {
      formData.append(color.value, "true");
    })

    size.map((s) => {
      formData.append(s.value, 'true');
    })

    if (editIndex !== null) {
      const updatedProducts = [...products];
      const productId = updatedProducts[editIndex].productId;
      formData.append('productId', productId)
      updatedProducts[editIndex] = Object.fromEntries(formData);
      try {
        const response = await fetch(`/api/products/${productId}/edit`, {
            method: 'POST',
            body: formData,
        });
        setLoading(false);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (response.status === 200) {
            window.location.href = `/store/${type}/${result.id}`;
        }
        console.log('Product edited:', result);
      } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
      } 
    } else {
      const newProduct = Object.fromEntries(formData);
      setProducts([...products, newProduct]);

      try {
        const response = await fetch('/api/products/add', {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
    
          if (response.status === 200) {
            window.location.href = `/store/${productType}/${result.id}`;
          }
    
          console.log('Product added:', result);
        } catch (error) {
          console.error('There was a problem with your fetch operation:', error);
        }
      }
      setShowForm(false);
    }
    

  const handleEdit = (index) => {
    const editedProduct = products[index];
    setProductName(editedProduct.productName);
    setProductDetails(editedProduct.productDetails);
    setProductPrice(editedProduct.productPrice);
    setType(editedProduct.productTyoe);
    setStockQuantity(editedProduct.stockQuantity);
    setInnerHeight(editedProduct.innerHeight);
    setInnerLength(editedProduct.innerLength);
    setDimensions(editedProduct.dimensions);
    setProductImages({
      first: editedProduct.productImages[0] || null,
      second: editedProduct.productImages[1] || null,
      third: editedProduct.productImages[2] || null,
      fourth: editedProduct.productImages[3] || null,
      fifth: editedProduct.productImages[4] || null,
    });
    setCheckboxes({
      petFriendly: editedProduct.petFriendly,
      petUnfriendly: editedProduct.petUnfriendly,
      moreLight: editedProduct.moreLight,
      lessLight: editedProduct.lessLight,
    });
    setShowForm(true);
    setEditindex(index)
  };

  const handleCheckboxChange = (index) => {
    if (selectedProducts.includes(index)) {
      setSelectedProducts(selectedProducts.filter((i) => i !== index));
    } else {
      setSelectedProducts([...selectedProducts, index]);
    }
  };

  const handleDeleteChecked = async () => {
    const updatedProducts = products.filter((_,i) => !selectedProducts.includes(i));
    const idsToDelete = products
      .filter((_,i) => selectedProducts.includes(i))
      .map((product) => product.id)
    setProducts(updatedProducts);
    setSelectedProducts([])
  };
  return (
    <div className="container">
      {!showForm ? (
        <div >
          <div className="header">
            <h1>All Products</h1>
            <button
              className="add-product-button"
              onClick={handleAddProductClick}
            >
              Add Product
            </button>
          </div>
          
          <table rules="all">
            <thead className="w-[1160px]  mt-[30px] hidden md:flex flex-col gap-5">
              <tr className="justify-start items-start inline-flex flex justify-between items-center pl-[190px]">
                <td className="w-[50px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Product</td>
                <td className="w-[80px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Dimensions</td>
                <td className="w-[50px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Stock Quantity</td>
                <td className="w-[50px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Type</td>
                {/* <td className="w-[120px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Price</td>
                <td className="w-[60px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Size</td> */}
                <td className="w-[100px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Delete</td>
              </tr>
            </thead>

            <tbody className="mt-[30px] hidden md:flex flex-col gap-5">
              {products.map((product, index) =>(
                <tr 
                key={index}
                className="px-[35px] py-[38px] text-xs w-full border-[1px] border-black rounded-2xl bg-white flex justify-between items-center"
                >
                <input type="checkbox" className="product-checkbox" onChange={(e) => handleChange(e)}/>
                  <td className="w-[110px]">{product.productName}</td>
                  <td className="w-[120px]">{product.dimensions}</td>
                  <td className="w-[70px]">{product.stockQuantity}</td>
                  <td className="w-[90px]">{product.productType}</td>
                  {/* <td className="w-[145px]">{product.price}</td>
                  <td className="w-[70px]">{product.size}</td> */}
                  <td className="w-[70px] flex justify-around items-center">
                    <button onClick={() => handleEdit(index)}
                      className="edit-button">
                        Edit
                    </button>
                    {/* <button onClick={() => handleDeleteChecked(index)}
                      className="delete-button">
                        Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br/>
      </div>      
      ) : (
        <div >
        {loading ? (
          <div className="loading-container">
            <l-newtons-cradle 
            size='78'
            speed='1.4'
            color='black'>
            </l-newtons-cradle>
          </div>   
      ) : (
        <form onSubmit={handleSubmit} className="product-form">
          <div className="left-column">
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={productName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="productDetails"
                value={productDetails}
                onChange={handleChange}
                ></textarea>
            </div>
            <div className="form-group">
              <label>Size</label>
              <div className="checkbox-group">
                <Select
                  isMulti
                  name="size"
                  options={sizeOptions}
                  className=""
                  classNamePrefix="select"
                  value={size}
                  onChange={setSize}
                />     
               </div>
            </div>
            <div className="form-group">
              <label>Colour</label>
              <div className="checkbox-group">
              <Select
                isMulti
                name="colors"
                options={colorOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={colors}
                onChange={setColors}
              />
              </div>
            </div>
            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "48%" }}>
                  <label>Stock Quantity</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    value={stockQuantity}
                    onChange={handleChange}
                    />
                </div>
                <div style={{ width: "48%" }}>
                  <label>Product Price</label>
                  <input
                    type="number"
                    name="productPrice"
                    value={productPrice}
                    onChange={handleChange}
                    />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Select Type</label>
              <select name="type" value={type} onChange={handleChange} >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="grobox">GroBox</option>
                <option value="zenpot">ZenPot</option>
                <option value="plants">Plant</option>
              </select>
            </div>
            <div className="form-group">
              <label>Attributes</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="petFriendly"
                    checked={checkboxes.petFriendly}
                    onChange={handleChange}
                    />
                  Pet Friendly
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="notPetFriendly"
                    checked={checkboxes.notPetFriendly}
                    onChange={handleChange}
                    />
                  Not Pet Friendly
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="moreSunlight"
                    checked={checkboxes.moreSunlight}
                    onChange={handleChange}
                    />
                  Requires More Sunlight
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="lessSunlight"
                    checked={checkboxes.lessSunlight}
                    onChange={handleChange}
                    />
                  Requires Less Sunlight
                </label>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="display-column">
              <h3><span class="bolded">Product Gallery</span></h3>
              <div className="gallery-thumbnails">
                {!(Array.isArray(productImages)) ? (
                  Object.keys(productImages).map((key, index) => (
                    <div key={index} className="thumbnail">
                      {!productImages[key] && (
                        <div className="placeholder">Image {index + 1}</div>
                      )}
                      {productImages[key] && (
                        <img
                        
                          src={
                            (typeof(productImages[key]) === 'string') ? productImages[key] : URL.createObjectURL(productImages[key])
                          }
                          alt={`Thumbnail ${index + 1}`}
                          />
                      )}
                      
                      {/* <input type='file' name={`image${index + 1}`} onChange={(e) => handleImageChange(e, index)} /> */}
                    </div>
                  ))
                ) : (
                  productImages.forEach((image) => {
                    <div className="thumbnail">
                      <Image src={image}></Image>
                    </div>
                  })
                )}
                
              </div>
            </div>
            <div className="form-group">
              <label>Upload Images</label>
              <input
                type="file"
                name="first"
                onChange={(e) => handleImageChange(e, "first")}
                />
              <input
                type="file"
                name="second"
                onChange={(e) => handleImageChange(e, "second")}
                />
              <input
                type="file"
                name="third"
                onChange={(e) => handleImageChange(e, "third")}
                />
              <input
                type="file"
                name="fourth"
                onChange={(e) => handleImageChange(e, "fourth")}
                />
              <input
                type="file"
                name="fifth"
                onChange={(e) => handleImageChange(e, "fifth")}
                />
            </div>
          </div>
          <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "48%" }}>
                  <label>Inner Length</label>
                  <input
                    type="number"
                    name="innerLength"
                    value={innerLength}
                    onChange={handleChange}
                    />
                </div>
                <div style={{ width: "48%" }}>
                  <label>inner Height</label>
                  <input
                    type="number"
                    name="innerHeight"
                    value={innerHeight}
                    onChange={handleChange}
                    />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Dimensions</label>
              <input
                type="text"
                name="dimensions"
                value={dimensions}
                onChange={handleChange}
                />
            </div>
                  
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>    
        </form>
      )}
    </div>
    )}
  </div>
  );
};

export async function getServerSideProps() {
  const findAllProducts = (await import("@/pages/api/products/findAllProducts")).default;

  const zenpot = await findAllProducts('zenpot');
  const grobox = await findAllProducts('grobox');
  const plant = await findAllProducts('plants');

  const products = [...(zenpot ? zenpot : []), ...(grobox ? grobox : []), ...(plant ? plant : [])];

  return {
    props: {
      products: products
    }
  }
}

export default ProductListPage;
