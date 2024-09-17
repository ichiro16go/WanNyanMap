// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: "WNMap",
    slug: "wannyanmap",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMaps: {
          apiKey: "AIzaSyDGwpHlnLrF3qeaH-6Kcvhhuce11jMwsxY", // 環境変数を使用
        }
      }
    },
    android: {
      package: "com.example.wnmap",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      config: {
        googleMaps: {
          apiKey: "AIzaSyDGwpHlnLrF3qeaH-6Kcvhhuce11jMwsxY", // 環境変数を使用
        }
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "f10c2dc9-a21e-4b51-b4cc-b413fba4f8d1"
      },
      GOOGLE_PLACES_API_KEY:"AIzaSyDGwpHlnLrF3qeaH-6Kcvhhuce11jMwsxY",
    },
    cli: {
      appVersionSource: "remote" // または "local" を選択
    }
  }
};
