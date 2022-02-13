export const splash = () => {
  return (
    <ImageBackground
      source={Img.dealBg}
      style={{
        flex: 1,
        backgroundColor: AppColors.primaryThemeColor,
      }}
      imageStyle={{height: hp(100), width: wp(100)}}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={{flex: 1}}
        // contentContainerStyle={{ flex: 1, paddingBottom: 100 }}
      ></ScrollView>
    </ImageBackground>
  );
};
