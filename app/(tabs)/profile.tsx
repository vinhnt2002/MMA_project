import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons, images } from "../../constants";

import InfoBox from "@/components/profile/info-box";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { useGetAllPostsQuery } from "@/redux/features/posts/postApi";
import PostCard from "@/components/profile/post-card";
import EmptyState from "@/components/profile/empty-state";

const Profile = () => {
  const { user } = useSelector((state: any) => state.auth);

  const { data, isLoading: postLoading } = useGetAllPostsQuery({ userId: user?._id });

  const [logout, setLogout] = useState(false);
  const { isLoading } = useLogOutQuery(null, {
    skip: !logout ? true : false,
  });

  const handleLogout = async () => {
    setLogout(true);
  };


  if (postLoading) {
    return <Text>...Loading</Text>;
  }
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <FlatList
        data={data.posts}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            thumbnail={item.thumbnail.url}
            video={item.video}
            creator={item.authorId?.name}
            avatar={item.authorId?.avatar.url}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Post Found"
            subtitle="No posts found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={handleLogout}
              disabled={isLoading}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout as any}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              {user?.avatar.url ? (
                <Image
                  source={{ uri: user.avatar.url }}
                  className="w-[90%] h-[90%] rounded-lg"
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={images.profile as any}
                  className="w-[90%] h-[90%] rounded-lg"
                  resizeMode="cover"
                />
              )}
            </View>

            <InfoBox
              title={user?.name}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <InfoBox
              title={user?.email}
              containerStyles="-mt-5"
              titleStyles="text-sm"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={data.posts.length || 0}
                subtitle="Bài viết"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox title="0" subtitle="Đơn hàng" titleStyles="text-xl" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
