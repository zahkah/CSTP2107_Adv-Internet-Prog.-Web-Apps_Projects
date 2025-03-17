import React, { FC, useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ProductsContext from "../context/ProductsContext";
import { Product } from "../type";
import ProductCard from "./ProductCard";
import UserContext from "../context/UserContext";

type ViewCreatedProductsType = {
  isSubmitted: boolean;
};

const ViewCreatedProducts: FC<ViewCreatedProductsType> = ({ isSubmitted }) => {
  const productReference = collection(db, "products");
  const { productsData, setProductsData } = useContext(ProductsContext);
  const { userData, setUserData } = useContext(UserContext);

  const [productsCreatedByOthers, setProductsCreatedByOthers] = useState<
    Product[]
  >([]);

  useEffect(() => {
    getProductsList();
  }, [isSubmitted]);

  const getProductsList = async () => {
    const products = await getDocs(productReference);
    const productsReadableData = products.docs.map((product) => {
      return {
        ...product.data(),
        id: product.id,
      };
    }) as Product[];

    const user = localStorage.getItem("current-user") || "";
    const userParsed = JSON.parse(user);

    // These are the products that were created by the user who is logged in
    const filteredProducts = productsReadableData.filter(
      (product) => product.authorId === userParsed.uid
    );

    // These are the products that were created by others
    const productsCreatedByOthers = productsReadableData.filter(
      (product) => product.authorId !== userParsed.uid
    );

    setProductsCreatedByOthers(productsCreatedByOthers);

    setProductsData({
      ...productsData,
      createdProducts: filteredProducts,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <Typography variant="h4">Created Products by Logged in User</Typography>

      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">
        {productsData.createdProducts.map((data, index) => {
          return <ProductCard data={data} key={index} />;
        })}
      </Box>

      <Typography variant="h4">Created Products by Others</Typography>
      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">
        {productsCreatedByOthers.map((data, index) => {
          return <ProductCard data={data} key={index} />;
        })}
      </Box>

    </Box>
  );
};

export default ViewCreatedProducts;
