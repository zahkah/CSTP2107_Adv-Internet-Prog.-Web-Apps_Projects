import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { Product } from "../type";

interface ProductCardProps {
  data: Product;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [userDocId, setUserDocId] = useState<string>("");
  const [isFavoritesChanged, setIsFavoritesChanged] = useState<boolean>(false);

  useEffect(() => {
    getUserInfo();
  }, [isFavoritesChanged]);

  const getUserInfo = async () => {
    const user = localStorage.getItem("current-user") || "";
    if (!user) {
      throw new Error("User not found");
    }

    const userParsed = JSON.parse(user);

    // Query user's document
    const userReference = collection(db, "users");
    const foundUser = query(
      userReference,
      where("userId", "==", userParsed.uid)
    );
    const docsDataForUser = await getDocs(foundUser);
    const userInfo = docsDataForUser.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    if (userInfo.length === 0) {
      throw new Error("User not found");
    }

    const userDocId = userInfo[0].id; // User document ID
    const currentFavorites = userInfo[0].favorites || [];
    setUserDocId(userDocId);
    setFavorites(currentFavorites);
  };

  const handleFavorites = async (productId: string) => {
    try {
      // this means the product was is not marked as favorite
      if (!favorites.includes(productId)) {
        await updateDoc(doc(db, "users", userDocId), {
          favorites: arrayUnion(productId),
        });
        alert("Product added to favorites");
      } else {
        // When the product is already there
        await updateDoc(doc(db, "users", userDocId), {
          favorites: arrayRemove(productId),
        });
        alert("Product removed from favorites");
      }
      setIsFavoritesChanged(!isFavoritesChanged);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Card style={{ flexBasis: 400 }}>
      <CardMedia sx={{ height: 140 }} image={props.data.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.data.description}
        </Typography>
        <Typography>{props.data.category}</Typography>
        <Typography>$ {props.data.price}</Typography>

      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleFavorites(props.data.id as string)}
          size="small"
          color={favorites.includes(props.data.id as string) ? 'error': 'primary'}
        >
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
