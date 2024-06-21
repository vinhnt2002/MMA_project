import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import Loader from "@/components/loader/loader";
import { LinearGradient } from "expo-linear-gradient";
import ProductCard from "@/components/cards/product.card";
import { useGetProductsQuery } from "@/redux/features/products/productApi";

export default function ProductsScreen() {
  const { data, isLoading } = useGetProductsQuery({});

  const [products, setProducts] = useState<ProductsType[]>(data.products);
  const [originalProducts, setOriginalProducts] = useState<ProductsType[]>(
    data.products
  );
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);

  const fixedCategories = [
    "All",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ];
  const [activeCategory, setactiveCategory] = useState(fixedCategories[0]);

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleCategories = (e: string) => {
    setactiveCategory(e);
    if (e === fixedCategories[0]) {
      setProducts(originalProducts);
    } else {
      const filterproducts = originalProducts.filter((product: ProductsType) =>
        product.categories.includes(e)
      );
      setProducts(filterproducts);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LinearGradient
          colors={["#E5ECF9", "#F6F7F9"]}
          style={{ flex: 1, paddingTop: 65 }}
        >
          <View style={{ padding: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {fixedCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 10,
                    backgroundColor:
                      activeCategory === category ? "#2467EC" : "#000",
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    marginRight: 5,
                  }}
                  onPress={() => handleCategories(category)}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View>
            <ScrollView style={{ marginHorizontal: 15, gap: 12 }}>
              {products?.map((item: ProductsType, index: number) => (
                <ProductCard item={item} key={index} />
              ))}
            </ScrollView>
            {products?.length === 0 && (
              <Text
                style={{ textAlign: "center", paddingTop: 50, fontSize: 18 }}
              >
                Không có sản phẩm!
              </Text>
            )}
          </View>
        </LinearGradient>
      )}
    </>
  );
}
